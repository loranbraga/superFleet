import {onRequest} from "firebase-functions/v2/https";
import {onDocumentCreated} from "firebase-functions/v2/firestore";
import * as logger from "firebase-functions/logger";
import express from "express";
import router from "./router";
import * as admin from "firebase-admin";
import * as fireorm from "fireorm";
import {incrementIdTaskFunction} from "@events/task/incrementIdTask";

const app = express();

app.use((request, response, next) => {
  logger.info("Request URL:", request.originalUrl);
  logger.info("Request Method:", request.method);
  next();
});

app.use("/", router);

admin.initializeApp();


const firestore = admin.firestore();
fireorm.initialize(firestore);

export const fleetAPI = onRequest(app);

export const incrementIdTask = onDocumentCreated("/tasks/{documentId}", incrementIdTaskFunction);

