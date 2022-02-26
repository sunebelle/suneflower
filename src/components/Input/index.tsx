import clsx from "clsx";
import React from "react";
import { useStyles } from "./styles";

interface Props {
  type?: string;
  prefix?: any;
  placeholder?: string;
  bordered?: boolean;
  disabled?: boolean;
  maxLength?: number;
  className?: string | undefined;
  onChange?: any;
  value?: string;
}

const InputComponent: React.FunctionComponent<any> = (props: any): JSX.Element => {
  const classes = useStyles();
  const { type, prefix, placeholder, bordered, disabled, maxLength, className, onChange, value } = props;
  switch (type) {
    case "password":
      return <input {...props} prefix={prefix} placeholder={placeholder} bordered={bordered} value={value} />;
    default:
      return (
        <input
          {...props}
          className={clsx(disabled && classes.disabled, className || "")}
          prefix={prefix}
          placeholder={placeholder}
          bordered={bordered}
          maxLength={maxLength}
          onChange={onChange}
          value={value}
        />
      );
  }
};

InputComponent.defaultProps = {
  bordered: false,
};

export default InputComponent;
