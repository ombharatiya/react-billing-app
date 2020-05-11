# # FROM node:8.11.2 as react-build
# # RUN mkdir /app
# # WORKDIR /app
# # COPY package.json .
# # COPY tsconfig.json .
# # RUN npm install
# # COPY src src
# # COPY public public
# # RUN npm run build
# # CMD ["npm", "start"]



# Stage 0, 
# FROM node:8.11.2 as react-build
# RUN mkdir /app
# WORKDIR /app
# COPY package.json .
# COPY tsconfig.json .
# RUN npm install
# COPY src src
# COPY public public
# ENV REACT_APP_baseAPIURL=kn-backend:8000
# RUN npm run build

# # Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM nginx:1.15
# # COPY --from=react-build /app/build/ /usr/share/nginx/html
# COPY build/ /usr/share/nginx/html
# #Copy config
# RUN rm /etc/nginx/conf.d/default.conf
# RUN rm /etc/nginx/nginx.conf

# COPY default.conf /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/

# # RUN rm /etc/nginx/conf.d/default.conf
# # COPY default.conf /etc/nginx/conf.d/default.conf
# # # COPY nginx.conf /etc/nginx/nginx.conf

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]


# # FROM node:8.11.2 as react-build
# # RUN mkdir /app
# # WORKDIR /app
# # COPY package.json .
# # COPY tsconfig.json .
# # RUN npm install
# # COPY src src
# # COPY public public
# # RUN npm run build
# # CMD ["npm", "start"]


# FROM node:alpine as todo-app-build
# WORKDIR /client
# COPY package.json ./
# RUN yarn
# COPY ./public ./public
# COPY ./src ./src
# ENV REACT_APP_baseAPIURL=<backend-app-service-ip>:<port>
# RUN yarn build
# FROM nginx:latest
# LABEL maintainer=Aamir-Pinger
# COPY - from=todo-app-build /client/build/ /usr/share/nginx/html
# EXPOSE 80

# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
# FROM tiangolo/node-frontend:10 as build-stage
# WORKDIR /app
# COPY package*.json /app/
# RUN npm install
# COPY ./ /app/
# RUN npm run build
# # Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM nginx:1.15
# COPY --from=build-stage /app/build/ /usr/share/nginx/html
# # Copy the default nginx.conf provided by tiangolo/node-frontend
# COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf


FROM nginx:1.15.2-alpine
COPY ./build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]