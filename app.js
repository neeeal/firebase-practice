const express = require('express');
const initRoutes = require("./routes");
const cors = require("cors");
const fb = require('./config/fb.js');
const app = express();
const PORT = 3000;

app.use(
    cors({
      origin: function (origin, callback) {
        return callback(null, true);
      },
      optionsSuccessStatus: 200,
      credentials: true,
    }),
  );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true"); // Allow credentials (cookies, etc.)
  
    // Pass to next layer of middleware
    next();
  });

// const authenticateUser = async (req, res, next) => {
//     const idToken = req.headers.authorization;
//     try {
//       const decodedToken = await admin.auth().verifyIdToken(idToken);
//       req.user = decodedToken; // Attach user data to request object
//       next();
//     } catch (error) {
//       res.status(401).json({ error: 'Unauthorized' });
//     }
//   };
//   // Example API endpoint using the middleware
//   app.get('/api/auth/some-protected-endpoint', authenticateUser, (req, res) => {
//     // Access user data from req.user
//     const userUID = req.user.uid;
//     // Your API logic here

//     res.status(200).send({
//         message: 'Access granted'
//     })
//   });

// app.get('/', (req, res)=>{
//     const {name} = req.body;

//     res.status(200).send(`Welcome ${name}`);
// })

initRoutes(app)

app.listen(PORT, (error)=>{
    if(!error){
        console.log(`Server listening on ${PORT}`);
    } else {
        console.error('Error starting server', error);
    }
})