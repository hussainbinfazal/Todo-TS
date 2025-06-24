import { NextResponse, NextRequest } from "next/server";
import Todo from "@/model/todoModal";
import { get } from "http";
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const getTodos = await Todo.find();
    return NextResponse.json({
      message: "Hello World",
      getTodos,
    });
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json({ message: "Error" });
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const newTodo = await Todo.create(body);
    return NextResponse.json({
      message: "Todo created successfully",
      newTodo,
    });
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json({ message: "Error" });
  }
}
export async function PUT(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const todoInDB = await Todo.findById(body._id);
    todoInDB.todo = body.todo;
    todoInDB.isCompleted = body.isCompleted;
    todoInDB.isUpdated = body.isUpdated;
    const newTodo = await todoInDB.save();
    return NextResponse.json({
      message: "Todo created successfully",
      newTodo,
    });
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json({ message: "Error" });
  }
}
export async function DELETE(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const todoInDB = await Todo.findByIdAndDelete(body._id);
    
    return NextResponse.json({
      message: "Todo deleted successfully",
    },{status:201});
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json({ message: "Error" });
  }
}
