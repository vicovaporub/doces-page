# Online Bakery Shop

## Description

A functional online bakery shop for a friend's small business.

This app is built in Next.js and uses Redux to store users, cart items and orders, and stores the data in MongoDB databases so it can be fetched by the admin to start production.

The shop can be visited here: [Doces da Carol](https://doces-carol.vercel.app)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vicovaporub/doces-page
   cd doces-page

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Start the server:
   ```bash
   npm run dev
   (Open the browser and access the application at `http://localhost:3000`)
   ```

## Usage

- To register you need to input a brazilian WhatsApp number with full name
- Clicking the "Add to Cart" button will add the products to the cart
- Inside the cart you can modify the number of items if needed
- The checkout page is where you will review the order
- When the order is placed, its sent to a MongoDB database
- There's a page where the user can see all their orders
- There's an admin page that only selected users can access, this page displays all orders
