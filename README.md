# Task Manager App

Welcome to the Task Manager App! This application is designed to help you manage your tasks efficiently using a microservices architecture. Below is a guide to get you started with the app.


## Features
- **User Authentication:** Secure registration and login with token-based sessions.
- **Task Management:** Create, read, update, and delete tasks.
- **Notifications:** Real-time updates on task creation and deletion.

## Technology Stack
- **Backend:** Node.js
- **Frontend:** React.js
- **Containerization:** Docker

## Installation

To get started with the Task Manager App, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/task-manager-app.git
   ```

2. **Install Docker:**
   - Follow the installation instructions for Docker from the [official Docker website](https://docs.docker.com/get-docker/).

3. **Build and Run the Application:**
   ```bash
   docker-compose up --build
   ```

   This command will build and start the Docker containers for all microservices.

4. **Access the Application:**
   - **Frontend:** Open your browser and go to `http://localhost:5173`.
   - **Backend APIs:** The services will be available at `http://localhost:3001` (Auth-Service), `http://localhost:3002` (Task-Service), and `http://localhost:3004` (Notification-Service).

## Usage

- **Register/Login:** Use the Auth-Service endpoints to register a new user or log in.
- **Manage Tasks:** Use the Task-Service endpoints to create, view, update, or delete tasks.
- **Notifications:** Receive real-time notifications about task updates.

## API Endpoints

### Auth-Service
- **POST /register:** Register a new user.
- **POST /login:** Log in an existing user.

### Task-Service
- **GET /tasks:** Get a list of tasks.
- **POST /tasks:** Create a new task.
- **PUT /tasks/:id:** Update an existing task.
- **DELETE /tasks/:id:** Delete a task.

### Notification-Service
- **GET /notifications:** Get a list of notifications.
