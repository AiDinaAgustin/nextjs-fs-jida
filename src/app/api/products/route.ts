// src/app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";

export type Product = {
  id: string;
  name: string;
  price: number;
  description?: string;
};

export let products: Product[] = [
  { id: "1", name: "Product 1", price: 99.99, description: "Description for product 1" },
  { id: "2", name: "Product 2", price: 149.99, description: "Description for product 2" },
];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name || body.price === undefined) {
    return NextResponse.json({ error: "Name and price are required" }, { status: 400 });
  }
  const newProduct: Product = {
    id: Date.now().toString(),
    name: body.name,
    price: body.price,
    description: body.description,
  };
  products.push(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}