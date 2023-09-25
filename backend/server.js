import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import 'dotenv/config'
import morgan from 'morgan'
import connectionToDB from "./config/connectDB.js";
import MongoSanitize from 'express-mongo-sanitize'
import { morganMiddleware, systemLogs } from "./utils/Logger.js";
// import authRoutes from "./routes/authRoutes.js";
import productRouter from "./routes/productRoutes.js"

// const router=require("./routes/userRoute.js")
// const busRoute=require("./routes/busroute.js")
// const bookingsRoute=require('./routes/bookingsRoute.js')
// import { errorHandler,notFound } from './middleware/errorMiddleware.js'
// const dbConnect=require("./config/connect.js")
const app=express()
await connectionToDB()

app.use(cors())


if(process.env.NODE_ENV === 'development'){
app.use(morgan('dev'))
}


app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cookieParser())
app.use(MongoSanitize())


app.use(morganMiddleware);



app.get('/api/', function(req, res) {
    res.json({hi:"hello world"})
})
app.use("/api/products", productRouter);
// app.use("/api/v1/auth", authRoutes);

// app.use(errorHandler)
// app.use(notFound)

const PORT = process.env.PORT || 1997;

app.listen(PORT,()=>{
    console.log(`in ${PORT}`)
    systemLogs.info(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
	);
})


