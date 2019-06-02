FROM node
WORKDIR /app
ADD script.js .
ADD package.json .
RUN yarn install
CMD ["npm start"]