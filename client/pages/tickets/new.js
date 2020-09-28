import React from "react";
import useForm from "../../hooks/useForm";
import axios from "axios";
import {consoleLogClient} from "../../utils/consoleMessage";



const INIT_STATE = {title:"", price:""};

const CreateTicketPage = () => {
  const [formState, status, handleChange, handleSubmit, setState] = useForm(INIT_STATE, onSubmit, validator );
  const {title, price} = formState;
  const {loading, error, success} = status;
  // consoleLogClient("CreateTicketPage Render", success);


  const handleBlur = (e) => {
    const value = parseFloat(price);
    if (isNaN(value)) {return; }
    setState({...formState, price:value.toFixed(2)});
  };

  async function validator (state) {}

  async function onSubmit (state) {
    const {title, price} = state;
    await axios.post("/api/tickets", {title, price});
    return {success:"Success", clear:true};
  }

  return (
    <>
      <h1>Create New Ticket</h1>

      <form onSubmit={handleSubmit} className="container">
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input type="text" name="title" value={title}
                 className="form-control"
                 onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Price</label>
          <input type="number" name="price" value={price}
                 className="form-control"
                 onChange={handleChange}
                 onBlur={handleBlur}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {error && (<div className="alert">{error}</div>) }
      {success && (<div className="alert">{success}</div>) }
    </>
  )
};


export default CreateTicketPage;