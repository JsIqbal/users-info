import TableHeader from './table.header.component';
import TableBody from './table.body.component';

export default function Table({ items, columns }) {
    return (
        <>
            <table className="table">
                <TableHeader columns={columns} />
                <TableBody items={items} columns={columns} />
            </table>
        </>
    );
};