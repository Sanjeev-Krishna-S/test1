import React from 'react'
import { TextField, Button  } from '@mui/material';
import AdminNavbar from './AdminNavbar';

const AddMentor = () => {
  return (
    <div>
        <AdminNavbar/>
         <form noValidate autoComplete="off">
            <TextField id="name" label="Mentor Name" variant="outlined" />
            <TextField id="email" label="Email" variant="outlined" />
            <TextField id="phone" label="Phone number" variant="outlined" />
            <TextField id="password" label="Password" type="password" variant="outlined" />
            <TextField id="project" label="Project topic allotted" variant="outlined" />
            <Button variant="contained" color="primary" type="submit">
                Submit
            </Button>
        </form>
    </div>
  )
}

export default AddMentor