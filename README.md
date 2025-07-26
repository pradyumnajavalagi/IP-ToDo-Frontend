# AWS Todo App (Frontend)

A simple, modern Todo application built with React. This frontend connects to a backend API for managing todos, supporting full CRUD operations. Styled with Bootstrap for a clean and responsive UI.

## Features

- Add, edit, and delete todos
- Each todo has a title, description, status (pending, in-progress, completed), and due date
- Edit existing todos inline
- Responsive and clean Bootstrap UI
- Connects to a backend API (URL configurable via environment variable)

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd pi-todo-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root directory and set the backend API URL:

```
REACT_APP_API_URL=http://localhost:5000
```

> The frontend expects the backend to expose a `/todos` endpoint.

### Running the App

Start the development server:
```bash
npm start
```
The app will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

To build the app for production:
```bash
npm run build
```

## Project Structure

```
pi-todo-frontend/
├── public/
│   └── index.html
├── src/
│   ├── api.js           # Axios instance for API calls
│   ├── App.js           # Main app component
│   ├── index.js         # Entry point
│   └── components/
│       ├── TodoForm.js  # Form for adding/editing todos
│       └── TodoList.js  # List and actions for todos
├── package.json
└── README.md
```

## Dependencies
- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [Bootstrap](https://getbootstrap.com/)

## License

MIT License © 2025 Pradyumna AJ 