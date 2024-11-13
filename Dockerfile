# Use the official Node.js image as the base
FROM node:20.10.0

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port Next.js will run on
EXPOSE 3000

# Run the application
CMD ["npm", "run", "start"]
