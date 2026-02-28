import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes/gameRoutes.js";

dotenv.config();

const app = express();
const PORT = 3000;

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Conectado ao MongoDB`);

    }catch(error){
        console.log(`Deu erro ao conectar com o MongoDB`, error);
    }
};

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log("Acessar http://localhost:3000/games");
    console.log(`O servidor está rodando na porta ${PORT}`);
});