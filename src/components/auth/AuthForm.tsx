'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Tabs,
  Tab,
  Paper,
  CircularProgress,
  Alert
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/app/providers';
import { useRouter } from 'next/navigation';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setIsLogin(newValue === 0);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', py: 5 }}>
      <Paper elevation={6} sx={{ p: 4, width: '100%', maxWidth: 450, borderRadius: 3 }}>
        <Tabs
          value={isLogin ? 0 : 1}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          sx={{ mb: 3 }}
        >
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={isLogin ? 'login' : 'register'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {isLogin ? <LoginForm /> : <RegisterForm />}
          </motion.div>
        </AnimatePresence>
      </Paper>
    </Box>
  );
};

const LoginForm = () => {
  const { login, error, loading, isAuthenticated, clearErrors } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/admin');
    }
    return () => {
      clearErrors();
    };
  }, [isAuthenticated, router, clearErrors]);
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h5" sx={{ textAlign: 'center', mb: 1, fontWeight: 600 }}>Welcome Back</Typography>
      {error && Array.isArray(error) && error.map((err, i) => <Alert key={i} severity="error">{err.msg}</Alert>)}
      <TextField label="Email" type="email" name="email" value={formData.email} onChange={onChange} required />
      <TextField label="Password" type="password" name="password" value={formData.password} onChange={onChange} required />
      <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={loading}
        sx={{ mt: 2, py: 1.5 }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
      </Button>
    </Box>
  );
};

const RegisterForm = () => {
  const { register, error, loading, isAuthenticated, clearErrors } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '', password2: '' });

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/admin');
    }
    return () => {
        clearErrors();
    };
  }, [isAuthenticated, router, clearErrors]);

  const [formError, setFormError] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (formData.password !== formData.password2) {
        setFormError('Passwords do not match');
        return;
    }
    await register({ fullName: formData.fullName, email: formData.email, password: formData.password });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h5" sx={{ textAlign: 'center', mb: 1, fontWeight: 600 }}>Create Account</Typography>
        {formError && <Alert severity="error">{formError}</Alert>}
        {error && Array.isArray(error) && error.map((err, i) => <Alert key={i} severity="error">{err.msg}</Alert>)}
        <TextField label="Full Name" name="fullName" value={formData.fullName} onChange={onChange} required />
        <TextField label="Email" type="email" name="email" value={formData.email} onChange={onChange} required />
        <TextField label="Password" type="password" name="password" value={formData.password} onChange={onChange} required />
        <TextField label="Confirm Password" type="password" name="password2" value={formData.password2} onChange={onChange} required />
        <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={loading}
            sx={{ mt: 2, py: 1.5 }}
        >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Register'}
        </Button>
    </Box>
  );
};

export default AuthForm; 