# Weather Application (WeatherApp)

This project is a weather forecasting application built as part of web-oriented systems and technologies coursework. It demonstrates the integration of multiple technologies including **Node.js**, **Pug**, **MongoDB**, **Docker**, and **Nginx**, deployed locally.

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Development](#development)
- [Deployment](#deployment)
- [Usage](#usage)
- [License](#license)

---

## Features
- **Weather Forecasting**:
    - Retrieve weather data for predefined cities from JSON files.
    - Dynamic rendering of weather details using `hbs` (Handlebars) templates.

- **Frontend**:
    - **Pug** for page rendering.
    - User-friendly UI for fetching and displaying weather data.

- **Backend**:
    - RESTful API built with **Node.js** and **Express**.
    - Authentication support through a dedicated `AuthAPI`.

- **Database**:
    - Persistent data storage using **MongoDB**.

- **Dockerized Services**:
    - Each component is containerized for seamless local and production deployment.

- **Nginx as a Reverse Proxy**:
    - Efficient request routing between services.
    - Caching and load balancing.

---

## Technologies Used
- **Frontend**: Pug
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Containerization**: Docker, Docker Compose
- **Reverse Proxy**: Nginx
- **Other Tools**: Axios, Nodemon, Serve

---

## Setup and Installation

### Prerequisites
- **Node.js**: Install the latest LTS version from [Node.js](https://nodejs.org/).
- **Docker**: Install [Docker Desktop](https://www.docker.com/products/docker-desktop/).
- **Heroku CLI**: Install from [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

### Cloning the Repository
```bash
git clone https://github.com/A1exRu/lnu-weather-labs.git
cd lnu-weather-labs
```

### Running Locally with Docker
1. **Build and Run Docker Containers**:
   ```bash
   docker-compose up --build
   ```

2. **Access Services**:
    - Backend: `http://localhost:3000`
    - Frontend: `http://localhost`

---

## Development

### Running in Development Mode
1. **Backend**:
   ```bash
   npm install
   npm run dev
   ```
2. **Frontend**:
   ```bash
   cd frontend
   npm install
   npm start
   ```

### Using Nodemon
To enable live-reloading for Node.js:
```bash
npm install -g nodemon
nodemon src/app.js -e js,hbs
```

---

## Deployment

### Deploy to Heroku
1. **Deploy from GitHub**:
    - Create a Heroku project and link it to your GitHub repository.
    - Enable automatic deployment from the `main` branch.

2. **Deploy Locally**:
   ```bash
   heroku login
   heroku create weather-app
   git push heroku main
   ```

---

## Usage

### Weather Endpoints
- Fetch all cities:
  ```
  GET /weather
  ```

### Example Request
```bash
curl http://localhost:3000/weather
```

---

## License
This project is licensed under the [MIT License](LICENSE).

---
