FROM node:18
 
WORKDIR /usr/src/app
 
 
# Copy app source
COPY . .

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build
 
EXPOSE 3000
 
CMD [ "pnpm", "start"]