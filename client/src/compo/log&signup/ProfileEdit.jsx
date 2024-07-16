import React, { useState } from 'react'
import './design.css';
import axios from 'axios';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';



 const ProfileEdit = () => {
 const [name, setName] = useState('');
 const [lastName, setLastName] = useState('')
 const [phone, setphone] = useState('')
  

 const modifier = ()=>{
axios.update('url',{name,lastName,phone})

}
 
  return (
    <div className='profileUpdater'>
        <div className='updateContainer'> 
            <h2>Update profile</h2>
 


<Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
      <Textarea size="md" name="Size" placeholder="name" />
      <Textarea size="md" name="Size" placeholder="Last Name" />
      <Textarea size="md" name="Size" placeholder="Phone Number" />
    
    </Box>
<button className='btnUpdate' > UPDATE </button>
        </div>
      
    </div>
  )
}

export default ProfileEdit
