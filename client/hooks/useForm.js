import React from "react";
import {errMsg} from "../utils/errMsg";
import {consoleErrorClient} from "../utils/consoleMessage";



const INIT_STATUS = {loading:false, error:"", success:"", };

export default function useForm (INIT_DATA={}, onSubmitCallback, validator, initStatus=INIT_STATUS, ){
  const [formState, setFormState] = React.useState(INIT_DATA);
  const [status, setStatus] = React.useState(initStatus);
  const timerIdRef = React.useRef(null);


  React.useEffect(()=>{
    return ()=>{clearTimeout(timerIdRef.current); }
  }, []);


  const handleChange = e => {
    const {name, value, files, } = e.currentTarget;
    if (name === "image") {
      let imagePreview = window.URL.createObjectURL(files[0]);
      setFormState( state => ({ ...state, image:files[0], imagePreview }) );
    } else {
      setFormState( state => ({ ...state, [name]:value }) );
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({loading: true, error:"", success:"", });
    try {
      await validator(formState);

      const {success, clear} = await onSubmitCallback(formState, setFormState) || {};
      if (success) {
        setStatus({loading: false, error:"", success, });
        clearTimeout(timerIdRef.current);
        timerIdRef.current = setTimeout(()=>setStatus(state=>({...state, success:"",}) ), 4000);
      }
      if (clear) {setFormState(INIT_DATA); }
    } catch (e) {
      setStatus({loading: false, error: errMsg(e), success:"", });
      consoleErrorClient(e, "Error useForm handleSubmit");
    }
  };



  return [formState, status, handleChange, handleSubmit, setFormState ]
}


