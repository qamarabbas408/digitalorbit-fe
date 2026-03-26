import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'portfolio.json');

function readData() {
  const data = fs.readFileSync(dataFile, 'utf-8');
  return JSON.parse(data);
}

export async function GET() {
  try {
    const data = readData();
    return NextResponse.json(data.categories);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read categories' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = readData();
    
    const newCategory = {
      id: body.id || body.name.toLowerCase().replace(/\s+/g, '-'),
      name: body.name,
      slug: body.name.toLowerCase().replace(/\s+/g, '-'),
      filterClass: `filter-${body.name.toLowerCase().replace(/\s+/g, '-')}`,
      icon: body.icon || 'bi-folder'
    };
    
    data.categories.push(newCategory);
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    
    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create category' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const data = readData();
    
    const index = data.categories.findIndex((c: any) => c.id === body.id);
    if (index === -1) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }
    
    data.categories[index] = { ...data.categories[index], ...body };
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    
    return NextResponse.json(data.categories[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update category' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const data = readData();
    
    const index = data.categories.findIndex((c: any) => c.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }
    
    data.categories.splice(index, 1);
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete category' }, { status: 500 });
  }
}
