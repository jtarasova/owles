// eslint-disable-next-line import/prefer-default-export
export const pathMiddleware = (req, res, next) => {
  res.locals.url = req.url;
  next();
};
