# DXA Group - Digital Marketing Agency Website

A modern, responsive website for DXA Group, a digital marketing agency. Built with Next.js, Material-UI, and Node.js.

## 🚀 Features

### Frontend (Next.js + Material-UI)
- **Modern Design**: Clean, professional design with dark/light theme support
- **Responsive Layout**: Mobile-first responsive design
- **Interactive Components**: Smooth animations and transitions using Framer Motion
- **SEO Optimized**: Built-in SEO features and meta tags
- **Performance**: Optimized for fast loading and Core Web Vitals

### Backend (Node.js + Express + MongoDB)
- **RESTful API**: Complete API for all website functionality
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT-based authentication system
- **Email Integration**: Contact form email notifications
- **File Upload**: Image upload for portfolio and blog

### Key Pages & Features
- **Homepage**: Hero section, services overview, testimonials, CTA
- **Services**: Detailed service offerings with pricing
- **Portfolio**: Project showcase with filtering and details
- **Blog**: Content marketing with search and categories
- **Contact**: Contact form with validation and email notifications
- **Admin Dashboard**: Content management system
- **About**: Company information and team

## 🛠️ Tech Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **Material-UI 7**: Component library and theming
- **TypeScript**: Type safety and better development experience
- **Framer Motion**: Smooth animations and transitions
- **Axios**: HTTP client for API calls

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB ODM
- **JWT**: Authentication
- **Nodemailer**: Email functionality
- **Multer**: File upload handling

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- MongoDB (local or Atlas)
- Git

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dxa-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the frontend directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5001/api
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd dxa-back-end-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the backend directory:
   ```env
   PORT=5001
   NODE_ENV=development
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dxagroup
   JWT_SECRET=your-super-secret-jwt-key-here
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ADMIN_EMAIL=admin@dxagroup.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **API will be available at**
   `http://localhost:5001/api`

## 🏗️ Project Structure

```
dxa-frontend/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx        # Homepage
│   │   ├── about/          # About page
│   │   ├── services/       # Services page
│   │   ├── portfolio/      # Portfolio page
│   │   ├── blog/           # Blog page
│   │   ├── contact/        # Contact page
│   │   └── admin/          # Admin dashboard
│   ├── components/         # Reusable components
│   │   ├── common/         # Common UI components
│   │   ├── Navbar.tsx      # Navigation component
│   │   └── Footer.tsx      # Footer component
│   ├── lib/                # Utility functions
│   │   └── api.ts          # API client
│   └── theme/              # Material-UI theme
└── public/                 # Static assets

dxa-back-end-website/
├── src/
│   ├── controllers/        # Route controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   └── config/            # Configuration files
└── uploads/               # File uploads
```

## 🚀 Deployment

### Frontend Deployment (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend Deployment (Railway/Heroku)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Contact
- `POST /api/contacts` - Submit contact form
- `GET /api/contacts` - Get all contacts (admin)
- `DELETE /api/contacts/:id` - Delete contact (admin)

### Services
- `GET /api/services` - Get all services
- `POST /api/services` - Create service (admin)
- `PUT /api/services/:id` - Update service (admin)
- `DELETE /api/services/:id` - Delete service (admin)

### Portfolio
- `GET /api/portfolio` - Get all portfolio items
- `POST /api/portfolio` - Create portfolio item (admin)
- `PUT /api/portfolio/:id` - Update portfolio item (admin)
- `DELETE /api/portfolio/:id` - Delete portfolio item (admin)

## 🎨 Customization

### Theme Customization
Edit `src/theme/theme.ts` to customize colors, typography, and other design tokens.

### Content Management
Use the admin dashboard at `/admin` to manage:
- Contact form submissions
- Services and pricing
- Portfolio projects
- Blog posts

## 🔧 Development

### Adding New Pages
1. Create a new directory in `src/app/`
2. Add `page.tsx` file
3. Update navigation in `Navbar.tsx`

### Adding New Components
1. Create component in `src/components/`
2. Export from component file
3. Import and use in pages

### API Development
1. Add new route in `src/routes/`
2. Create controller in `src/controllers/`
3. Add model if needed in `src/models/`

## 📊 Performance Optimization

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting by pages
- **Caching**: API response caching
- **CDN**: Static asset delivery via CDN

## 🔒 Security

- **Input Validation**: Server-side validation for all inputs
- **CORS**: Configured CORS for API security
- **JWT**: Secure authentication tokens
- **Rate Limiting**: API rate limiting (to be implemented)
- **HTTPS**: SSL/TLS encryption in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: hello@dxagroup.com
- Website: https://dxagroup.com

---

**DXA Group** - Transforming businesses through digital excellence.
