# Portfolio Website - MERN Stack

A modern, responsive portfolio website built with the MERN stack (MongoDB, Express, React, Node.js), Vite, and Bootstrap.

## Features

- 🎨 Modern and responsive UI with Bootstrap
- ⚡ Fast development with Vite
- 📱 Mobile-first design
- 📧 Contact form with backend integration
- 🗄️ MongoDB for data storage
- 🚀 RESTful API with Express
- ✨ Smooth scrolling navigation
- 📊 Projects showcase

## Tech Stack

### Frontend
- React 18
- Vite
- Bootstrap 5
- React Bootstrap
- Bootstrap Icons
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer (optional, for email notifications)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd POrtfolio
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install server dependencies
   cd server
   npm install
   
   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   # Optional: Email configuration
   # EMAIL_USER=your-email@gmail.com
   # EMAIL_PASS=your-app-password
   ```

4. **Start MongoDB**
   
   Make sure MongoDB is running on your system. If using MongoDB Atlas, use your connection string in the `.env` file.

5. **Run the application**
   
   From the root directory:
   ```bash
   npm run dev
   ```
   
   This will start both the server (port 5000) and client (port 3000) concurrently.
   
   Or run them separately:
   ```bash
   # Terminal 1 - Server
   npm run server
   
   # Terminal 2 - Client
   npm run client
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Project Structure

```
POrtfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── server/                 # Express backend
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── index.js           # Server entry point
│   └── package.json
├── package.json           # Root package.json
└── README.md
```

## API Endpoints

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions (admin)

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `POST /api/projects` - Create a new project (admin)

### Health Check
- `GET /api/health` - Server health check

## Customization

### Update Personal Information

1. **Hero Section** (`client/src/components/Hero.jsx`)
   - Update name, title, and description
   - Update social media links

2. **About Section** (`client/src/components/About.jsx`)
   - Update about me content

3. **Skills** (`client/src/components/Skills.jsx`)
   - Add or remove skills

4. **Projects**
   - Add projects via API or update default projects in `Projects.jsx`

5. **Contact** (`client/src/components/Contact.jsx`)
   - Update email address and social links

## Building for Production

```bash
# Build frontend
cd client
npm run build

# The built files will be in client/dist/
```

## Deployment

### Backend
- Deploy to Heroku, Railway, Render, or any Node.js hosting service
- Set environment variables on your hosting platform
- Use MongoDB Atlas for cloud MongoDB hosting

### Frontend
- Deploy the `client/dist` folder to Vercel, Netlify, or any static hosting service
- Update API endpoints to point to your production backend URL

## License

ISC

## Author

Your Name

---

Made with ❤️ using MERN Stack, Vite, and Bootstrap
