import 'dotenv/config';
import exp from 'express'
import mongoose, {connect} from "mongoose"
import { UserApp } from './APIs/UserAPI.js';
import { authorRoute } from './APIs/AuthorAPI.js';
import { commonRouter } from './APIs/CommonAPI.js';
import cors from "cors"
import cookieParser from "cookie-parser"
//create http server
const app=exp();
//add body parser middleware
app.use (exp.json())
//add cors middleware
const allowedFrontend = process.env.FRONTEND_URL; // can be comma-separated
app.use(cors({
  origin: function (origin, callback) {
    // allow server-to-server or tools with no origin
    if (!origin) return callback(null, true);
    // allow local development
    if (/^http:\/\/localhost:\d+$/.test(origin)) return callback(null, true);
    // allow single or comma-separated allowed frontends from env
    if (allowedFrontend) {
      const allowed = allowedFrontend.split(',').map(s => s.trim()).filter(Boolean);
      if (allowed.includes(origin)) return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  methods:["GET","POST","DELETE","PUT","PATCH"],
  credentials: true
}))

  // parse cookies
  app.use(cookieParser());

// simple request logger for debugging
app.use((req, res, next) => {
  console.log(new Date().toISOString(), req.method, req.originalUrl);
  next();
});
//forward req
app.use("/user-api",UserApp)
app.use("/author-api",authorRoute)
app.use("/common-api",commonRouter)


//connect to db
function getMongoUri() {
  return process.env.DB_URL || process.env.MONGODB_URI || process.env.MONGO_URI;
}

async function connectDB() {
    try {
    const mongoUri = getMongoUri();
    if (!mongoUri) {
      throw new Error("Missing MongoDB connection string. Set DB_URL, MONGODB_URI, or MONGO_URI.");
    }

    if (process.env.NODE_ENV === "production" && /localhost|127\.0\.0\.1/i.test(mongoUri)) {
      throw new Error("Production MongoDB URI is pointing to localhost. Set DB_URL or MONGODB_URI to a hosted MongoDB Atlas connection string.");
    }

    await connect(mongoUri);
        console.log("connected to db successfully")
        
        //assign port
    const port=process.env.PORT || 5000;
    app.listen(port,()=>console.log(`app listening on port ${port}`))
    }catch(err){
        console.log("err in connection to db:" , err)
    }
    
}
connectDB()
//add error handling middleware
app.use((err, req, res, next) => {
  console.error(err && err.stack ? err.stack : err);
  // If error carries an explicit status (thrown from services), honor it
  if (err && err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  res.status(500).json({
    message: "Internal Server Error",
  });
});