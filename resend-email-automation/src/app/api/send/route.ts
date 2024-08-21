import { EmailTemplate } from '@/app/components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, email } = await request.json();

    const data = await resend.emails.send({
      from: 'Kirimase <kirimase@resend.dev>',
      to: [email], //can only send mails at this moment to the id which you have registered on resend (w/ your API key). 
      subject: 'Onboarding Mail',
      react: EmailTemplate({ firstName }),
    });

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
