import React, { useState } from 'react'
import './design.css';
import axios from 'axios';



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
 

<input className='updateField1' type="text" placeholder='name' />
<input className='updateField2' type="text" placeholder='Last Name' />
<input className='updateField3' type="Number"placeholder='Phone Number' />

<button className='btnUpdate'></button>
        </div>
      
    </div>
  )
}

export default ProfileEdit
