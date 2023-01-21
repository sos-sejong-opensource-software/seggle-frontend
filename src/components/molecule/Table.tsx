import { tw } from '@/utils/tailwindMerge';
import React from 'react';

type TableProps<T extends React.ElementType> = Component<T> & {
  column: Array<{ name: string; key: string }>;
  data: Array<object>;
};

type TheadProps = {
  column: Array<{ name: string; key: string }>;
};

export function Table({ column, data, className }: TableProps<'table'>) {
  return (
    <table className={tw('table-auto w-full text-m text-center', className)}>
      <Thead column={column}></Thead>
      <Tbody column={column} data={data}></Tbody>
    </table>
  );
}

function Thead({ column }: TheadProps) {
  return (
    <thead className="text-m uppercase bg-primary-200">
      <tr>
        {column.map(({ name, key }) => {
          return (
            <th scope="col" className="py-3" key={key}>
              {name}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

function Tbody({ column, data }: TableProps<'table'>) {
  return (
    <tbody className="bg-white border-b">
      {Object.entries(data).map(([key, value]) => (
        <tr key={key} className="border-b border-primary-100">
          {column.map(({ key }) => {
            return (
              <td className="py-3" key={key}>
                {value[key as keyof typeof value]}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
}
