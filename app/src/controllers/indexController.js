
export const index = (req, res, next) => {
  try {
    return res.render("index", { title: "Express" });
  } catch (error) {
    logger.error(`Error in index controller: ${error.message}`, error.stack);
    return next(error);
  }
};



