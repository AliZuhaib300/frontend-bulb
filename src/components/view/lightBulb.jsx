import React from 'react';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const LightBulb = () => {
  return (
    <div className='container' >
      <div className="row justify-content-center text-center">
        <div className="col-lg-1 m-3"  >
          <LightbulbIcon style={{ width: "100px", height: "50px", color: "orange" }} />
        </div>
        <div className="col-lg-1 m-3" >
          <LightbulbIcon style={{ width: "100px", height: "50px", color: "green" }} />
        </div>
        <div className="col-lg-1 m-3" >
          <LightbulbIcon style={{ width: "100px", height: "50px", color: "yellow" }} />
        </div>
      </div>
    </div>
  )
}

export default LightBulb;
