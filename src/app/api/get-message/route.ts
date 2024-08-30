import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { ResponseModel } from '@/model/Response';

export async function GET() {
  await dbConnect();

  try {
    const responses = await ResponseModel.find();
    return NextResponse.json({
      success: true,
      data: responses,
    });
  } catch (error) {
    console.error('Error fetching responses:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error fetching responses',
      },
      { status: 500 }
    );
  }
}
