import express , { Request, Response} from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB  from "./Configuration/DatabaseConfig";
import userRoutes from "./Routers/UserRouters";
import homePageImageRoutes from "./Routers/HomePageImageRouters";
import tourRoutes from "./Routers/TourRouters";
import serviceRoutes from "./Routers/ServiceRouters";

dotenv.config();

const app = express();

// middlewares 
app.use(cors());
app.use(express.json());

// Apis configuration
app.use("/api/admin", userRoutes);
app.use("/api/homepage-images", homePageImageRoutes);
app.use("/api/tours", tourRoutes);
app.use("/api/services", serviceRoutes);


// basic test  route 
app.get("/", (req:Request, res: Response) => {
    res.send("Server is running")
});


const PORT  = process.env.PORT || 5000;

// connect to database
app.listen(PORT, async () => {
    await connectDB();
    console.log("database is  connected successfully");
    console.log(`Server is running on port ${PORT}`);
})