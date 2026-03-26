-- Create database
CREATE DATABASE IF NOT EXISTS orbit_portfolio;
USE orbit_portfolio;

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL UNIQUE,
  filter_class VARCHAR(50) NOT NULL,
  icon VARCHAR(50) DEFAULT 'bi-folder',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id VARCHAR(50) PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  subtitle VARCHAR(200) DEFAULT '',
  category_id VARCHAR(50) NOT NULL,
  year VARCHAR(20) DEFAULT '',
  technologies TEXT,
  description TEXT,
  image VARCHAR(500) DEFAULT '',
  gallery TEXT,
  featured BOOLEAN DEFAULT FALSE,
  client VARCHAR(200) DEFAULT '',
  url VARCHAR(500) DEFAULT '#',
  status VARCHAR(20) DEFAULT 'published',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- Insert default categories
INSERT IGNORE INTO categories (id, name, slug, filter_class, icon) VALUES
('web-design', 'Web Design', 'web-design', 'filter-web', 'bi-globe'),
('mobile-design', 'Mobile Design', 'mobile-design', 'filter-mobile', 'bi-phone'),
('branding', 'Branding', 'branding', 'filter-branding', 'bi-palette'),
('ui-ux', 'UI/UX', 'ui-ux', 'filter-ui', 'bi-ui-checks');

-- Insert sample projects
INSERT IGNORE INTO projects (id, title, subtitle, category_id, year, technologies, description, image, featured, client, url, status) VALUES
('1', 'BookNStay', 'Hotel & Event Booking Platform', 'web-design', '2024-2025', '["Laravel", "ReactJS", "MySQL", "REST APIs"]', 'Developed a full-stack web application for the Gilgit Baltistan hospitality industry, enabling users to book hotels and events through a centralized platform. The system includes booking management, user authentication, and admin dashboards for efficient operations.', '/assets/img/portfolio/portfolio-1.webp', TRUE, 'Hospitality Industry', '#', 'published'),
('2', 'eSchool ERP', 'LMS + School Management System', 'web-design', '2024-2025', '["Laravel", "ReactJS", "MySQL", "REST APIs"]', 'Built a comprehensive ERP system combining LMS features with school management functionalities. The platform supports course management, student and teacher workflows, role-based access, and performance tracking dashboards.', '/assets/img/portfolio/portfolio-2.webp', TRUE, 'Education Sector', '#', 'published'),
('3', 'JPay', 'HR Management System', 'web-design', '2023-2024', '["ReactJS", "JavaScript", "Axios", "REST APIs"]', 'Developed a web-based HR system for managing companies and employees, including dashboards, employee data handling, and workflows.', '/assets/img/portfolio/portfolio-4.webp', FALSE, 'Corporate', '#', 'published'),
('4', 'SpeedyHR', 'Advanced HR Platform', 'web-design', '2023-2024', '["ReactJS", "Redux", "JavaScript", "REST APIs"]', 'Designed an advanced HR management system enabling organizations to manage employees, payroll processes, and internal workflows with improved efficiency.', '/assets/img/portfolio/portfolio-5.webp', FALSE, 'HR Departments', '#', 'published'),
('5', 'CloudMunshi', 'eCommerce Integration Platform', 'web-design', '2023-2024', '["ReactJS", "APIs Integration", "JavaScript"]', 'Built a platform integrating multiple eCommerce stores into a unified system, allowing centralized monitoring and management of business operations.', '/assets/img/portfolio/portfolio-6.webp', FALSE, 'eCommerce Businesses', '#', 'published'),
('6', 'CloudInstaller', 'Build Distribution Platform', 'web-design', '2023', '["ReactJS", "JavaScript", "File Management"]', 'Developed a web-based portal for sharing mobile application builds (IPA/APK) among teams and testers, enabling efficient version control and internal distribution.', '/assets/img/portfolio/portfolio-7.webp', FALSE, 'Development Teams', '#', 'published'),
('7', 'Zendesk Clone', 'Web Chat Application', 'web-design', '2023', '["ReactJS", "JavaScript", "Real-time Communication"]', 'Developed a real-time web chat application with a user-friendly interface, enabling seamless communication and interaction between users.', '/assets/img/portfolio/portfolio-8.webp', FALSE, 'Support Teams', '#', 'published');
