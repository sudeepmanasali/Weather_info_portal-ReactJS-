import React from 'react'
import "./form.style.css"
const Form = props =>{
    return(
        <div className="container">
            <div>{props.error? error():null}</div>
       <form onSubmit={props.loadWeather}>
       <div className="row">
              <div className="col-md-3 offset-md-2">
                  <input type="text" className="form-control" name="city" placeholder="city" autoComplete="off"></input>
              </div>
              <div className="col-md-3">
                  <input type="text" className="form-control" name="country" placeholder="country" autoComplete="off"></input>
              </div>
              <div className="col-md-3 mt-md-0 text-md-left">
                  <button className="btn btn-warning">Get_Weather</button>
              </div>
          </div>

       </form>
        </div>
    )
}


function error(){
    return(
        <div classname="alert alert-dnger mx-5" role="alert">
            Please enetr the City and Country
        </div>
    )
}
export default Form;