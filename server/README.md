# Server Configuration

Create a `.env` file in this directory with the following variables:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
# Optional: Email configuration for contact form notifications
# EMAIL_USER=your-email@gmail.com
# EMAIL_PASS=your-app-password
```

## MongoDB Setup

You can use either:
- Local MongoDB: `mongodb://localhost:27017/portfolio`
- MongoDB Atlas: `mongodb+srv://username:password@cluster.mongodb.net/portfolio`
