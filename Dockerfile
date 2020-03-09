# Stage: 1

FROM node:12.12.0 as react-build
ARG NAME=TeApuntas
ENV NAME=$NAME
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

# Stage 2

CMD ["npm", "start"]
