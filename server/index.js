import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from './routes/kpi.routes.js';
import productRoutes from './routes/product.routes.js'
import transactionRoutes from './routes/transaction.routes.js';
import Transaction from "./models/Transaction.model.js";
import {transactions} from './data/data.js'
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/kpi',kpiRoutes)
app.use('/product',productRoutes);
app.use('/transaction',transactionRoutes);
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGODB_URI, {
    useMongoClient: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME ONLY OR AS NEEDED */
    await mongoose.connection.db.dropDatabase();
    KPI.insertMany(kpis);
    //Product.insertMany(products);
   //Transaction.insertMany(transactions);
  })
  .catch((error) => console.log(`${error} did not connect`));