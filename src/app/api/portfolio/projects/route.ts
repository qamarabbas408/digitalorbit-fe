import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'portfolio.json');

function readData() {
  const data = fs.readFileSync(dataFile, 'utf-8');
  return JSON.parse(data);
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get('categoryId');
    const data = readData();
    
    let projects = data.projects;
    if (categoryId) {
      projects = projects.filter((p: any) => p.categoryId === categoryId);
    }
    
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read projects' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = readData();
    
    const newProject = {
      id: Date.now().toString(),
      title: body.title,
      subtitle: body.subtitle || '',
      categoryId: body.categoryId,
      year: body.year || new Date().getFullYear().toString(),
      technologies: body.technologies || [],
      description: body.description || '',
      image: body.image || '/assets/img/portfolio/placeholder.webp',
      gallery: body.gallery || [],
      featured: body.featured || false,
      client: body.client || '',
      url: body.url || '#',
      status: body.status || 'published',
      createdAt: new Date().toISOString().split('T')[0]
    };
    
    data.projects.push(newProject);
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}
