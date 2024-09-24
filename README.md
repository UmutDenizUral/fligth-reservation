# Flight Reservation System

This is a Next.js-based flight reservation application that allows users to search for flights by route and date, make reservations, and view or delete their previous bookings. The application is designed to work for both web and mobile platforms, with images and components tailored to each.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Adjustments](#api-adjustments)
- [Database](#database)
- [Screenshots](#screenshots)
- [License](#license)

![Main Page](public/fly1.png)
![Main Page Mobil](public/fly2.png)
![My Flights](public/fly3.png)
![My Flights Mobil](public/fly4.png)


## Features

- **Flight Search:** Users can filter flights based on routes and dates.
- **Reservation System:** Users can make a reservation for available flights, which is stored in a MongoDB database.
- **Booking Management:** Users can view a list of their reservations and delete any reservation from the "My Flights" page.
- **Responsive Design:** Different images are displayed based on the platform (mobile or web).
- **Real-Time Updates:** Reservations and flight data are updated dynamically without reloading the page.
  
## API Adjustments

- The API is designed to handle real-time data with some restrictions. For example, the arrival location is known for flights departing from Amsterdam, but the exact arrival time might not always be available.
- The system adjusts flight data based on the available API responses while ensuring the user experience remains consistent.

## Technologies Used

- **Next.js App Router:** For seamless navigation and server-side rendering.
- **React.js:** For building reusable UI components.
- **MongoDB:** Database for storing user reservations.
- **Prisma:** ORM used to interact with MongoDB.
- **React Hot Toast:** For displaying toast notifications upon successful or failed actions (like reservations or deletions).
- **React Icons:** For adding beautiful icons to the UI.
- **Axios:** For making API calls to fetch and manipulate flight data.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/flight-reservation-system.git
    cd flight-reservation-system
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

3. Configure environment variables:
   Create a `.env` file in the root directory and add your MongoDB and API credentials. Example:

    ```bash
    MONGODB_URL=mongodb+srv://your_user:your_password@cluster.mongodb.net/flight-reservations
    NEXT_PUBLIC_API_URL=https://your-api-url.com
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Visit `http://localhost:3000` to see the app.

## Usage

### Main Page

- On the homepage, users can search for flights by specifying a **route** (e.g., from Amsterdam to another city) and a **date**.
- Based on the API, the app displays available flights. The system adapts to situations where some flight details are missing (e.g., arrival time).
- Different visuals are shown depending on the platform (mobile or web).

### Reservation System

- When the "Make Reservation" button is clicked, the system stores the booking in the MongoDB database.
- Users can go to the "My Flights" page to see their saved reservations, which are fetched dynamically from the database.

### Managing Reservations

- In the "My Flights" section, users can delete any reservation.
- The reservation is removed from both the front-end UI and the MongoDB database.

## API Adjustments

- The API used for flight data is handled carefully, considering potential incomplete data.
- For example, flights departing from Amsterdam might have the destination city available, but the arrival time may not always be provided.
- The UI adapts to show relevant details while hiding or marking incomplete information appropriately.

## Database

- **MongoDB:** MongoDB is used as the primary database to store user reservations.
- **Prisma ORM:** Prisma is utilized to facilitate database interactions, making it easy to manage the MongoDB collections and perform queries.

### Prisma Setup

To synchronize Prisma with your MongoDB database:

```bash
npx prisma generate
npx prisma migrate dev
