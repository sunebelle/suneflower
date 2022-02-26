import React, {useState} from "react";
import * as _ from "lodash";
import {useTranslation} from 'react-i18next'


const LandingPage: React.FunctionComponent<any> = (props: any): JSX.Element => {
  const [loading, setLoading] = useState([]) as any;
  const {t} = useTranslation()

  return <div>Render content here</div>;
};

export default LandingPage;
