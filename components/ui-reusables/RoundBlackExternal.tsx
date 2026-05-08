import clsx from 'clsx'
import RoundBlackInner from './RoundBlackInner';

interface Props {
    href: string;
    children: React.ReactNode;
    textSize: string;
    paddingSize: 'sm' | 'md' | 'lg';
    containerClasses: string;
}

const RoundBlackExternal = ({ href, children, textSize, paddingSize, containerClasses }: Props) => {
  return (
    <a
        href={href}
        className={clsx('block w-fit', containerClasses)}
        target='_blank'
    >
        <RoundBlackInner
            textSize={textSize}
            paddingSize={paddingSize}
        >
            {children}
        </RoundBlackInner>
    </a>
  )
}

export default RoundBlackExternal