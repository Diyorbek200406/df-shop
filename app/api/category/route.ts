import Category from "@/database/category";
import { ConnectToDatabase } from "@/lib/mongoose";
import { CategoryProps } from "@/types";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    await ConnectToDatabase();
    const body: CategoryProps = await req.json();

    const { name, image, title } = body;

    const isExist = await Category.findOne({ name, image, title });

    if (isExist) {
      return NextResponse.json({ success: false, message: "Category already exists" });
    }

    const category = await Category.create(body);

    return NextResponse.json({ success: true, data: category });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Something went wrong while creating the category" });
  }
}

export async function GET(req: Request) {
  try {
    await ConnectToDatabase();

    const category = await Category.find();

    return NextResponse.json({ success: true, data: category });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Something went wrong getting category" });
  }
}

export async function DELETE(req: Request) {
  try {
    await ConnectToDatabase();

    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");

    await Category.findByIdAndDelete(id);

    return NextResponse.json({ success: true, message: "Category deleted successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Something went wrong while deleting category" });
  }
}
