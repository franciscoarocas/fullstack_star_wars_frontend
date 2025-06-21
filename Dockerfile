# Step 1: Build
FROM node:22 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

# Step 2
FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

RUN npm install --omit=dev

EXPOSE 4173

CMD ["npx", "vite", "preview", "--host"]
