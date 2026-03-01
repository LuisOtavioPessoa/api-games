import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes/gameRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

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
app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log("Acessar http://localhost:3000/games");
    console.log(`O servidor está rodando na porta ${PORT}`);
});