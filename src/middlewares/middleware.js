import mongoose from "mongoose";

export function validateObjectId(req, res, next){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    const error = new Error ("ID Inválido");
    error.status = 400;
    return next(error);
  }
  next();
}

export function validateGame(req, res, next) {
  const { title, price, platform, inStock } = req.body;

  if(!title || typeof title !== "string"){
    const error = new Error ("Title inválido");
    error.status = 400;
    return next(error);
  }

  if(price === undefined || typeof price !== "number" || price < 0){
    const error = new Error ("Price inválido");
    error.status = 400;
    return next(error);
  }

  if(!platform){
    const error = new Error ("Platform é obrigatória");
    error.status = 400;
    return next(error);
  }

  if(inStock === undefined || typeof inStock !== "boolean"){
    const error = new Error ("inStock deve ser boolean");
    error.status = 400;
    return next(error);
  }

  next();
}

export function logGetGames(req, res, next) {
  console.log("Buscando todos os games...");
  next();
}

export function logGetGameById(req, res, next) {
  console.log(`Buscando game com ID: ${req.params.id}`);
  next();
}

export function validateUpdateGame(req, res, next){
  const { title, price, platform, inStock } = req.body;

  if(title !== undefined &&  typeof title !== "string"){
    const error = new Error ("Title inválido");
    error.status = 400;
    return next(error);
  }

  if(price !== undefined && (typeof price !== "number" || price < 0)){
    const error = new Error ("Price inválido");
    error.status = 400;
    return next(error);
  }

  if(platform !== undefined && typeof platform !== "string"){
    const error = new Error ("Platform é obrigatória");
    error.status = 400;
    return next(error);
  }

  if(inStock !== undefined && typeof inStock !== "boolean"){
    const error = new Error ("inStock deve ser boolean");
    error.status = 400;
    return next(error);
  }

  next();
}