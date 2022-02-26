import React, {useState} from "react";
import * as _ from "lodash";
import {useTranslation} from 'react-i18next'
import { useStyles } from "./styles";



const Header: React.FunctionComponent<any> = (props: any): JSX.Element => {
  const [loading, setLoading] = useState([]) as any;
  const { t, i18n } = useTranslation();
  const classes = useStyles();


  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
     <button type="button" onClick={() => changeLanguage('de')}>
          vn
        </button>
        <button type="button" onClick={() => changeLanguage('en')}>
          en
        </button>
        <h1 className={classes.textColor}> Yeep it works</h1>
  </div>
  )
};

export default Header;
