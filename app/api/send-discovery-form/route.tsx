import { Resend } from 'resend';
import EmailTemplate from './email-template';
import type { DiscoveryFormSubmission } from '@/lib/types/emailTemplates';

const resend = new Resend(process.env.RESEND_API_KEY);

function createDiscoveryEmail(props: DiscoveryFormSubmission) {
    return <EmailTemplate {...props} />;
}

export async function POST(req: Request) {
    try {
        const body: DiscoveryFormSubmission = await req.json()
        
        const { data, error } = await resend.emails.send({
            from: 'Fortales Automatic <automatic@fortal.es>',
            to: ['info@fortal.es'],
            subject: `Client Discovery: ${body.businessName}`,
            react: createDiscoveryEmail(body)
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
