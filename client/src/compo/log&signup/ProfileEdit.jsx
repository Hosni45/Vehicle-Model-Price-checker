import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';
import { useHistory } from 'react-router-dom';

const ProfileEdit = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const history = useHistory();

  const modifier = async () => {
    try {
      const response = await axios.put('/api/profile/update', { name, lastName, phone });
      console.log('Profile updated:', response.data);
      alert('Profile updated successfully');
      history.push('/dashboard');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    }
  };
  const deleteUser = async()=>{
    try{
      const response = await axios.delete('/api/profile/delete');
      console.log('Profile deleted:', response.data);
      alert('Profile deleted successfully');
      history.push('/');
    }catch(error){
      console.error('Error deleting profile:', error);
      alert('Failed to delete profile');
    }
  }

  return (
    <div className="profileUpdater">
      <button
        className="updateToBackBtn"
        onClick={() => {
          window.location.href = '/dashboard';
        }}
        style={{ borderRadius: '50px' }}
      >
        <img src="https://cdn-icons-png.freepik.com/256/93/93634.png?semt=ais_hybrid" alt="user" />
      </button>

      <div className="updateContainer">
        <h2>Update profile</h2>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
          <Textarea size="md" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <Textarea size="md" name="lastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
          <Textarea size="md" name="phone" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />
        </Box>
        <button className="btnUpdate" onClick={modifier}>
          UPDATE
        </button>
        <button className="btnDelete" onClick={deleteUser}>
          Delete Profile ? 
        </button>
      </div>
    </div>
  );
};

export default ProfileEdit;
