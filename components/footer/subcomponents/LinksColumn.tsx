import ColumnTitle from "./ColumnTitle";

interface Props {
    title: string;
    children: React.ReactNode;
}

const LinksColumn = ({ title, children }: Props) => {
    return (
    <div className="flex flex-col items-end">
        <ColumnTitle
            text={title}
        />
        {children}
    </div>
    )
}

export default LinksColumn