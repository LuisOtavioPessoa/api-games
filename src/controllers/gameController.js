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

// Atualizar game por ID

export async function updateGameById(req, res){
  try{
    const { id } = req.params;

    const updateGame = await Game.findByIdAndUpdate(
      id,
      req.body,
      {new: true, runValidators: true}
    );

    if (!updateGame) {
      return res.status(404).json({ error: "Game não encontrado" });
    }

    return res.status(200).json(updateGame);
  } catch (error){
    return res.status(400).json({ error: error.message });
  }
}

// Deletar game por ID

  export async function deleteGameById(req, res){
    try{
      const { id } = req.params;

      const deleteGame = await Game.findByIdAndDelete(id);

      if (!deleteGame) {
      return res.status(404).json({ error: "Game não encontrado" });
    }

    return res.status(200).json({ message: "Game deletado com sucesso" });
    } catch(error){
      return res.status(400).json({ error: error.message });
    }
  };
