# E-Commerce Website for a BookStore

A full-stack e-commerce application for buying and selling books built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- User authentication and authorization
- Book browsing with search and filter capabilities
- Shopping cart functionality
- Order processing
- Admin dashboard with statistics
- Responsive design for all devices

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- Redux Toolkit for state management
- Tailwind CSS for styling
- Chart.js for data visualization
- Firebase for authentication
- Axios for API requests
- SwiperJS for carousels
- SweetAlert2 for notifications

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB database

### Installation

#### Frontend
1. Clone the repository
2. Navigate to the frontend directory
```bash
cd frontend
```
3. Install dependencies
```bash
npm install
```
4. Create a `.env.local` file based on the example file and add your Firebase configuration
5. Start the development server
```bash
npm run dev
```

#### Backend
1. Navigate to the backend directory
```bash
cd backend
```
2. Install dependencies
```bash
npm install
```
3. Create a `.env` file with the following variables:
```
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
4. Start the server
```bash
npm start
```
or for development with auto-reload:
```bash
npm run start:dev
```

## Project Structure

### Frontend
- `/src/components` - Reusable UI components
- `/src/pages` - Main application pages
- `/src/context` - Context providers (Auth)
- `/src/redux` - Redux store configuration and slices
- `/src/firebase` - Firebase configuration
- `/src/utils` - Utility functions
- `/src/routers` - Route definitions

### Backend
- `/src/books` - Book related routes, controllers, and models
- `/src/users` - User authentication and profile management
- `/src/orders` - Order processing and management
- `/src/stats` - Admin statistics and reports
- `/src/middleware` - Custom middleware functions

## Deployment

The application is deployed using Vercel:
- Frontend: [https://book-app-frontend-mocha.vercel.app](https://book-app-frontend-mocha.vercel.app)
- Backend: [https://book-app-backend-tawny.vercel.app](https://book-app-backend-tawny.vercel.app) 

## License

Not yet Licensed

## Authors

- Varun

## Acknowledgments

- React.js and Node.js communities
- MongoDB
- Vercel for hosting
