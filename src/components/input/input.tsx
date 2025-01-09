import styles from "./styles.module.css";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...restProps } = props;
  console.log("Loading input");

  return <input className={`${className} ${styles.input}`} {...restProps} />;
}
