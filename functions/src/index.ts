import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import express from "express";
import router from "./router";


const app = express();

app.use((request, response, next) => {
  logger.info("Request URL:", request.originalUrl, {structuredData: true});
  logger.info("Request Method:", request.method, {structuredData: true});
  next();
});

app.use("/", router);


export const fleetAPI = onRequest(app);

