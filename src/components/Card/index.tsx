import clsx from "clsx";
import { COLOR } from "../../constants/colors";
import { createUseStyles, useTheme } from "react-jss";

export const useStyles = createUseStyles((theme: any) => ({
  wrapper: (props : any) => ({
    borderRadius: props.borderRadius ?? 10,
    boxShadow: props.boxShadow ?? "3px 3px 10px 0 rgba(0, 0, 0, 0.03)",
    border: `solid ${props.border ?? 1}px ${COLOR.border}`,
    backgroundColor: props.backgroundColor ?? `${COLOR.white}`,

    "& .ant-card-body": {
      padding: props.padding ?? 24,
    },
  }),
}));

const Card = (props: any) => {
  const theme: any = useTheme();
  const {
    boxShadow,
    borderRadius,
    border,
    padding,
    backgroundColor,
    children,
    className,
    ...propsCard
  } = props;
  const classes = useStyles({
    theme,
    boxShadow,
    borderRadius,
    border,
    padding,
    backgroundColor,
  });
  return (
    <div
      {...propsCard}
      className={className ? clsx(classes.wrapper, className) : classes.wrapper}
    >
      {children}
    </div>
  );
};

export default Card;
