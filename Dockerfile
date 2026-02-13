FROM node:lts-alpine
RUN apk add --no-cache git openssh-client
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "build"]