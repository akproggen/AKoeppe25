# --- Build Stage ---
FROM node:latest AS build

WORKDIR /app

# Copy package.json and package-lock.json if present
COPY package*.json ./

# Install dependencies
RUN npm ci

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy the rest of the application code
COPY . .

# Build the Angular app (adjust output path if needed)
RUN npm run build --configuration=production

# --- Production Stage ---
FROM nginx:latest

# Copy custom nginx config
COPY nginx.config /etc/nginx/conf.d/default.conf

# Copy built app from previous stage (adjust path if needed)
COPY --from=build /app/dist/user-management/browser /usr/share/nginx/html

EXPOSE 80