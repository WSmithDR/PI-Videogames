# Use Node.js v12
FROM node:12.18.3

# Create app directory
WORKDIR /src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose the port
EXPOSE 3001

CMD [ "node", "index.js" ]

#Logrado el despliegue del BACK
#boludo