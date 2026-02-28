export function validateGame(req, res, next) {
  const { title, price, platform, inStock } = req.body;

  if(!title || typeof title !== "string"){
    return res.status(400).json({ error: "Title inválido" });
  }

  if(price === undefined || typeof price !== "number" || price < 0){
    return res.status(400).json({ error: "Price inválido" });
  }

  if(!platform){
    return res.status(400).json({ error: "Platform é obrigatória" });
  }

  if(inStock === undefined || typeof inStock !== "boolean"){
    return res.status(400).json({ error: "inStock deve ser boolean" });
  }

  next();
}

export function logGetGames(req, res, next) {
  console.log("Buscando todos os games...");
  next();
}

export function validateUpdateGame(req, res, next){
  const { title, price, platform, inStock } = req.body;

  if(title !== undefined &&  typeof title !== "string"){
    return res.status(400).json({ error: "Title inválido" });
  }

  if(price !== undefined && (typeof price !== "number" || price < 0)){
    return res.status(400).json({ error: "Price inválido" });
  }

  if(platform !== undefined && typeof platform !== "string"){
    return res.status(400).json({ error: "Platform é obrigatória" });
  }

  if(inStock !== undefined && typeof inStock !== "boolean"){
    return res.status(400).json({ error: "inStock deve ser boolean" });
  }

  next();
}