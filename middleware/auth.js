const jwt = require("jsonwebtoken");
const responseFormatter = require("../responses/responses");

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization.split(" ");
    // console.log(authHeader);
    if (!(authHeader[0] === "bearer" || authHeader[0] === "Bearer")) {
      return responseFormatter.error(
        res,
        null,
        "bearer token must be provided",
        401
      );
    }

    const token = authHeader[1];
    jwt.verify(token, JWT_SECRET, function (err, decoded) {
      if (err) {
        return responseFormatter.error(res, null, err.message, 401);
      }
      req.user = decoded;
      return next();
    });
  } catch (error) {
    return responseFormatter.error(res, null, error.message, 500);
  }
};
