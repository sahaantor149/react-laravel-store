# React-Laravel E-commerce Platform

## Overview
Welcome to the React-Laravel E-commerce Platform repository! This project is designed to provide users with a seamless online shopping experience and powerful management tools for administrators. Built with React for the front end and Laravel for the back end, this platform incorporates various features to ensure functionality and usability.

## Features
- **User Authentication & Authorization:** Secure user registration, login, and role-based access control.
- **Product Listings:** Browse products with categories, search functionality, and pagination.
- **Shopping Cart:** Add, remove, and update items in the shopping cart with a user-friendly interface.
- **Checkout Process:** Smooth and secure checkout process integrated with Stripe for payments.
- **Order Management:** Track and manage orders with detailed order history for users and admins.
- **Admin Panel:** Comprehensive dashboard for managing products, orders, and user accounts.
- **Reviews & Ratings:** Enable users to leave product reviews and ratings.

## Technologies Used
- **Frontend:** React, Redux, Axios, React Router
- **Backend:** Laravel, MySQL, Stripe API
- **Others:** Bootstrap, SCSS, JWT Authentication

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/react-laravel-ecommerce.git
    cd react-laravel-ecommerce
    ```

2. **Backend Setup (Laravel):**
    - Navigate to the `backend` directory:
      ```bash
      cd backend
      ```
    - Install dependencies:
      ```bash
      composer install
      ```
    - Set up the `.env` file:
      ```bash
      cp .env.example .env
      ```
    - Generate application key:
      ```bash
      php artisan key:generate
      ```
    - Configure your database in the `.env` file.
    - Run database migrations:
      ```bash
      php artisan migrate
      ```
    - Start the Laravel server:
      ```bash
      php artisan serve
      ```

3. **Frontend Setup (React):**
    - Navigate to the `frontend` directory:
      ```bash
      cd ../frontend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Start the React development server:
      ```bash
      npm start
      ```

## Usage
- **User:** Register and log in to browse products, add items to the cart, and complete purchases.
- **Admin:** Access the admin panel to manage products, orders, and user accounts.

## Contributing
We welcome contributions! Please fork the repository and create a pull request with your changes.

## Acknowledgements
Special thanks to the open-source community for providing the tools and resources that made this project possible.
