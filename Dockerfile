FROM node:16-bullseye as builder

COPY . ./

RUN npm install
RUN npm run build

FROM nginx:1.23.3 as server

EXPOSE 80
COPY --from=builder build/ /usr/share/nginx/html

