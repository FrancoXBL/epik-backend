import express from "express";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";
import homeRoutes from "./routes/home.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import saleHistoryRoutes from "./routes/saleHistory.routes.js"

const app = express();

app.use(morgan("dev"));

app.use(express.json())

app.use("/api", authRoutes);
app.use("/api", homeRoutes);
app.use("/api", adminRoutes);
app.use("/api", saleHistoryRoutes);

export default app;
