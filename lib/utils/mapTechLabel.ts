import { Tech } from "../types/tech";

export default function mapTechLabel(tech: string): string {
    switch (tech) {
        case 'css':
            return 'CSS';
        case 'html':
            return 'HTML';
        case 'js':
            return 'JavaScript';
        case 'next':
            return 'Next.js';
        case 'py':
            return 'Python';
        case 'tw':
            return 'Tailwind CSS';
        default:
            return 'Next.js';
    }
}