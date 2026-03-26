'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  categoryId: string;
  featured: boolean;
  status: string;
}

interface Category {
  id: string;
  name: string;
}

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [projectsRes, categoriesRes] = await Promise.all([
        fetch('/api/portfolio/projects'),
        fetch('/api/portfolio/categories')
      ]);
      const projectsData = await projectsRes.json();
      const categoriesData = await categoriesRes.json();
      setProjects(projectsData);
      setCategories(categoriesData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  const publishedProjects = projects.filter(p => p.status === 'published').length;
  const featuredProjects = projects.filter(p => p.featured).length;
  const draftProjects = projects.filter(p => p.status === 'draft').length;

  return (
    <div>
      <div className="admin-page-header">
        <h1>Dashboard</h1>
        <p>Welcome to the Orbit Portfolio Management System</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">
            <i className="bi bi-briefcase"></i>
          </div>
          <h3>{projects.length}</h3>
          <p>Total Projects</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon green">
            <i className="bi bi-check-circle"></i>
          </div>
          <h3>{publishedProjects}</h3>
          <p>Published</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon purple">
            <i className="bi bi-star"></i>
          </div>
          <h3>{featuredProjects}</h3>
          <p>Featured</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon orange">
            <i className="bi bi-folder"></i>
          </div>
          <h3>{categories.length}</h3>
          <p>Categories</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="admin-card">
          <div className="admin-card-header">
            <h2>Recent Projects</h2>
            <Link href="/admin/projects" className="btn btn-secondary btn-sm">
              View All
            </Link>
          </div>
          <div className="admin-card-body">
            {projects.length === 0 ? (
              <div className="empty-state">
                <i className="bi bi-inbox"></i>
                <h3>No projects yet</h3>
                <p>Add your first project to get started</p>
                <Link href="/admin/projects" className="btn btn-primary">
                  Add Project
                </Link>
              </div>
            ) : (
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.slice(0, 5).map((project) => (
                      <tr key={project.id}>
                        <td>
                          <strong>{project.title}</strong>
                        </td>
                        <td>
                          <span className={`category-badge ${project.categoryId}`}>
                            {categories.find(c => c.id === project.categoryId)?.name || project.categoryId}
                          </span>
                        </td>
                        <td>
                          <span className={`status-badge ${project.status}`}>
                            {project.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-card-header">
            <h2>Categories</h2>
            <Link href="/admin/categories" className="btn btn-secondary btn-sm">
              Manage
            </Link>
          </div>
          <div className="admin-card-body">
            {categories.length === 0 ? (
              <div className="empty-state">
                <i className="bi bi-tags"></i>
                <h3>No categories yet</h3>
                <p>Create categories to organize your projects</p>
                <Link href="/admin/categories" className="btn btn-primary">
                  Add Category
                </Link>
              </div>
            ) : (
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Projects</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category) => (
                      <tr key={category.id}>
                        <td>
                          <strong>{category.name}</strong>
                        </td>
                        <td>
                          {projects.filter(p => p.categoryId === category.id).length}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
