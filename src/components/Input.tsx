import React from "react";

interface Props {
  desc: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<Props> = ({ desc, setTodo }: Props) => {
  return (
      <input 
        type="input" placeholder={desc} 
        onChange={(e) => setTodo(e.target.value)} 
        className="appearance-none rounded-none relative block
        px-3 py-2 border border-gray-300
        placeholder-gray-500 text-gray-900 rounded-b-md
        focus:outline-none focus:ring-indigo-500
        focus:border-indigo-500 focus:z-10 sm:text-sm"
        />
  );
};

export default Input;