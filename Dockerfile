# ===== STAGE 1: Build Angular app =====
FROM node:18-alpine AS build

WORKDIR /app

# Install deps first (better layer caching)
COPY package*.json ./
RUN npm ci

# Copy the rest of the project and build
COPY . .
RUN npm run build -- --configuration production

# ===== STAGE 2: Serve with nginx =====
FROM nginx:alpine

# Clean default nginx html
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular app from build stage
# NOTE: "vintekit" must match your angular.json project/outputPath
COPY --from=build /app/dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
