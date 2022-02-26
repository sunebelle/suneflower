import { COLOR } from "../../../constants/colors";
import { createUseStyles } from "react-jss";

const _styles = (theme: any) => ({
  disabled: {
    backgroundColor: `${COLOR.disabledInput_f4f4f4} !important`,
  },
  textColor:{
    color:"yellow"
  }
});

export const useStyles = createUseStyles(_styles);
