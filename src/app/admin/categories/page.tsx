'use client';

import { useState, useEffect } from 'react';

interface Category {
  id: string;
  name: string;
  slug: string;
  filterClass: string;
  icon: string;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState<Partial<Category>>({
    name: '',
    icon: 'bi-folder'
  });

  const iconOptions = [
    'bi-globe', 'bi-phone', 'bi-palette', 'bi-ui-checks',
    'bi-laptop', 'bi-tablet', 'bi-code-slash', 'bi-pie-chart',
    'bi-cart', 'bi-building', 'bi-briefcase', 'bi-camera',
    'bi-music-note', 'bi-film', 'bi-gamepad', 'bi-heart'
  ];

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/portfolio/categories');
      setCategories(await res.json());
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (category?: Category) => {
    if (category) {
      setEditingCategory(category);
      setFormData(category);
    } else {
      setEditingCategory(null);
      setFormData({ name: '', icon: 'bi-folder' });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingCategory(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingCategory) {
        await fetch('/api/portfolio/categories', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, id: editingCategory.id })
        });
      } else {
        await fetch('/api/portfolio/categories', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      }
      closeModal();
      fetchCategories();
    } catch (error) {
      console.error('Failed to save category:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this category?')) return;
    
    try {
      await fetch(`/api/portfolio/categories?id=${id}`, { method: 'DELETE' });
      fetchCategories();
    } catch (error) {
      console.error('Failed to delete category:', error);
    }
  };

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-page-header">
        <h1>Categories</h1>
        <p>Manage project categories</p>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h2>All Categories ({categories.length})</h2>
          <button className="btn btn-primary" onClick={() => openModal()}>
            <i className="bi bi-plus"></i>
            Add Category
          </button>
        </div>
        <div className="admin-card-body">
          {categories.length === 0 ? (
            <div className="empty-state">
              <i className="bi bi-tags"></i>
              <h3>No categories yet</h3>
              <p>Create categories to organize your projects</p>
              <button className="btn btn-primary" onClick={() => openModal()}>
                Add Category
              </button>
            </div>
          ) : (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Icon</th>
                    <th>Name</th>
                    <th>Slug</th>
                    <th>Filter Class</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => (
                    <tr key={category.id}>
                      <td>
                        <i className={`bi ${category.icon}`} style={{ fontSize: '1.5rem' }}></i>
                      </td>
                      <td>
                        <strong>{category.name}</strong>
                      </td>
                      <td>
                        <code>{category.slug}</code>
                      </td>
                      <td>
                        <code>{category.filterClass}</code>
                      </td>
                      <td>
                        <div className="actions">
                          <button className="edit" onClick={() => openModal(category)}>
                            <i className="bi bi-pencil"></i>
                          </button>
                          <button className="delete" onClick={() => handleDelete(category.id)}>
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '500px' }}>
            <div className="modal-header">
              <h3>{editingCategory ? 'Edit Category' : 'Add New Category'}</h3>
              <button className="modal-close" onClick={closeModal}>
                <i className="bi bi-x"></i>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Category Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="e.g., Web Design"
                  />
                </div>

                <div className="form-group">
                  <label>Icon</label>
                  <select
                    value={formData.icon}
                    onChange={e => setFormData({ ...formData, icon: e.target.value })}
                  >
                    {iconOptions.map(icon => (
                      <option key={icon} value={icon}>
                        {icon.replace('bi-', '').replace(/-/g, ' ')}
                      </option>
                    ))}
                  </select>
                  <div style={{ marginTop: '0.5rem', fontSize: '1.5rem' }}>
                    <i className={`bi ${formData.icon}`}></i>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingCategory ? 'Update Category' : 'Add Category'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
