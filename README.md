# Real-Time Chat Application

A full-stack real-time messaging application with user authentication, online status tracking, and multimedia messaging capabilities.

## 🚀 Features

- **User Authentication** - Secure signup/login with JWT tokens and password encryption
- **Real-Time Messaging** - Instant message delivery using WebSocket (Socket.IO)
- **Online Status Tracking** - See who's online in real-time
- **Image Sharing** - Send and receive images in conversations
- **Message Read Status** - Track seen/unseen messages
- **Profile Management** - Update profile picture, bio, and name
- **Responsive Design** - Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- TailwindCSS
- React Router DOM
- Socket.IO Client
- Axios
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.IO
- JWT Authentication
- Bcrypt.js
- Cloudinary (Image Storage)

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (v14 or higher)
- MongoDB database
- Cloudinary account (for image uploads)

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2. Install dependencies

**Server:**
```bash
cd server
npm install
```

**Client:**
```bash
cd client
npm install
```

### 3. Environment Variables

**Server (.env):**
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PORT=5000
NODE_ENV=development
```

**Client (.env):**
```env
VITE_BACKEND_URL=http://localhost:5000
```

## 🚀 Running the Application

### Development Mode

**Start the server:**
```bash
cd server
npm start
```

**Start the client:**
```bash
cd client
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

### Production Build

**Build the client:**
```bash
cd client
npm run build
```

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── context/           # React Context providers
│   ├── src/
│   │   ├── assets/        # Images and static files
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions
│   │   └── App.jsx        # Main App component
│   └── package.json
│
├── server/                # Backend Node.js application
│   ├── controllers/       # Request handlers
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── lib/              # Utility functions
│   └── server.js         # Server entry point
│
└── README.md
```

## 🔑 Key Features Explained

### Authentication System
- JWT-based authentication with secure token storage
- Password hashing using bcrypt
- Protected routes with authentication middleware

### Real-Time Communication
- WebSocket connections using Socket.IO
- Instant message delivery
- Online/offline status updates
- Automatic reconnection handling

### Message Management
- Text and image messages
- Message history retrieval
- Unseen message counter
- Read receipts

### Profile Management
- Profile picture upload to Cloudinary
- Bio and name customization
- Secure profile updates

## 🌐 Deployment

This application is configured for deployment on Vercel:

- Both client and server include `vercel.json` configuration files
- Environment variables must be set in Vercel dashboard
- MongoDB Atlas recommended for production database

## 📝 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/check` - Verify authentication
- `PUT /api/auth/update-profile` - Update user profile

### Messages
- `GET /api/messages/users` - Get all users for sidebar
- `GET /api/messages/:id` - Get messages with specific user
- `POST /api/messages/send/:id` - Send message to user
- `PUT /api/messages/mark/:id` - Mark message as seen

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Your Name - [Your GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- Socket.IO for real-time communication
- Cloudinary for image storage
- MongoDB for database management
- React and Vite for frontend development
