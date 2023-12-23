type Button = {
  className?: string;
  children: JSX.Element | string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
};

const Button = ({ className, children, onClick, type }: Button) => {
  return (
    <button type={type} className={` ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
