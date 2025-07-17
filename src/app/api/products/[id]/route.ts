// src/app/api/products/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { products } from "../route";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const body = await request.json();
  const index = products.findIndex((p) => p.id === params.id);
  if (index === -1) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  products[index] = {
    ...products[index],
    name: body.name ?? products[index].name,
    price: body.price ?? products[index].price,
    description: body.description ?? products[index].description,
  };
  return NextResponse.json(products[index]);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const index = products.findIndex((p) => p.id === params.id);
  if (index === -1) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  const deletedProduct = products[index];
  products.splice(index, 1);
  return NextResponse.json(deletedProduct);
}