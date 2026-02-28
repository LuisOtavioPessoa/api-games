import Game from "../models/gameModel.js";

// Criar game

export async function createGame(req, res){
  try{
    const { title, price, platform, inStock } = req.body;

    const newGame = await Game.create({
      title,
      price,
      platform,
      inStock,
    });

    return res.status(201).json(newGame);
  } catch (error){
    return res.status(400).json({ error: error.message });
  }
}

// Listar todos

export async function getAllGames(req, res){
  try{
    const games = await Game.find();
    return res.status(200).json(games);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}