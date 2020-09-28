
export function errMsg(e){
  try {
    if (e.response && e.response.data){
      if (typeof(e.response.data) === "string") {
        return e.response.data;
      }
      return e.response.data.errors[0].message;
    } else {
      return e.message;
    }
  } catch (e) {
    return "Error: Unrecognized Error!!!";
  }
}
export function errFld(e){
  try {
    if (e.response && e.response.data) {
      return e.response.data.errors[0].field;
    }
  } catch (e) {  }
  return "";
}

