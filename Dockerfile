# Use the Node.js image
FROM node:23

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . ./

# Expose the application port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
