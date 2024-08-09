import React from "react";
import { usersData } from "../data/usersData";
import '../styles/styles.css';

const DataTable = () => {

    const data = React.useMemo(() => usersData, [] );

    const columns = React.useMemo(
        () => [
            {Header: 'ID', accesor: 'id'},
            {Header: 'Nombre', accesor: 'name'},
            {Header: 'Email', accesor: 'email'},
            {Header: 'Edad', accesor: 'age'},
        ], []
    );

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow}
    = userTable({columns, data});

    return(
        <table {...getTableBodyProps()} className="data-table">
            <thead>
                {headerGroups.map(hg => (
                        <tr {...hg.getHeaderGroupProps()}>
                            {hg.headers.map( col=>(
                                <th {...col.getHeaderProps()}>
                                    {col.render('Header')}
                                </th>   
                            ))}
                        </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map( r => {
                    prepareRow(r);
                    return(
                        <tr {...r.getRowProps()}>
                            {r.cells.map( celda =>(
                            <td {...celda.getCellProps()}>
                                {celda.render('Cell')}
                            </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );    
};
export default DataTable;
