import React, { useState } from 'react';

type SwitchProps<T extends React.ElementType> = Component<T> & {
  enabled: boolean;
  onSwitchClick?: (value: boolean) => void;
};

export function Switch({ enabled, onSwitchClick, className }: SwitchProps<'button'>) {
  const [value, setValue] = useState(enabled);

  return (
    <div className={className}>
      <label className="inline-flex relative items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" checked={value} readOnly />
        <button
          onClick={() => {
            setValue(!value);
            onSwitchClick && onSwitchClick(!value);
          }}
          className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-300"
        ></button>
      </label>
    </div>
  );
}
