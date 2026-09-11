import { Resend } from 'resend';
import { CtaFormSubmission, PackageFormSubmission } from '@/lib/types/emailTemplates';
import EmailTemplate from './email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body: PackageFormSubmission = await req.json()
        
        const { data, error } = await resend.emails.send({
            from: 'Fortales Automatic <automatic@fortal.es>',
            to: ['info@fortal.es'],
            subject: 'Package Form Submission from Website',
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