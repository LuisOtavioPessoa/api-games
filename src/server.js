import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes/gameRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import swaggerUi from "swagger-ui-express";
import fs from "fs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const swaggerDocument = JSON.parse(
  fs.readFileSync("./src/docs/swagger.json", "utf-8")
);

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Conectado ao MongoDB`);

    }catch(error){
        console.error(`Deu erro ao conectar com o MongoDB`, error);
        process.exit(1);
    }
};

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        message: "Games API funcionando",
        endpoints: {
            games: "/games",
            docs: "/docs/swagger",
        }
    });
});
app.use("/docs/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
    
    if (process.env.NODE_ENV !== "production") {
    console.log(`Games: http://localhost:${PORT}/games`);
    console.log(`Swagger: http://localhost:${PORT}/docs/swagger`);
  }
});