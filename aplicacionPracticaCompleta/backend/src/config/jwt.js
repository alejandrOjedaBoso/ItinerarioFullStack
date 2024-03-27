import { expressjwt } from "express-jwt";
import jwt from "jsonwebtoken";

const secret = "roitygh584ghvgfsj";
const algorithms = ["HS256"];
const authenticate = "/api/users/authenticate";

//Poteccion jwt para la api
export const checkCredentials = expressjwt({
  secret: secret,
  algorithms: algorithms,
}).unless({ path: [authenticate] });

//generacion token
export function generateToken(user) {
  const payload = {
    username: user,
  };

  //Genera y firma el token con la clave secreta
  try {
    const token = jwt.sign(payload, secret, { expiresIn: "1m" });
    return token;
  } catch (err) {
    console.log(err);
  }
}

//Comprobar si la sesion sigue activa
export function checkToken(token) {
  try {
    const decoded = jwt.verify(token, secret);
    if (decoded && jwt.exp && Date.now() / 1000 < decoded.exp) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
}