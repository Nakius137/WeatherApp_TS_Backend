import { decodedToken } from '@/types/types';
import { verify} from 'jsonwebtoken'
import jwkToPem from 'jwk-to-pem'

const auth = (req, res ,next) => {
 const token = req.headers.authorization
  const pem = jwkToPem({
  "alg": process.env.ALGORITHM,
  "e": process.env.E,
  "kid": process.env.KEY_ID,
  //@ts-ignore
  "kty": process.env.KEY_TYPE,
  "n": process.env.N,
  "use": process.env.USE
  })
 const verifiedUsername = verify(token, pem, { algorithms: ['RS256'] }, function(err, decodedToken: decodedToken) {
   return decodedToken.username
})
  req.verifiedUsername = verifiedUsername
  next()
};


export default auth;