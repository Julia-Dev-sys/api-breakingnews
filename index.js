import express from 'express';
import connectDataBase  from './src/database/db.js';
import dotenv from "dotenv";
import cors from "cors";

import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";
import newsRoute from "./src/routes/news.route.js"
import swaggerRoute from "./src/routes/swagger.route.cjs";



dotenv.config();


const port = process.env.PORT || 3000;
const app = express();


connectDataBase();

app.use(cors());
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/news",newsRoute);
app.use("/doc",swaggerRoute);

app.listen(port,() => console.log(`Servidor rodando na porta ${port}`));