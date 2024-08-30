import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { ResponseModel } from '@/model/Response';

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { name, email, message } = await request.json();

    const newResponse = new ResponseModel({
      name,
      email,
      message,
    });

    await newResponse.save();

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully!',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error saving message',
      },
      { status: 500 }
    );
  }
}
