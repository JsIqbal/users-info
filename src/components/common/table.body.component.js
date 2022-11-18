export default function TableBody({ items, columns }) {
    return (
        <>
            {
                items.map((item, index) => (
                    <tr key = { index } >
                        {
                            columns.map(column => (
                                <>
                                    <td 
                                        key={column.path}
                                    >
                                        { column.content(item, column.path) }
                                    </td>
                                </>
                            ))
                        }
                    </tr>
                ))
            }
        </>
    );
};