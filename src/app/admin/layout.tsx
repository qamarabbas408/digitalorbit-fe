'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './admin.css';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem('adminAuthenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get('password') as string;
    
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';
    
    if (password === adminPassword) {
      localStorage.setItem('adminAuthenticated', 'true');
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div className="admin-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <div className="login-container">
          <div className="login-header">
            <i className="bi bi-shield-lock"></i>
            <h1>Admin Login</h1>
            <p>Portfolio Management System</p>
          </div>
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter admin password"
              />
            </div>
            <button type="submit" className="btn-login">
              Login
            </button>
          </form>
          <p className="login-hint">Default password: admin123</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <i className="bi bi-hexagon"></i>
          <span>Orbit Admin</span>
        </div>
        <nav className="sidebar-nav">
          <Link 
            href="/admin" 
            className={`nav-item ${pathname === '/admin' ? 'active' : ''}`}
          >
            <i className="bi bi-speedometer2"></i>
            <span>Dashboard</span>
          </Link>
          <Link 
            href="/admin/projects" 
            className={`nav-item ${pathname === '/admin/projects' ? 'active' : ''}`}
          >
            <i className="bi bi-briefcase"></i>
            <span>Projects</span>
          </Link>
          <Link 
            href="/admin/categories" 
            className={`nav-item ${pathname === '/admin/categories' ? 'active' : ''}`}
          >
            <i className="bi bi-tags"></i>
            <span>Categories</span>
          </Link>
          <Link 
            href="/" 
            className="nav-item"
            target="_blank"
          >
            <i className="bi bi-box-arrow-up-right"></i>
            <span>View Site</span>
          </Link>
        </nav>
        <div className="sidebar-footer">
          <button onClick={handleLogout} className="btn-logout">
            <i className="bi bi-box-arrow-left"></i>
            <span>Logout</span>
          </button>
        </div>
      </aside>
      <main className="admin-main">
        {children}
      </main>
    </div>
  );
}
