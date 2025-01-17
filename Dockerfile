# Use the official Node.js image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port Strapi will run on
EXPOSE 1337

# Start the Strapi app
CMD ["npm", "run", "start"]
