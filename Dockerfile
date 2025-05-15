# Etapa 1: Genera los archivos de la app
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY src/ ./src/
RUN npm run build

# Etapa 2: Levanta la app en ambiente pre-produccion
FROM node:20-alpine as production
WORKDIR /app
COPY package*.json .
RUN npm ci --only=production
COPY --from=build /app/dist ./dist
CMD ["npm", "start"]
