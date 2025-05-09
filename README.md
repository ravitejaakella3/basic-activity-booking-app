# Basic Activity Booking App

A RESTful API for booking various activities like cricket matches, movies and football tournaments. Built with Node.js, Express.js and MongoDB.

## GitHub Repository
[View on GitHub](https://github.com/ravitejaakella3/basic-activity-booking-app)

## Features

- User authentication (Register/Login)
- JWT-based authentication
- List available activities
- Book activities
- View personal bookings
- Secure password hashing
- MongoDB database integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ravitejaakella3/basic-activity-booking-app.git
cd basic-activity-booking-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
PORT=5555
MONGODB_URI=mongodb://localhost:27017/activity-booking
JWT_SECRET=your_jwt_secret
```

4. Start the server:
```bash
npm start
```

The server will start running on http://localhost:5555

## API Endpoints

### Authentication

#### Register User
- **POST** `/api/auth/register`
- **Body:**
```json
{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "1234567890",
    "password": "password123"
}
```

#### Login User
- **POST** `/api/auth/login`
- **Body:**
```json
{
    "email": "john.doe@example.com",
    "password": "password123"
}
```
- **Response:** JWT token for authentication

### Activities

#### List All Activities
- **GET** `/api/activities`
- **Response:** List of all available activities

#### Create Activity (Admin only)
- **POST** `/api/activities`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
```json
{
    "title": "Cricket Match",
    "description": "Weekend cricket match",
    "location": "Central Park",
    "date": "2024-03-30",
    "time": "10:00 AM"
}
```

### Bookings

#### Book an Activity
- **POST** `/api/bookings/book/:activityId`
- **Headers:** `Authorization: Bearer <token>`
- **Response:** Booking confirmation with activity details

#### Get My Bookings
- **GET** `/api/bookings/my-bookings`
- **Headers:** `Authorization: Bearer <token>`
- **Response:** List of user's bookings

## Project Structure

```
src/
├── controllers/         # Route controllers
│   ├── authController.js
│   ├── activityController.js
│   └── bookingController.js
├── models/             # Database models
│   ├── User.js
│   ├── Activity.js
│   └── Booking.js
├── routes/             # API routes
│   ├── authRoutes.js
│   ├── activityRoutes.js
│   └── bookingRoutes.js
├── middlewares/        # Custom middlewares
│   └── authMiddleware.js
├── utils/             # Utility functions
│   └── db.js
└── app.js             # Application entry point
```

## Security Features

- Password hashing using bcrypt
- JWT token-based authentication
- Protected routes for authenticated users
- Input validation
- Error handling middleware

## Error Handling

The API uses standard HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Server Error

## Testing the API

You can test the API using tools like Postman or curl. Here's a basic flow:

1. Register a new user
2. Login to get JWT token
3. Use the token to access protected routes
4. List activities
5. Book an activity
6. View your bookings

## Postman Collection
A Postman collection is included in the repository (`booking_activity.postman_collection.json`) for testing the API endpoints.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.