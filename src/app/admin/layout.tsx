'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const scrollbarStyles = `
  /* Custom scrollbar for sidebar - dark theme */
  .scrollbar-dark::-webkit-scrollbar {
    width: 6px;
  }
  .scrollbar-dark::-webkit-scrollbar-track {
    background: transparent;
  }
  .scrollbar-dark::-webkit-scrollbar-thumb {
    background: #475569;
    border-radius: 3px;
  }
  .scrollbar-dark::-webkit-scrollbar-thumb:hover {
    background: #64748b;
  }
  
  /* Custom scrollbar for modals/content - light theme */
  .scrollbar-light::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  .scrollbar-light::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 3px;
  }
  .scrollbar-light::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }
  .scrollbar-light::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
  
  /* Firefox scrollbar */
  .scrollbar-dark {
    scrollbar-width: thin;
    scrollbar-color: #475569 transparent;
  }
  .scrollbar-light {
    scrollbar-width: thin;
    scrollbar-color: #cbd5e1 #f1f5f9;
  }
`;

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
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        <style jsx global>{scrollbarStyles}</style>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                <i className="bi bi-shield-lock"></i>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
              <p className="text-gray-600 mt-1">Portfolio Management System</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="text-left">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="Enter admin password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-400">Default password: admin123</p>
          </div>
        </div>
      </>
    );
  }

  const navItems = [
    { href: '/admin', icon: 'bi-speedometer2', label: 'Dashboard' },
    { href: '/admin/projects', icon: 'bi-briefcase', label: 'Projects' },
    { href: '/admin/categories', icon: 'bi-tags', label: 'Categories' },
    { href: '/admin/services', icon: 'bi-gear', label: 'Services' },
    { href: '/admin/stats', icon: 'bi-bar-chart', label: 'Stats' },
    { href: '/admin/team', icon: 'bi-people', label: 'Team' },
    { href: '/admin/testimonials', icon: 'bi-chat-quote', label: 'Testimonials' },
    { href: '/admin/contacts', icon: 'bi-envelope', label: 'Contacts' },
    { href: '/admin/settings', icon: 'bi-sliders', label: 'Settings' },
  ];

  return (
    <>
      <style jsx global>{scrollbarStyles}</style>
      <div className="flex min-h-screen bg-gray-100">
        <aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-screen z-40">
        <div className="px-6 py-5 border-b border-slate-700 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <i className="bi bi-hexagon text-lg"></i>
          </div>
          <span className="text-lg font-bold">DigitalOrbit Admin</span>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 scrollbar-dark">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-6 py-3 transition-colors ${
                pathname === item.href
                  ? 'bg-blue-600/20 text-white border-l-[3px] border-blue-500'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <i className={`bi ${item.icon} text-lg`}></i>
              <span>{item.label}</span>
            </Link>
          ))}
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <i className="bi bi-box-arrow-up-right text-lg"></i>
            <span>View Site</span>
          </Link>
        </nav>
        
        <div className="px-4 py-4 border-t border-slate-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-2.5 text-slate-400 border border-slate-700 rounded-lg hover:text-red-400 hover:border-red-400 hover:bg-red-400/10 transition-colors"
          >
            <i className="bi bi-box-arrow-left text-lg"></i>
            <span>Logout</span>
          </button>
        </div>
      </aside>
      
      <main className="flex-1 ml-64 overflow-y-auto scrollbar-light">
        {children}
      </main>
    </div>
    </>
  );
}
