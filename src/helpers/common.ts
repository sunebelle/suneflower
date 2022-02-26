import constants from "../constants/common";
import { createBrowserHistory } from "history";
import moment from "moment";
import { useEffect, useRef } from "react";
import {useTranslation} from 'react-i18next'

const { t, i18n } = useTranslation();

export const history = createBrowserHistory();


export const getQueryString = (key: any) => {
  const { search } = window.location;
  const params = new URLSearchParams(search);
  return params.get(key);
};

export const convertQueryParams = (search :any) => {
  // const { search } = window.location;
  return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
};

export const mapQueryParams = (params :any) => {
  const searchParams = new URLSearchParams();
  Object.keys(params).forEach((key) => searchParams.append(key, params[key]));

  return searchParams.toString();
};

export const redirectTo = (path: any) => history.push(path);

export const changeLanguage = (lang:any) => {
  i18n.changeLanguage(lang);
};

export const isNullOrEmpty = (str:any): boolean => {
  let returnValue = false;
  if (!str || str === "null" || str === "" || str === "{}" || str === "undefined" || str.length === 0) {
    returnValue = true;
  }
  return returnValue;
};

export const isNOTNullAndEmpty = (str:string): boolean => !isNullOrEmpty(str);


export const convertUTCToLocal = (dateUTC :any, format:any) => {
  return dateUTC ? moment.utc(dateUTC).local().format(format) : "";
};

export const trimEllipse = (str:string, length:number) => {
  if (!str) return "";
  if (str.length > length) return `${str.substring(0, length)}...`;
  return str;
};


export const trimStr = (str: string) => {
  return str?.trim() || "";
};

export const first = (arr: any[]) => {
  return arr?.length > 0 && arr[0];
};

export const last = (arr: any[]) => {
  return arr && arr[arr.length - 1];
};

export const createArray = (number: number, startAt: number) => {
  return Array.from(Array(Math.ceil(number)), (_, i) => i + startAt);
};

export const convertFromMomentToDateString = (value:any) => {
  return moment(value).toDate().toISOString().split("T")[0];
};


export const calculateScrollbarReachedEnd = (e:any) => {
  e.preventDefault();
  e.stopPropagation();
  // Calculate if scrollbar reached to the end (<= epsilon (1) in case of zoom in)
  const reachBottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight;
  return Math.abs(reachBottom) < 1;
};

export const convertStringToBoolean = (key?:any) => {
  let result: boolean = false;
  if (key) {
    result = JSON.parse(key.toLowerCase()) === true;
  }
  return result;
}