# Etapa build
FROM node:20-alpine as BUILD
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa production
FROM node:20-alpine
WORKDIR /app
COPY --from=BUILD /app/package*.json ./
RUN npm install --only=production
COPY --from=BUILD /app/.next ./.next
COPY --from=BUILD /app/public ./public
EXPOSE 3000
CMD ["npm", "start"]

