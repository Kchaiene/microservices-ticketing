import React from "react";
import Router, {} from "next/router";
import {errFld, errMsg} from "../../utils/errMsg";
import useRequest from "../../hooks/useRequest";
import {UserContext} from "../../react-context/user-context";



const INIT_FORM = {email:"", password:""};
const INIT_STATUS = {loading: false, error:"", field:"" };

const SignInPage = () => {
  const {setState} = React.useContext(UserContext);
  const [form, setForm] = React.useState(INIT_FORM);
  const [status, setStatus] = React.useState(INIT_STATUS);
  const {email, password} = form;
  const {loading, error, field} = status;
  const {doRequest, errors} = useRequest({
    url:"/api/users/signin",
    method: "post",
    body: {email, password},
    onSuccess: (data)=>{setState(data); Router.push("/")}
  });


  const handleChange = e => {
    const {name, value} = e.currentTarget;
    setForm({...form, [name]:value});
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await doRequest();
    }catch (err) {
      // setStatus({ loading:false, error:errMsg(e), field:errFld(e) });
      console.log("Error SignIn ==>", err);
    }
  };

  return (
    <>
      <h1>SignIn Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" value={email}
                 onChange={handleChange}  required
                 className={`form-control ${field === "email" ? "err_inp" : ""}`}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password"  value={password}
                 onChange={handleChange} className="form-control" required

          />
        </div>
        <button className="btn btn-primary">Sign In</button>
      </form>

      {/*{error && <div className="alert alert-danger">{error}</div> }*/}
      {errors}

      <style jsx>{`
        .err_inp {
          border:2px solid red;
        }
      `}</style>
    </>
  );
};


export default SignInPage;



