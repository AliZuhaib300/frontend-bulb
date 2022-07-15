import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Form = () => {
    return (
        <div className='container' style={{ marginTop: "20%" }}>
            <div className="row justify-content-center text-center">
                <div className="col-lg-12 m-2"  >
                    <TextField
                        label="Watt"
                    />
                </div>
                <div className="col-lg-12 m-2"  >
                    <TextField
                        label="Color"
                    />
                </div>
                <div className="col-lg-12 m-2"  >
                    <Link to="/">
                        <Button variant="contained" disableElevation >
                            Submit
                        </Button>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Form
