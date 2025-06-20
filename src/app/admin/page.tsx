'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/providers';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
  Alert,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import {
  Dashboard,
  ContactMail,
  Business,
  Work,
  Add,
  Edit,
  Delete,
  Visibility,
  Email,
  Phone,
  Business as BusinessIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { contactApi, servicesApi, portfolioApi } from '@/lib/api';

interface Contact {
  _id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  createdAt: string;
}

interface Service {
  _id: string;
  title: string;
  description: string;
  category: string;
  features: string[];
  isActive: boolean;
}

interface PortfolioItem {
  _id: string;
  title: string;
  description: string;
  category: string;
  client: string;
  image: string;
  technologies: string[];
  results: string[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`admin-tabpanel-${index}`}
      aria-labelledby={`admin-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const DashboardContent = () => {
  const { user } = useAuth();
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      <Typography variant="h6">Welcome, {user?.fullName || 'Admin'}!</Typography>
      <Typography>This is a protected area. Your role is: <strong>{user?.role}</strong>.</Typography>
      {/* Add more dashboard components here */}
    </Box>
  );
};

export default function AdminPage() {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [contactsData, servicesData, portfolioData] = await Promise.all([
        contactApi.getAll(),
        servicesApi.getAll(),
        portfolioApi.getAll(),
      ]);
      
      setContacts(contactsData);
      setServices(servicesData);
      setPortfolio(portfolioData);
    } catch (error) {
      console.error('Error loading admin data:', error);
      setSnackbar({
        open: true,
        message: 'Error loading data. Please try again.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleDeleteContact = async (id: string) => {
    try {
      await contactApi.delete(id);
      setContacts(contacts.filter(contact => contact._id !== id));
      setSnackbar({
        open: true,
        message: 'Contact deleted successfully',
        severity: 'success',
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Error deleting contact',
        severity: 'error',
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const stats = [
    {
      title: 'Total Contacts',
      value: contacts.length,
      icon: <ContactMail color="primary" />,
      color: '#1976d2',
    },
    {
      title: 'Active Services',
      value: services.filter(s => s.isActive).length,
      icon: <Business color="primary" />,
      color: '#388e3c',
    },
    {
      title: 'Portfolio Items',
      value: portfolio.length,
      icon: <Work color="primary" />,
      color: '#f57c00',
    },
  ];

  if (loading || !isAuthenticated) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
          Admin Dashboard
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Manage your website content and monitor inquiries
        </Typography>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ p: 3, textAlign: 'center' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: '50%',
                        backgroundColor: `${stat.color}15`,
                        color: stat.color,
                      }}
                    >
                      {stat.icon}
                    </Box>
                  </Box>
                  <Typography variant="h4" component="div" sx={{ fontWeight: 600, mb: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.title}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Tabs */}
        <Card>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="admin tabs">
              <Tab label="Contacts" icon={<ContactMail />} iconPosition="start" />
              <Tab label="Services" icon={<Business />} iconPosition="start" />
              <Tab label="Portfolio" icon={<Work />} iconPosition="start" />
            </Tabs>
          </Box>

          {/* Contacts Tab */}
          <TabPanel value={tabValue} index={0}>
            <Typography variant="h5" gutterBottom>
              Contact Inquiries
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Company</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Message</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contacts.map((contact) => (
                    <TableRow key={contact._id}>
                      <TableCell>{contact.name}</TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell>{contact.company || '-'}</TableCell>
                      <TableCell>{contact.phone || '-'}</TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {contact.message}
                        </Typography>
                      </TableCell>
                      <TableCell>{formatDate(contact.createdAt)}</TableCell>
                      <TableCell>
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => handleDeleteContact(contact._id)}
                        >
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>

          {/* Services Tab */}
          <TabPanel value={tabValue} index={1}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h5">
                Services Management
              </Typography>
              <Button
                variant="contained"
                startIcon={<Add />}
                sx={{ borderRadius: 2 }}
              >
                Add Service
              </Button>
            </Box>
            <Grid container spacing={3}>
              {services.map((service) => (
                <Grid item xs={12} md={6} lg={4} key={service._id}>
                  <Card>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Typography variant="h6" component="h3">
                          {service.title}
                        </Typography>
                        <Chip
                          label={service.isActive ? 'Active' : 'Inactive'}
                          color={service.isActive ? 'success' : 'default'}
                          size="small"
                        />
                      </Box>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {service.description}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Category: {service.category}
                      </Typography>
                      <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                        <IconButton size="small" color="primary">
                          <Edit />
                        </IconButton>
                        <IconButton size="small" color="error">
                          <Delete />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          {/* Portfolio Tab */}
          <TabPanel value={tabValue} index={2}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h5">
                Portfolio Management
              </Typography>
              <Button
                variant="contained"
                startIcon={<Add />}
                sx={{ borderRadius: 2 }}
              >
                Add Project
              </Button>
            </Box>
            <Grid container spacing={3}>
              {portfolio.map((item) => (
                <Grid item xs={12} md={6} lg={4} key={item._id}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {item.description}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        <Chip label={item.category} size="small" sx={{ mr: 1 }} />
                        <Typography variant="caption" color="text.secondary">
                          Client: {item.client}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton size="small" color="primary">
                          <Edit />
                        </IconButton>
                        <IconButton size="small" color="error">
                          <Delete />
                        </IconButton>
                        <IconButton size="small" color="info">
                          <Visibility />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        </Card>
      </motion.div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
} 