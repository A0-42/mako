FROM oven/bun:1 AS base
WORKDIR /app

# Install dependencies
COPY package.json ./
RUN bun install --frozen-lockfile || bun install

# Copy source
COPY . .

# Build
RUN bun run build

# Production
FROM oven/bun:1-slim
WORKDIR /app
COPY --from=base /app/build ./build
COPY --from=base /app/package.json .

ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

CMD ["bun", "run", "build/index.js"]
