FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy your static files into nginx web root
COPY index.html /usr/share/nginx/html/index.html
COPY about.html /usr/share/nginx/html/about.html

EXPOSE 80
