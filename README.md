# Todo Manager

A beautiful, modern Todo application built with Next.js, React, TypeScript, and MongoDB. Features a sleek glassmorphism design with smooth animations and full CRUD functionality.

## ✨ Features

- **Modern UI/UX**: Glassmorphism design with animated background elements
- **Full CRUD Operations**: Create, read, update, and delete todos
- **Real-time Updates**: Instant UI updates with backend synchronization
- **Status Tracking**: Mark todos as completed/incomplete with visual indicators
- **Edit Mode**: Inline editing functionality for existing todos
- **Statistics Dashboard**: Track total, completed, and pending tasks
- **Responsive Design**: Optimized for all screen sizes
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose ODM
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Lucide React icons
- **HTTP Client**: Axios

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (v18 or higher)
- npm or yarn package manager
- MongoDB database (local or cloud instance)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/todo-manager.git
cd todo-manager
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory and add your MongoDB connection string:

```env
MONGODB_URI=mongodb://localhost:27017/todoapp
# or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
├── components/
│   └── ui/           # Reusable UI components
├── config/
│   └── db.ts         # Database connection configuration
├── model/
│   └── todoModal.ts  # Mongoose Todo model and schema
├── app/
│   ├── api/
│   │   └── todo/
│   │       └── route.ts  # API endpoints for CRUD operations
│   └── page.tsx      # Main Todo component
└── ...
```

## 🔧 API Endpoints

The application provides the following REST API endpoints:

- `GET /api/todo` - Retrieve all todos
- `POST /api/todo` - Create a new todo
- `PUT /api/todo` - Update an existing todo
- `DELETE /api/todo` - Delete a todo

### API Request/Response Examples

#### Create Todo
```javascript
POST /api/todo
Content-Type: application/json

{
  "todo": "Buy groceries",
  "isCompleted": false
}
```

#### Update Todo
```javascript
PUT /api/todo
Content-Type: application/json

{
  "_id": "60d5ecb54b24a12d8c5f6789",
  "todo": "Buy groceries",
  "isCompleted": true,
  "isUpdated": true
}
```

## 💾 Database Schema

The Todo model includes the following fields:

```typescript
interface ITodo {
  _id: string;           // MongoDB ObjectId
  todo: string;          // Todo description (required)
  isCompleted: boolean;  // Completion status (required)
  isUpdated?: boolean;   // Update flag (optional)
}
```

## 🎨 Features Overview

### Interactive Todo Management
- Add new todos with Enter key or button click
- Toggle completion status with checkboxes
- Inline editing with save functionality
- Visual status indicators (Completed/Not Completed/Updated)

### Beautiful Design Elements
- Glassmorphism UI with backdrop blur effects
- Animated background elements with pulsing orbs
- Gradient text and buttons
- Smooth hover animations and transitions
- Responsive grid layout for statistics

### Statistics Dashboard
- Real-time counting of total tasks
- Completed vs pending task breakdown
- Color-coded statistics display

## 🔧 Customization

### Styling
The application uses Tailwind CSS for styling. You can customize the appearance by modifying the classes in the component files.

### Database
To use a different database or modify the schema, update the files in the `model/` and `config/` directories.



## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues

If you encounter any issues or have suggestions for improvements, please [create an issue](https://github.com/hussainbinfazal/todo-manager/issues) on GitHub.

## ⭐ Show Your Support

If you found this project helpful, please give it a star on GitHub!

---

**Built by  Hussainbinfazal! 🎉**