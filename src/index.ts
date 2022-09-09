import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import morgan from "morgan";

import { globalRouter } from "./router";
import { errorHandler, NotFoundError } from "./common";
import CONFIG from "./config";

const app = express();
// app.set("trust proxy", true);
app.use(json());
app.use(morgan("dev"));

app.use("/api", globalRouter);

app.all("*", async () => {
  throw new NotFoundError();
});
app.use(errorHandler);

app.listen(CONFIG.PORT, () => console.log(`Up on ${CONFIG.PORT}`));
