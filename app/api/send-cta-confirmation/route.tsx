import { Resend } from 'resend';
import { CtaFormSubmission } from '@/lib/types/emailTemplates';
import EmailTemplate from './email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body: CtaFormSubmission = await req.json()
        
        const { data, error } = await resend.emails.send({
            from: 'Fortales Automatic <automatic@fortal.es>',
            to: [body.email],
            subject: 'Thanks for reaching out to Fortales!',
            react: <EmailTemplate {...body} />
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}