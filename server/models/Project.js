const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    default: ''
  },
  technologies: [{
    type: String,
    trim: true
  }],
  githubUrl: {
    type: String,
    default: ''
  },
  liveUrl: {
    type: String,
    default: ''
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', projectSchema);


// {
//   "name": "portfolio-client",
//   "private": true,
//   "version": "0.0.0",
//   "type": "module",
//   "scripts": {
//     "dev": "vite",
//     "build": "vite build",
//     "preview": "vite preview"
//   },
//   "dependencies": {
    
//     "axios": "^1.6.2",
//     "bootstrap": "^5.3.2",
//     "bootstrap-icons": "^1.11.2",
//     "react": "^18.2.0",
//     "react-bootstrap": "^2.9.1",
//     "react-dom": "^18.2.0",
//     "react-router-dom": "^6.20.1",
//     "vite": "^5.4.21"
//   },
//   "devDependencies": {
    
//     "@types/react": "^18.2.43",
//     "@types/react-dom": "^18.2.17",
//     "@vitejs/plugin-react": "^4.2.1",
    
//   }
// }
