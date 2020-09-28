import React from "react";
import {errMsg} from "../utils/errMsg";
import axios from "axios";


export default function useRequest({url, method, body, onSuccess}){
  const [errors, setErrors] = React.useState(null);

  const doRequest = async () => {
    try {
      const {data} = await axios[method](url, body);
      setErrors(null);
      if (onSuccess) {
        await onSuccess(data);
      }
      return data;
    } catch (e) {
      console.log("Error doRequest ==>", errMsg(e));
      const jsxErrors = <div className="alert alert-danger">{ errMsg(e)}</div>
      setErrors(jsxErrors);
    }
  };

  return {doRequest, errors}
}
