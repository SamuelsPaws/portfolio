import organization from "@/data/fortales/organization";
import { availableLocales } from "@/data/locales";
import type { LocaleKey } from "@/lib/types/localeKey";

export interface ConfirmationEmailCopy {
    preview: string;
    heading: string;
    greeting: string;
    intro: string;
    nextHeading: string;
    nextCopy: string;
    replyCopy: string;
    signOff: string;
    tagline: string;
    whatsapp: string;
}

interface Props {
    locale: LocaleKey;
    copy: ConfirmationEmailCopy;
}

export default function EmailTemplate({ locale, copy }: Props) {
    const linkStyle = { color: '#b74716', textDecoration: 'underline' };

    return (
        <html
            lang={availableLocales[locale]}
        >
            <head>
                <meta
                    charSet="utf-8"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </head>
            <body
                style={{ margin: 0, padding: 0, backgroundColor: '#f5f4f1', fontFamily: 'Arial, Helvetica, sans-serif', color: '#252525' }}
            >
                <div
                    style={{ display: 'none', maxHeight: 0, overflow: 'hidden', opacity: 0 }}
                >
                    {copy.preview}
                </div>
                <table
                    role="presentation"
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                >
                    <tbody>
                        <tr>
                            <td
                                align="center"
                                style={{ padding: '32px 12px' }}
                            >
                                <table
                                    role="presentation"
                                    width="100%"
                                    cellPadding="0"
                                    cellSpacing="0"
                                    style={{ maxWidth: 600, backgroundColor: '#ffffff', border: '1px solid #e5e2dc', borderRadius: 16 }}
                                >
                                    <tbody>
                                        <tr>
                                            <td
                                                style={{ padding: '28px 24px 20px', borderTop: '4px solid #df642c', borderBottom: '1px solid #eeeae4' }}
                                            >
                                                <a
                                                    href={organization.url}
                                                    style={{ color: '#252525', fontFamily: 'Georgia, serif', fontSize: 28, fontWeight: 'bold', textDecoration: 'none' }}
                                                >
                                                    {organization.name}
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{ padding: '28px 24px', fontSize: 16, lineHeight: '26px' }}
                                            >
                                                <h1
                                                    style={{ margin: '0 0 24px', fontFamily: 'Georgia, serif', fontSize: 28, lineHeight: '36px' }}
                                                >
                                                    {copy.heading}
                                                </h1>
                                                <p
                                                    style={{ margin: '0 0 16px' }}
                                                >
                                                    {copy.greeting}
                                                </p>
                                                <p
                                                    style={{ margin: '0 0 24px' }}
                                                >
                                                    {copy.intro}
                                                </p>
                                                <h2
                                                    style={{ margin: '0 0 8px', fontSize: 18 }}
                                                >
                                                    {copy.nextHeading}
                                                </h2>
                                                <p
                                                    style={{ margin: '0 0 20px' }}
                                                >
                                                    {copy.nextCopy}
                                                </p>
                                                <p
                                                    style={{ margin: '0 0 28px' }}
                                                >
                                                    {copy.replyCopy}
                                                </p>
                                                <p
                                                    style={{ margin: '0 0 16px' }}
                                                >
                                                    {copy.signOff}
                                                </p>
                                                <div
                                                    style={{ borderTop: '1px solid #eeeae4', paddingTop: 20, fontStyle: 'italic' }}
                                                >
                                                    <p
                                                        style={{ margin: '0 0 8px', fontWeight: 'bold', fontSize: 18 }}
                                                    >
                                                        {organization.name}
                                                    </p>
                                                    <p
                                                        style={{ margin: '0 0 16px', color: '#555555' }}
                                                    >
                                                        {copy.tagline}
                                                    </p>
                                                    <p
                                                        style={{ margin: 0, overflowWrap: 'anywhere' }}
                                                    >
                                                        <a
                                                            href={`mailto:${organization.email}`}
                                                            style={linkStyle}
                                                        >
                                                            {organization.email}
                                                        </a>
                                                        <br />
                                                        <a
                                                            href={organization.url}
                                                            style={linkStyle}
                                                        >
                                                            {organization.url}
                                                        </a>
                                                        <br />
                                                        <a
                                                            href={`https://wa.me/${organization.phone.replace(/\D/g, '')}`}
                                                            style={linkStyle}
                                                        >
                                                            {copy.whatsapp}
                                                        </a>
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </body>
        </html>
    );
}
