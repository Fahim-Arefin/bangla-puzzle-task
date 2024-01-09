# Project Title: Bangla Puzzle Task

---

## Overview

The Bangla Puzzle Task is a web application designed for displaying and managing a food menu. Users can browse through the menu, add items to their cart, and customize their orders. The application features a responsive design, providing an optimal user experience across different devices.

---

## Functionalities

1. **Navigation**: The application includes a navigation bar with various menu options, rewards, locations, gift cards, and a login option.

2. **Banner Section**: Highlights a specific category, in this case, "Chicken Crisper Combos," providing a visually appealing introduction.

3. **Menu Section**: Displays the main menu, allowing users to explore different food items and categories.

4. **Cards for Food Items**: Each food item is presented in a card format with details, images, and buttons for adding to the cart or customizing the order.

5. **Sidebar**: A sidebar is accessible from the main page, showing the items added to the cart. Users can manage quantities, delete items, and place orders.

6. **Event Handling**: Various event handlers manage interactions, including adding items to the cart, toggling the sidebar, incrementing/decrementing quantities, and deleting items.

---

## Event Handling

### Adding Items to the Cart

- The `btnEvent` function handles the click events for "Add to Cart" buttons on different food items.
- It updates the total item count in the navigation bar and the sidebar.
- The button is disabled and styled differently after an item is added to the cart.

### Sidebar Management

- The `showSidebar`, `toggleSidebar`, and `closeSidebar` functions handle the visibility and animation of the sidebar.
- The sidebar displays the items added to the cart with options to increment, decrement, or delete items.

### Quantity Management

- The `handleIncrement` and `handleDecrement` functions manage the quantity of items in the cart.
- They update the total price and quantities accordingly.

### Deleting Items

- The `handleDelete` function removes an item from the cart when the delete button is clicked.
- It adjusts the total item count and updates the styling of the corresponding food item card.

---

## Technologies Used

- HTML
- CSS (Tailwind CSS)
- JavaScript

---

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/Fahim-Arefin/bangla-puzzle-task.git>
   ```

2. Change Directory and double click the `index.html` to open the applicaiton on the browser
