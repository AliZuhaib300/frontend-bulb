import * as React from 'react';
import Slider from '@mui/material/Slider';
import Basictable from './BasicTable';
import { useState } from 'react';
import axios from "axios";


export default function DiscreteSlider() {

  //declair watts first array 
  let watts = [5, 10, 20]

  //use the hooks
  const [logArray, setLogArray] = useState([])
  const [watt, setWatt] = useState("")

  //get value fron slider  
  const getValue = (e) => {
    setWatt(e.target.value)
    setFrequncy(watt)
    componentMount();

  }

  const setFrequncy = (watt) => {
    let minValue = 5;
    let logs = watts.map((i) => {
      return ((watt - minValue) / 10) * i
    })
    setLogArray(logs);
  }
  // post function who sent data to db from frontend
  const componentMount = async () => {
    await axios.post("http://localhost:7000/postwatts/", { logArray })
  }

  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-lg-6 card m-4">
          <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={5}
            marks
            min={5}
            max={20}
            onChange={getValue}
          />
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-lg-12 m-3" >
            <Basictable
              watts={watts}
              logArray={logArray}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

