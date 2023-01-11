FROM node:19-slim as build

WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM node:19-slim as deploy

WORKDIR /app
RUN rm -rf ./*
COPY --from=build /app/package.json .
COPY --from=build /app/build .

RUN npm i

CMD ["node", "index.js"]