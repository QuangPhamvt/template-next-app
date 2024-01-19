FROM node:18-alpine as builder
WORKDIR /app



COPY . .
RUN apk add --no-cache libc6-compat
RUN npm install -g npm@10.3.0
RUN npm ci --freeze-lockfile  --ignore-scripts
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]











