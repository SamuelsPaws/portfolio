import clsx from 'clsx'
import Link from 'next/link'
import RoundBlackInner from './RoundBlackInner';

interface Props {
    href: string;
    children: React.ReactNode;
    textSize: string;
    paddingSize: 'sm' | 'md' | 'lg';
    containerClasses: string;
}

const RoundBlackLink = ({ href, children, textSize, paddingSize, containerClasses }: Props) => {
  return (
    <Link href={href} className={clsx('block w-fit', containerClasses)}>
        <RoundBlackInner
            textSize={textSize}
            paddingSize={paddingSize}
        >
            {children}
        </RoundBlackInner>
    </Link>
  )
}

export default RoundBlackLink