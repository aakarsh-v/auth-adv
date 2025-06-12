# 🔐Advance Authentication

A full stack authentication system(backend focussed) with email verification, password reset, JWT cookies and modern React + Tailwind frontend.

## 🚀Features

-> User registration with email verification
-> Secure login with JWT (stored in HTTP-only cookies)
-> Password reset via email
-> MongoDB for data storage
-> Protected routes (backend & frontend)
-> Modern UI with React, Tailwind CSS, and Framer Motion

## 🛠️Tech used

1. `Backend:` Node.js, Express, MongoDB, Mongoose, JWT, Mailtrap
2. `Frontend:` React, Tailwind CSS, Framer Motion, Axios


###  🔧Backend setup

1. `npm install` : Install dependecies
2. Create .env file 
`MONGO_URI =   `
`PORT = `
`JWT_SECRET = `
`NODE_ENV = development `
`MAILTRAP_TOKEN = `
`MAILTRAP_ENDPOINT = `
`RESETPASSWORD_TOKEN = `
`API_URL = `
3. `npm start` start the backend

###  🎨Frontend Setup

1. `cd frontend` : Navigate to the frontend folder
2. `npm install` : Install dependencies
3. `npm run dev` : Start the frontend

## 📦New dependencies used

1. `cookie-parser` -> 
Purpose: Middleware for parsing cookies attached to the client request object.
How it's used: Allows your Express backend to easily read and set cookies (such as JWT tokens for authentication).
2. `crypto` -> 
 Purpose: Middleware for parsing cookies attached to the client request object.
How it's used: Allows your Express backend to easily read and set cookies (such as JWT tokens for authentication).
3. `Mailtrap` -> 
Purpose: Used for sending and testing emails in development.
How it's used: Integrates with Mailtrap’s SMTP or API to send verification and password reset emails without sending real emails to users.

## 📡API Endpoints

1. `POST /api/auth/signup` – Register a new user
2. `POST /api/auth/login` – Login
3. `POST /api/auth/logout` – Logout
4. `GET /api/auth/check-auth` – Check authentication status
5. `POST /api/auth/verify-email` – Verify email with code
6. `POST /api/auth/forgot-password` – Request password reset
7. `POST /api/auth/reset-password/:token` – Reset password

## Overall workflow

1. 📝`User Registration:`
User signs up with email and password.
A verification code is sent to the user's email.

2. ✅`Email Verification:`
User enters the verification code to verify their email.
On success, the account is activated.

3. 🔐`Login:`
User logs in with email and password.
On success, a JWT token is set in an HTTP-only cookie.

4. 🛡️`Protected Routes:`
Only authenticated and verified users can access protected routes (like the dashboard).

5. 🔁`Forgot Password:`
User requests a password reset.
A reset link is sent to the user's email.

6. 🆕`Reset Password`
User clicks the link, enters a new password, and the password is updated.


## 🤝Need Help or Want to Connect?

If you have any doubts, issues, or want to connect, feel free to reach out:

`LinkedIn:` : https://www.linkedin.com/in/aakarsh-verma-169088248/

`Instagram:` : https://www.instagram.com/av_aakarsh
## 🪈🦚राधे राधे🦚 🪈
<img src="https://c.tenor.com/EqhaerZ3GaMAAAAd/tenor.gif" width="30%" alt="80s Hacker Neon GIF" />
