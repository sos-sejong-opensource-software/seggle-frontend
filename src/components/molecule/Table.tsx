import { tw } from '@/utils/tailwindMerge';
import React from 'react';
import './Table.css';

type TableProps<T extends React.ElementType> = Component<T> & {
  column: Array<{ Header: string; accessor: string }>;
  data: Array<{ id: string | number } & object>;
  onRowClick?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, id: number | string) => void;
};

type TheadProps = {
  column: Array<{ Header: string; accessor: string }>;
};

export function Table({ column, data, onRowClick, className }: TableProps<'table'>) {
  return (
    <table className={tw('table-auto w-full text-m text-center', className)}>
      <Thead column={column}></Thead>
      <Tbody column={column} data={data} onRowClick={onRowClick}></Tbody>
    </table>
  );
}

function Thead({ column }: TheadProps) {
  return (
    <thead className="text-m uppercase bg-primary-200">
      <tr>
        {column.map(({ Header, accessor }) => {
          return (
            <th scope="col" className="py-3" key={accessor}>
              {Header}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

function Tbody({ column, data, onRowClick }: TableProps<'table'>) {
  return (
    <tbody className="bg-white border-b">
      {Object.entries(data).map(([_, value]) => {
        const id = value['id'];
        return (
          <tr
            key={id}
            className="border-b border-primary-100 table-row"
            onClick={(e) => onRowClick && onRowClick(e, id)}
          >
            {column.map(({ accessor }) => {
              return (
                <td className="py-3" key={`${id}-${accessor}`}>
                  {value[accessor as keyof typeof value]}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
/*
      {Object.entries(data).map(([key, value]) => (
        <tr
          key={key}
          className="border-b border-primary-100 table-row"
          onClick={(e) => onRowClick(e, value['id'])}
        >
          {column.map(({ accessor }) => {
            return (
              <td className="py-3" key={accessor}>
                {value[accessor as keyof typeof value]}
              </td>
            );
          })} 
        </tr>
      ))}
*/