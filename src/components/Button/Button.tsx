interface ButtonProps {
  text: string;
  actionOnClick: () => void;
}

const Button = ({ text, actionOnClick }: ButtonProps): JSX.Element => {
  return (
    <button type="button" className="button-delete" onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
