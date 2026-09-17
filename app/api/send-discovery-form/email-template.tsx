import type { DiscoveryFormSubmission } from "@/lib/types/emailTemplates";

const toneLabels: Record<DiscoveryFormSubmission['brandTone'][number], string> = {
    professional: 'Professional and trustworthy',
    friendly: 'Friendly and approachable',
    premium: 'Premium and sophisticated',
    bold: 'Bold and energetic',
    minimal: 'Calm and minimal',
    playful: 'Creative and playful',
};

const assetLabels: Record<DiscoveryFormSubmission['hasAssets'][number], string> = {
    photography: 'Photography',
    videos: 'Videos',
    logo: 'Logo',
    'design-guide': 'Brand or design guide',
};

const goalLabels: Record<DiscoveryFormSubmission['mainGoals'][number], string> = {
    credibility: 'Build credibility and trust',
    showcase: 'Showcase services or previous work',
    'sell-products': 'Present and sell products',
    'publish-content': 'Publish a blog, news, or other content',
    'generate-inquiries': 'Receive more customer inquiries',
    bookings: 'Accept bookings or appointments',
    other: 'Other',
};

const contactLabels: Record<DiscoveryFormSubmission['contactMethods'][number], string> = {
    whatsapp: 'WhatsApp',
    email: 'Email',
    phone: 'Phone',
    'social-media': 'Social media',
};

function AnswerList({ items }: { items: string[] }) {
    if (!items.length) return <p>None provided</p>;

    return (
        <ul>
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    );
}

export default function EmailTemplate({
    businessName,
    businessDescription,
    targetAudience,
    brandTone,
    brandColors,
    hasAssets,
    hasHosting,
    hasDomain,
    mainGoals,
    contactMethods,
    additional,
    locale,
}: DiscoveryFormSubmission) {
    return (
        <div>
            <h1>Client discovery submission</h1>

            <h2>Business</h2>
            <p><strong>Name:</strong> {businessName}</p>
            <p><strong>Description:</strong> {businessDescription}</p>
            <p><strong>Target audience:</strong> {targetAudience}</p>

            <h2>Brand</h2>
            <p><strong>Preferred tone:</strong></p>
            <AnswerList items={brandTone.map(tone => toneLabels[tone])} />
            <p><strong>Preferred colors:</strong> {brandColors || 'None provided'}</p>
            <p><strong>Existing assets:</strong></p>
            <AnswerList items={hasAssets.map(asset => assetLabels[asset])} />

            <h2>Current setup</h2>
            <p><strong>Has hosting:</strong> {hasHosting === 'yes' ? 'Yes' : 'No'}</p>
            <p><strong>Has a domain:</strong> {hasDomain === 'yes' ? 'Yes' : 'No'}</p>

            <h2>Website goals</h2>
            <AnswerList items={mainGoals.map(goal => goalLabels[goal])} />

            <h2>Contact methods</h2>
            <AnswerList items={contactMethods.map(method => contactLabels[method])} />

            <h2>Additional information</h2>
            <p>{additional || 'None provided'}</p>

            {locale && <p><strong>Form language:</strong> {locale}</p>}
        </div>
    );
}
