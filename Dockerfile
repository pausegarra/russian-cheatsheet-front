# Use an official nginx image
FROM nginx:alpine

# Copy the index.html file to the nginx web root directory
COPY dist/ /usr/share/nginx/html/

# add a custom config for nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# Expose the nginx port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]