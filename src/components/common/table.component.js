import TableHeader from './table.header.component';
import TableBody from './table.body.component';

export default function Table({ items, columns }) {
    return (
        <>
            <table className="table">
                <TableHeader columns={columns} />
                <tbody>
                    <TableBody items={items} columns={columns} />
                </tbody>
            </table>
        </>
    );
};