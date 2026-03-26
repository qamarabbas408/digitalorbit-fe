'use client';

import { useState, useEffect } from 'react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  categoryId: string;
  year: string;
  technologies: string[];
  description: string;
  image: string;
  featured: boolean;
  client: string;
  url: string;
  status: string;
}

interface Category {
  id: string;
  name: string;
  filterClass: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    subtitle: '',
    categoryId: '',
    year: new Date().getFullYear().toString(),
    technologies: [],
    description: '',
    image: '',
    featured: false,
    client: '',
    url: '',
    status: 'published'
  });
  const [techInput, setTechInput] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [projectsRes, categoriesRes] = await Promise.all([
        fetch('/api/portfolio/projects'),
        fetch('/api/portfolio/categories')
      ]);
      setProjects(await projectsRes.json());
      setCategories(await categoriesRes.json());
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (project?: Project) => {
    if (project) {
      setEditingProject(project);
      setFormData(project);
      setTechInput(project.technologies?.join(', ') || '');
    } else {
      setEditingProject(null);
      setFormData({
        title: '',
        subtitle: '',
        categoryId: categories[0]?.id || '',
        year: new Date().getFullYear().toString(),
        technologies: [],
        description: '',
        image: '',
        featured: false,
        client: '',
        url: '',
        status: 'published'
      });
      setTechInput('');
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingProject(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const projectData = {
      ...formData,
      technologies: techInput.split(',').map(t => t.trim()).filter(Boolean)
    };

    try {
      if (editingProject) {
        await fetch(`/api/portfolio/projects/${editingProject.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(projectData)
        });
      } else {
        await fetch('/api/portfolio/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(projectData)
        });
      }
      closeModal();
      fetchData();
    } catch (error) {
      console.error('Failed to save project:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    
    try {
      await fetch(`/api/portfolio/projects/${id}`, { method: 'DELETE' });
      fetchData();
    } catch (error) {
      console.error('Failed to delete project:', error);
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
        <h1>Projects</h1>
        <p>Manage your portfolio projects</p>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h2>All Projects ({projects.length})</h2>
          <button className="btn btn-primary" onClick={() => openModal()}>
            <i className="bi bi-plus"></i>
            Add Project
          </button>
        </div>
        <div className="admin-card-body">
          {projects.length === 0 ? (
            <div className="empty-state">
              <i className="bi bi-briefcase"></i>
              <h3>No projects yet</h3>
              <p>Add your first project to showcase your work</p>
              <button className="btn btn-primary" onClick={() => openModal()}>
                Add Project
              </button>
            </div>
          ) : (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Technologies</th>
                    <th>Featured</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id}>
                      <td>
                        <img
                          src={project.image || '/assets/img/portfolio/placeholder.webp'}
                          alt={project.title}
                          className="project-thumb"
                        />
                      </td>
                      <td>
                        <strong>{project.title}</strong>
                        {project.subtitle && (
                          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                            {project.subtitle}
                          </div>
                        )}
                      </td>
                      <td>
                        <span className={`category-badge ${project.categoryId}`}>
                          {categories.find(c => c.id === project.categoryId)?.name || project.categoryId}
                        </span>
                      </td>
                      <td>
                        <div className="tech-tags">
                          {project.technologies?.slice(0, 3).map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                          ))}
                          {(project.technologies?.length || 0) > 3 && (
                            <span className="tech-tag">+{project.technologies.length - 3}</span>
                          )}
                        </div>
                      </td>
                      <td>
                        {project.featured && (
                          <span className="featured-badge">
                            <i className="bi bi-star-fill"></i> Featured
                          </span>
                        )}
                      </td>
                      <td>
                        <span className={`status-badge ${project.status}`}>
                          {project.status}
                        </span>
                      </td>
                      <td>
                        <div className="actions">
                          <button className="edit" onClick={() => openModal(project)}>
                            <i className="bi bi-pencil"></i>
                          </button>
                          <button className="delete" onClick={() => handleDelete(project.id)}>
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
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{editingProject ? 'Edit Project' : 'Add New Project'}</h3>
              <button className="modal-close" onClick={closeModal}>
                <i className="bi bi-x"></i>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-row">
                  <div className="form-group">
                    <label>Project Title *</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={e => setFormData({ ...formData, title: e.target.value })}
                      required
                      placeholder="e.g., BookNStay"
                    />
                  </div>
                  <div className="form-group">
                    <label>Subtitle</label>
                    <input
                      type="text"
                      value={formData.subtitle}
                      onChange={e => setFormData({ ...formData, subtitle: e.target.value })}
                      placeholder="e.g., Hotel Booking Platform"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Category *</label>
                    <select
                      value={formData.categoryId}
                      onChange={e => setFormData({ ...formData, categoryId: e.target.value })}
                      required
                    >
                      <option value="">Select category</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Year</label>
                    <input
                      type="text"
                      value={formData.year}
                      onChange={e => setFormData({ ...formData, year: e.target.value })}
                      placeholder="e.g., 2024"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Technologies (comma-separated)</label>
                  <input
                    type="text"
                    value={techInput}
                    onChange={e => setTechInput(e.target.value)}
                    placeholder="e.g., ReactJS, Laravel, MySQL"
                  />
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={formData.description}
                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe the project..."
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Client</label>
                    <input
                      type="text"
                      value={formData.client}
                      onChange={e => setFormData({ ...formData, client: e.target.value })}
                      placeholder="Client name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Project URL</label>
                    <input
                      type="url"
                      value={formData.url}
                      onChange={e => setFormData({ ...formData, url: e.target.value })}
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Image URL</label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={e => setFormData({ ...formData, image: e.target.value })}
                    placeholder="/assets/img/portfolio/project.webp"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group checkbox">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={formData.featured}
                      onChange={e => setFormData({ ...formData, featured: e.target.checked })}
                    />
                    <label htmlFor="featured">Featured Project</label>
                  </div>
                  <div className="form-group">
                    <label>Status</label>
                    <select
                      value={formData.status}
                      onChange={e => setFormData({ ...formData, status: e.target.value })}
                    >
                      <option value="published">Published</option>
                      <option value="draft">Draft</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingProject ? 'Update Project' : 'Add Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
