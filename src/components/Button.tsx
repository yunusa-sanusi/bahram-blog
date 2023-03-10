import { ButtonType } from '../models/ButtonTypes';

type ButtonPropTypes = {
  type: ButtonType;
  text: string;
  className: string;
  disabled?: boolean;
  handleClick?: () => void;
};

const Button = ({
  type,
  text,
  className,
  disabled,
  handleClick,
}: ButtonPropTypes) => {
  return (
    <button
      type={type}
      className={`${className}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
export default Button;
