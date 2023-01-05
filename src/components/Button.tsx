interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    additionalProps: string;
}
  
const Button = (props: ButtonProps) => {
    console.log(props.additionalProps);
    return (<button  className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700" {...props} />);
};
  
export default Button;