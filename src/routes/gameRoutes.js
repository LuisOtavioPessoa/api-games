import { Router } from "express";
import { createGame, getAllGames, updateGameById, deleteGameById } from "../controllers/gameController.js";
import { validateGame, validateUpdateGame, logGetGames } from "../middlewares/middleware.js";

const route = Router();

route.get("/games", logGetGames,  getAllGames);
route.post("/games", validateGame , createGame );
route.put("/games/:id", validateUpdateGame ,updateGameById);
route.delete("/games/:id", deleteGameById )

export default route;

