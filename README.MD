# Stationery Online Store - Backend

This project is the backend REST API for an online store, built with **Node.js**, **Express**, and **MySQL**. It connects to a frontend built with **React + Next.js**.

---

## Technologies Used

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [MySQL](https://www.mysql.com/)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [morgan](https://www.npmjs.com/package/morgan)
* [cors](https://www.npmjs.com/package/cors)

## Requirements

* Node.js 18+
* npm
* MySQL 8
* Git

## Clone the project

git clone 
cd mroffice-web

## Backend

cd backend
npm install

Create a .env file with the following content:
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database
DB_PORT=3306
JWT_SECRET=your_jwt_secret

Then start the backend:
npm run dev

## Frontend

cd ../frontend
npm install

Start the frontend:
npm run dev -- --port 3001

## Access

* Frontend: http://localhost:3001
* Backend: http://localhost:3000/api

## Note

This project requires a local MySQL database configured in the .env file.