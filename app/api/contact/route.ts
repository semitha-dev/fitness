import { addContact } from '../../lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    await addContact(name, phone, email);

    return NextResponse.json(
      { success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving contact:', error);
    return NextResponse.json(
      { error: 'Failed to save contact' },
      { status: 500 }
    );
  }
}
