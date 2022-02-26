import React, {useState} from "react";
import * as _ from "lodash";
import {useTranslation} from 'react-i18next'
import Header from "./Header";


const LandingPage: React.FunctionComponent<any> = (props: any): JSX.Element => {
  const [loading, setLoading] = useState([]) as any;
  const {t} = useTranslation()

  return(
    <div>
      <Header />
      <div>{t("COMMON_LOGIN")}</div>
      here you are 
    </div>
  );
};

export default LandingPage;
