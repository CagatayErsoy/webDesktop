'use server'

import ContactEmail from '@/app/email/contact-email';
import { Resend } from 'resend';
import React from 'react';
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail=async(formData:FormData)=> {
    const from:string=formData.get('sender') as string
    const message:string= formData.get('message') as string
    const subject:string=formData.get('subject') as string

try{
 
    await resend.emails.send({
        from:'Contact Form <onboarding@resend.dev>',
        to: "cagatay.ersoy1@gmail.com",
        subject: subject as string,
        reply_to: from as string,
       react:ContactEmail({message:message,subject:subject, from:from}) as React.ReactElement
      });
}catch (error){
   
        console.error('Error sending email:', error);
        return { error: 'Failed to send email', details: error };

}
  
    }


