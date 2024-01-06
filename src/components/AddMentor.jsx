import React from 'react'
import { TextField, Button  } from '@mui/material';
import AdminNavbar from './AdminNavbar';
import './AddMentor.css'

const AddMentor = () => {
  return (
    <div>
        <AdminNavbar/>
         <form className='addmentorform' noValidate autoComplete="off">
            <div className="form-field">
                <TextField id="name" label="Mentor Name" variant="outlined" fullWidth className="custom-textfield"/>
            </div>
            <div className="form-field">
                <TextField id="email" label="Email" variant="outlined" fullWidth className="custom-textfield"/>
            </div>
            <div className="form-field">
                <TextField id="phone" label="Phone number" variant="outlined" fullWidth className="custom-textfield"/>
            </div>
            <div className="form-field">
                <TextField id="password" label="Password" type="password" variant="outlined" fullWidth className="custom-textfield"/>
            </div>
            <div className="form-field">
                <TextField id="project" label="Project topic allotted" variant="outlined" fullWidth className="custom-textfield"/>
            </div>
            <div className="form-field">
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </div>
        </form>
    </div>
  )
}

export default AddMentor

