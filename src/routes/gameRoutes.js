import { Router } from "express";
import { createGame, getAllGames, updateGameById, deleteGameById, getGameById} from "../controllers/gameController.js";
import { validateObjectId, validateGame, validateUpdateGame, logGetGames, logGetGameById } from "../middlewares/middleware.js";

const route = Router();

route.get("/games", logGetGames,  getAllGames);
route.get("/games/:id", validateObjectId, logGetGameById , getGameById );
route.post("/games", validateGame , createGame );
route.put("/games/:id", validateObjectId, validateUpdateGame ,updateGameById);
route.delete("/games/:id", validateObjectId , deleteGameById );

export default route;

