import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Weather = (props)=> {
    return(
        <div className="container">
            <div className="card pt-4">
                <div clasName="text">
                <h1>{props.city}</h1>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>
            {props.temp_celcius ?    <h1 className="py-2">current : {props.temp_celcius}&deg;</h1> : null}
                {
                minmaxTemp(props.temp_min,props.temp_max)}
                 <h3>{props.description}</h3>
             </div>
            </div>
        </div>

    )
}

function minmaxTemp(min,max){
    if(max && min){
    return(
        <h3>
            <span className="px-4">Min : {min}&deg;</span>
            <span className="px-4">Max: {max}&deg;</span>
        </h3>
    )
    }
}
export default Weather;