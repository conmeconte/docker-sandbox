FROM node:alpine as builder
WORKDIR '/app'
COPY package.json . 
RUN npm install
COPY . .
RUN npm run build

FROM nginx
#copy form builder phase, to folder is from ngix documenation
COPY --from=builder /app/build /usr/share/nginx/html
