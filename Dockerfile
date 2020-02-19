# Stage: 1

FROM node:12.12.0 as react-build
ARG NAME=TeApuntas
ENV NAME=$NAME
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

# Stage 2

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
