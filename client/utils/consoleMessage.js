
export const consoleLogClient = ( ...arg) => {
  console.log("╥", ...arg);
};


export const consoleErrorClient = (e, text, ...arr ) => {
  if (e.response) {
    // console.error("╥", `${text} ==>`, e.response.data, );
    console.log("╥", `${text} ==>`,  e.response.data );
    console.log("╥", `${text} ==>`,  {["╥err"]: e} );

  } else {
    // console.error("╥", `${text} ==>`, e.message);
    console.log("╥", `${text} ==>`,  e.message );
    console.log("╥", `${text} ==>`,  {["╥err"]: e} );

  }
};




