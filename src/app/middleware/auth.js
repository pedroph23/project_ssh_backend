const admin = require("firebase-admin");
module.exports = async (req, res, next) => {
  if(!req.headers.authorization){
    return res.status(401).json({ error: "You have not authorization" });
  }
  const idToken = req.headers.authorization.split("Bearer ")[1];
  admin
    .auth()
    .verifyIdToken(idToken)
    .then(function(decodedToken) {
     // var uid = decodedToken.uid; //utilizar futramente uma ROLE
      // console.log(uid);
      next();
    })
    .catch(function(error) {
      return res.status(401).json({ error: "Token not found" });
    });
};
