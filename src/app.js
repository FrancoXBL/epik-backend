import express from "express";
import morgan from "morgan";
import cors from 'cors'

import homeRoutes from "./routes/home.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import saleHistoryRoutes from "./routes/saleHistory.routes.js"

const app = express();

app.use(cors())
app.use(morgan("dev"));
app.use(express.json())
app.use("/api", homeRoutes);
app.use("/api", adminRoutes);
app.use("/api", saleHistoryRoutes);

export default app;
