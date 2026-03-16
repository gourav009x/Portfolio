# Quick Setup Guide

## Step 1: Install Dependencies

```bash
# Install root dependencies (for running both server and client together)
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

## Step 2: Configure MongoDB

Create a `.env` file in the `server` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
```

**For MongoDB Atlas (Cloud):**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

## Step 3: Start MongoDB

Make sure MongoDB is running locally, or use MongoDB Atlas.

## Step 4: Run the Application

From the root directory:

```bash
npm run dev
```

This will start:
- Backend server on http://localhost:5000
- Frontend on http://localhost:3000

## Step 5: Customize Your Portfolio

1. Update personal info in `client/src/components/Hero.jsx`
2. Update About section in `client/src/components/About.jsx`
3. Add your skills in `client/src/components/Skills.jsx`
4. Add your projects (either via API or update default in `Projects.jsx`)
5. Update contact email in `client/src/components/Contact.jsx`

## Optional: Email Configuration

To enable email notifications for contact form submissions, add to `server/.env`:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

Note: For Gmail, you'll need to use an App Password, not your regular password.
