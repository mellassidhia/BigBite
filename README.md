# BigBite

Welcome to **BigBite**, a full-stack web application for online food ordering built using **ReactJS**. This project was developed as part of a software engineering course and is designed to simulate a real-world application, focusing on user experience, security, and efficient state management.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

**BigBite** is an online food ordering platform that allows users to browse through a variety of food items, add them to their cart, and proceed to checkout securely using Stripe for payment processing. The application is designed to be responsive, providing a seamless experience across different devices.

## Features

- **User Authentication:** Users can sign up, log in, and manage their profiles.
- **Food Menu Browsing:** Explore a variety of food items with detailed descriptions and prices.
- **Shopping Cart:** Add, update, and remove items from the shopping cart with real-time updates.
- **Checkout Process:** Secure payment integration using Stripe.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Context API for State Management:** Efficient handling of global state across components.

## Technologies Used

- **Frontend:**
  - ReactJS
  - HTML5, CSS3
  - React Context API
  - React Router
  - React Modal

- **Backend:**
  - To be implemented

- **Payment Processing:**
  - Stripe API

- **Version Control:**
  - Git & GitHub

## Installation

Before running the application, you need to install the required dependencies. Follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/mellassidhia/BigBite.git
    ```

2. Navigate to the project directory:

    ```bash
    cd BigBite
    ```

3. Install Vite and create a new project:

    ```bash
    npm create vite@latest
    ```

4. Follow the prompts to set up the project with React.

5. Navigate into the newly created project directory (if necessary):

    ```bash
    cd <your-project-name>
    ```

6. Install the necessary dependencies:

    ```bash
    npm install
    ```

## Running the Application

To run the application locally, use the following command:

```bash
npm run dev
```
This will start the application on http://localhost:5173.
## Usage

Once the application is running, you can:

- Browse the menu and view different food items.
- Add items to your shopping cart.
- Create an account or log in to an existing account.
- Proceed to checkout and complete a purchase using Stripe.

## Roadmap

Planned features and improvements include:

- **Backend Implementation:** Setting up a Node.js/Express backend to handle user data, orders, and other server-side functionalities.
- **Order History:** Allow users to view their past orders.
- **Wishlist:** Enable users to save items for future purchases.
- **Admin Panel:** Develop an admin panel for managing orders, users, and inventory.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.


