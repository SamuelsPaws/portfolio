import { Resend } from 'resend';
import { CtaFormSubmission } from '@/lib/types/emailTemplates';
import EmailTemplate from './email-template';
import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import organization from '@/data/fortales/organization';
import { render } from '@react-email/render';
import type { ComponentProps } from 'react';

function renderConfirmation(props: ComponentProps<typeof EmailTemplate>) {
    return render(<EmailTemplate {...props} />);
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body: CtaFormSubmission & { locale?: string } = await req.json()
        const locale = hasLocale(routing.locales, body.locale) ? body.locale : routing.defaultLocale;
        const t = await getTranslations({ locale, namespace: 'CtaConfirmationEmail' });
        const html = await renderConfirmation({ name: body.name, locale, t });
        
        const { data, error } = await resend.emails.send({
            from: 'Fortales Automatic <automatic@fortal.es>',
            to: [body.email],
            subject: t('subject'),
            replyTo: organization.email,
            html
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
