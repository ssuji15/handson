FROM node:lts-alpine
WORKDIR app
COPY package.json .
RUN npm install
COPY . .
ENV db_host='mysqlcontainer'
ENV db_port=3306
ENV db_user='root'
ENV db_password='root'
ENV db_name='library'
CMD ["node", "app.js"]
