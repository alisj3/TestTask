import styles from './Button.module.css'

type ButtonProps = {
  text: string; // Prop to accept the button text
};

const Button = ({ text }: ButtonProps) => {
  return (
    <button className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
