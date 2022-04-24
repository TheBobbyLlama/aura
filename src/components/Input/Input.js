import { Input as MUIInput } from "@mui/material";
import { classNames } from "../../utils/classNames";
export default function Input(props) {
  const {
    inputSize,
    focus,
    disabled,
    error,
    transparent,
    fluid,
    icon,
    loading,
    iconPosition,
    ...rest
  } = props;
  const styleClasses = classNames("ui-input", {
    "input-focus": !!focus,
    [`input-${inputSize}`]: !!inputSize,
    "input-disabled": !!disabled,
    "input-error": !!error,
    "input-transparent": !!transparent,
    "input-fluid": !!fluid,
    "input-loading": !!loading,
    [`input-${iconPosition}`]: !!iconPosition,
    icon: !!icon || !!loading,
  });

  return (
    <div className={styleClasses}>
      <MUIInput
        variant="outlined"
        disabled={disabled}
        disableUnderline={true}
        className={styleClasses}
        {...rest}
      />
      {icon || loading ? "icon" : null}
    </div>
  );
}
