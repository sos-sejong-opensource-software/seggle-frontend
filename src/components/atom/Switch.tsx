import React, { useState } from 'react';

type SwitchProps<T extends React.ElementType> = Component<T> & {
  enabled: boolean;
  name?: string;
};

export function Switch({ enabled, onClick, className, name }: SwitchProps<'button'>) {
  const [isEnabled, setIsEnabled] = useState(enabled);

  if (onClick === undefined) {
    onClick = () => {
      setIsEnabled((prev) => !prev);
    };
  }

  return (
    <div className={className}>
      <label className="inline-flex relative items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" checked={isEnabled} name={name} readOnly />
        <button
          type="button"
          onClick={onClick}
          className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-300"
        ></button>
      </label>
    </div>
  );
}
