import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'portfolio.json');

function readData() {
  const data = fs.readFileSync(dataFile, 'utf-8');
  return JSON.parse(data);
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = readData();
    const project = data.projects.find((p: any) => p.id === id);
    
    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read project' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const data = readData();
    
    const index = data.projects.findIndex((p: any) => p.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    
    data.projects[index] = { ...data.projects[index], ...body, id };
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    
    return NextResponse.json(data.projects[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = readData();
    
    const index = data.projects.findIndex((p: any) => p.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    
    data.projects.splice(index, 1);
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
