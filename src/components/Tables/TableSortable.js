import React, { useState } from 'react';

import './table.scss'

function sortTableByColumn(rows, columnIndex, descending) {
  const newRows = [...rows];
  newRows.sort((a, b) => {
    const aValue = a[columnIndex];
    const bValue = b[columnIndex];

    if (aValue === bValue) {
      return 0;
    }
    if (aValue > bValue) {
      return descending ? -1 : 1;
    } else {
      return descending ? 1 : -1;
    }
  });
  return newRows;
}

function TableSortable({ headers, rows }) {
  const [sortColumnIndex, setSortColumnIndex] = useState(-1);
  const [sortDescending, setSortDescending] = useState(false);

  const handleHeaderClick = (index) => {
    if (sortColumnIndex === index) {
      setSortDescending(!sortDescending);
    } else {
      setSortColumnIndex(index);
      setSortDescending(false);
    }
  }

  const sortedRows =
    sortColumnIndex !== -1
      ? sortTableByColumn(rows, sortColumnIndex, sortDescending)
      : rows;

  return (
    <table className='sortable'>
      <thead>
        <tr>
          {
          headers.map((header, index) => (
            <th 
              key={index}
              onClick={() => handleHeaderClick(index)}
              className={index === sortColumnIndex ? (sortDescending ? 'desc active' : 'asc active') : ''}
              tabIndex={0}
            >
              {header}
            </th>
          ))
          }
        </tr>
      </thead>
      <tbody>
        {
        sortedRows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {
            row.map((cell, cellIndex) => (
              <td 
                key={cellIndex} 
                data-label={headers[cellIndex]} 
                className={cellIndex === sortColumnIndex ? 'active' : ''}
                tabIndex={0}
                >
                {cell}
              </td>
            ))
            }
          </tr>
        ))
        }        
      </tbody>
    </table>
  );
}

export default TableSortable;
