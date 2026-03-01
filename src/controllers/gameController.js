import Game from "../models/gameModel.js";

// Criar game

export async function createGame(req, res, next){
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
    next(error);
  }
}

// Listar todos os games + Filtro por platform(opcional) + Ordenação por price(opcional)

export async function getAllGames(req, res, next){
  try{

    const { platform, sort, order } = req.query;

    const filter = {};
    const sortOptions = {};

    if(platform){
      filter.platform = { $regex: platform, $options: "i" };
    }

    if(sort){

      if(sort !== "price"){
        const error = new Error( "Campo de ordenação inválido. Apenas 'price' é permitido.");
        error.status = 400;
        return next(error);
      }

      sortOptions.price = order === "desc" ? -1 : 1;
    }

    const games = await Game
      .find(filter)
      .sort(sortOptions);

    return res.status(200).json(games);
  } catch (error) {
    next(error);
  }
}

// Atualizar game por ID

export async function updateGameById(req, res, next){
  try{
    const { id } = req.params;

    const updateGame = await Game.findByIdAndUpdate(
      id,
      req.body,
      {new: true, runValidators: true}
    );

    if (!updateGame) {
      const error = new Error("Game não encontrado.");
      error.status = 404;
      return next(error);
    }

    return res.status(200).json(updateGame);
  } catch (error){
    next(error);
  }
}

// Deletar game por ID

  export async function deleteGameById(req, res, next){
    try{
      const { id } = req.params;

      const deleteGame = await Game.findByIdAndDelete(id);

      if (!deleteGame) {
      const error = new Error("Game não encontrado.");
      error.status = 404;
      return next(error);
    }

    return res.status(200).json({ message: "Game deletado com sucesso." });
    } catch(error){
      return next(error);
    }
  };

  // Buscar game por Id

  export async function getGameById(req, res, next){
  try{
    const { id } = req.params;

    const game = await Game.findById(id);

    if(!game){
      const error = new Error("Game não encontrado.");
      error.status = 404;
      return next(error);
    }

    return res.status(200).json(game);
  } catch (error) {
    return next(error);
  }
}
