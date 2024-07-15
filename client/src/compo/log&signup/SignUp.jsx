import * as React from 'react';
import '@fontsource/inter';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import axios from 'axios';

export default function SignUp() {
  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setphone] = React.useState('')
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert('Must enter same password');
      return;
    }

    try {
      const response = await axios.post('/api/auth/signup', { name,lastName,phone ,email, password, confirmPassword });
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error(error);
    }
  };
// SignUp compo from MUI Library
  return (
    <main>
      <CssBaseline />
      <Sheet
        sx={{
          width: 300,
          mx: 'auto',
          my: 4,
          py: 3,
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Join us!</b>
          </Typography>
          <Typography level="body-sm">Sign up to get started.</Typography>
        </div>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            name="Name"
            type="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input
            name="Last Name"
            type="Last name"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>phone</FormLabel>
          <Input
            name="phone"
            type="Number"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>E-mail</FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>
        <Button sx={{ mt: 1 }} onClick={handleSignUp}>Sign Up</Button>
        <Typography
          endDecorator={<Link href="/sign-in">Sign in</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
          Already have an account?
        </Typography>
      </Sheet>
    </main>
  );
}
