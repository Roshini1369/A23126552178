# AffordMed Campus Hiring Evaluation – Full Stack (Notification System)

## Overview

This project is a Notification Management System developed as part of the AffordMed Campus Hiring Evaluation.

The application provides a responsive user interface for viewing and managing notifications related to:

* Placements
* Results
* Events

The application integrates with the AffordMed Notification API and displays notifications in an organized and user-friendly dashboard.


## Features

### All Notifications

* View all notifications received from the API.
* Display notification message, type, and timestamp.
* Responsive card-based UI using Material UI.

### Notification Filtering

Filter notifications by:

* All
* Placement
* Result
* Event

### Priority Inbox

Notifications are prioritized based on:

1. Placement
2. Result
3. Event

Within the same category, newer notifications are displayed first.

### Statistics Dashboard

Displays:

* Total Notifications
* Placement Notifications
* Result Notifications
* Event Notifications

### Logging Middleware

A custom logging middleware is included and integrated to log incoming requests and application activities.


## Technology Stack

### Frontend

* React.js
* Vite
* Material UI
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* Axios
* CORS


## Project Structure

CAMPUS-EVALUATION-FS
│
├── logging-middleware
│
├── notification-app-be
│   ├── controllers
│   ├── middleware
│   ├── routes
│   ├── server.js
│
├── notification-app-fe
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── hooks
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── notification-system-design.md
│
└── README.md

## Installation

### Clone Repository

* bash
git clone <repository-url>
cd CAMPUS-EVALUATION-FS


## Backend Setup

* bash
cd notification-app-be

npm install

node server.js


Backend runs on:

*text
http://localhost:5000


## Frontend Setup

* bash
cd notification-app-fe

npm install

npm run dev


Frontend runs on:

* text
http://localhost:3000

## API Integration

Notification data is fetched from the AffordMed Evaluation API using authenticated requests.

Supported query parameters:

* text
page
limit
notification_type

Supported notification types:

* text
Placement
Result
Event

## Key Functionalities

### Notification Dashboard

Displays all notifications returned by the API.

### Priority Inbox

Shows top priority notifications based on:

* text
Placement > Result > Event


and recency.

### Filtering

Allows users to filter notifications by category.

### Responsive Design

Works across desktop and mobile devices.


## Author

**Roshini Tavva**

Roll Number: A23126552178

AffordMed Campus Hiring Evaluation Submission
