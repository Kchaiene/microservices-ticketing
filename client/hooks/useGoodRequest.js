import React from "react";
import {errMsg} from "../utils/errMsg";
import {consoleErrorClient} from "../utils/consoleMessage";



const INIT_STATUS = {loading:false, error:"", success:"", };

export default function useGoodRequest (onSubmitCallback, validator, initStatus=INIT_STATUS, ){
  const [status, setStatus] = React.useState(initStatus);
  const timerIdRef = React.useRef(null);


  React.useEffect(()=>{
    return ()=>{clearTimeout(timerIdRef.current); }
  }, []);



  const handleSubmit = async (...arg) => {
    setStatus({loading: true, error:"", success:"", });
    try {
      if (validator) {
        await validator(...arg);
      }

      const {success} = await onSubmitCallback(...arg) || {};
      if (success) {
        setStatus({loading: false, error:"", success, });
        clearTimeout(timerIdRef.current);
        timerIdRef.current = setTimeout(()=>setStatus(state=>({...state, success:"",}) ), 4000);
      }
    } catch (e) {
      setStatus({loading: false, error: errMsg(e), success:"", });
      consoleErrorClient(e, "Error useForm handleSubmit");
    }
  };


  return [ status, handleSubmit ]
}

