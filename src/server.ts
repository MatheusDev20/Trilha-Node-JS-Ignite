import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import routes from "./routes/index";
import { specificationRoutes } from "./routes/specification.routes";

const app = express();

app.use(express.json());

app.use(routes);
app.listen(3333, () => {
    console.log("Running");
});
