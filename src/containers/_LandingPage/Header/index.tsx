import React, {useState} from "react";
import * as _ from "lodash";
import {useTranslation} from 'react-i18next'


const LandingPage: React.FunctionComponent<any> = (props: any): JSX.Element => {
  const [loading, setLoading] = useState([]) as any;
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
     <button type="button" onClick={() => changeLanguage('de')}>
          de
        </button>
        <button type="button" onClick={() => changeLanguage('en')}>
          en
        </button>
  </div>
  )
};

export default LandingPage;
