FROM node:20-alpine AS builder

WORKDIR /pascal_ian_final_site

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /pascal_ian_final_site/dist /usr/share/nginx/html

EXPOSE 5575

RUN sed -i 's/80;/5575;/' /etc/nginx/conf.d/default.conf

LABEL name="pascal_ian_coding_assignment14"

CMD ["nginx", "-g", "daemon off;"]
