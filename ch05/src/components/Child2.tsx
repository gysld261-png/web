import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Child2.module.css";

const cx = classNames.bind(styles);

export default function Child2() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);};
  return (
    <button className={cx("btn", { isActive })} onClick={handleClick}>
      App Button</button>
  );
}
