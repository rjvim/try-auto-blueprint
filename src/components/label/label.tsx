import styles from "./styles.module.css";

export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  const { className, ...restProps } = props;
  console.log("Loading label");
  return <label className={`${className}  ${styles.label}`} {...restProps} />;
}
