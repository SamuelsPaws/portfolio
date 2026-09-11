interface Props {
    children: React.ReactNode;
}

const ColumnList = ({ children }: Props) => {
    return (
    <ul className="flex flex-col items-end gap-4">
        {children}
    </ul>
    )
}

export default ColumnList