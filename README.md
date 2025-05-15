# React-Redux Bank Application

![React](https://img.shields.io/badge/React-18-blue)
![Redux](https://img.shields.io/badge/Redux-5.0.1-purple)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.8.1-blueviolet)
![Vite](https://img.shields.io/badge/Vite-5.0.0-yellow)

A modern banking application built with React and Redux that demonstrates state management patterns for account operations. This project showcases how to implement a clean, responsive UI for financial operations with proper state handling.

## 🚀 Features

- **User Account Management**

  - Create new customer profiles
  - View account balance in real-time
  - Deposit funds (with currency conversion)
  - Withdraw funds
  - Request and repay loans

- **State Management**

  - Global state with Redux
  - Slice pattern with Redux Toolkit
  - Async operations with Redux Thunks
  - Optimized re-rendering with proper selectors

- **Modern UI**
  - Responsive design for all devices
  - Animated transitions and interactions
  - CSS variables for consistent theming
  - Gradient effects and modern card layouts

## 🛠️ Technologies Used

### Core

- **React** - UI library for building component-based interfaces
- **Redux** - State management library
- **Redux Toolkit** - Official toolset for Redux development
- **Redux Thunk** - Middleware for async logic in Redux

### Build & Development

- **Vite** - Next generation frontend build tool
- **Babel** - JavaScript compiler
- **ESLint** - Code linting tool

### API Integration

- **Frankfurter API** - For currency conversion

## 📂 Project Structure

```
src/
├── features/           # Feature-based architecture
│   ├── accounts/       # Account management features
│   │   ├── AccountOperations.jsx
│   │   ├── AccountOperations.css
│   │   ├── BalanceDisplay.jsx
│   │   ├── BalanceDisplay.css
│   │   └── accountSlice.js
│   └── customers/      # Customer management features
│       ├── CreateCustomer.jsx
│       ├── CreateCustomer.css
│       ├── Customer.jsx
│       ├── Customer.css
│       └── customerSlice.js
├── App.jsx             # Application main component
├── App.css             # Application-wide styles
├── main.jsx            # Entry point
├── store.js            # Redux store configuration
└── index.css           # Global styles and CSS variables
```

## 🔄 State Management

This application uses a slice-based Redux architecture:

- **Store**: Central state container
- **Slices**: Separate reducers for accounts and customers
- **Thunks**: For async operations (API calls for currency conversion)
- **Selectors**: For efficient component re-rendering

## 🎨 UI/UX Features

- **Responsive Design**: Works across all device sizes
- **Animations**: Smooth transitions between states
- **Interactive Elements**: Hover effects and visual feedback
- **Consistent Theming**: Color palette using CSS variables

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/Youssef-Yasser-Mahmoud/redux-into
   cd react-redux-bank
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

## 🧪 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the production version
- `npm run lint` - Runs ESLint to check code quality
- `npm run preview` - Previews the production build locally

## 📝 License

This project is open-source and available under the MIT License.

## 🙏 Acknowledgements

- [Redux Documentation](https://redux.js.org/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Frankfurter API](https://www.frankfurter.app/)
