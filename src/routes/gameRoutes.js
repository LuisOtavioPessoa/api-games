import { Router } from "express";
import { createGame, getAllGames } from "../controllers/gameController.js";
import { validateGame, logGetGames } from "../middlewares/middleware.js";

const route = Router();

route.get("/games", logGetGames,  getAllGames);
route.post("/games", validateGame , createGame );

export default route;

