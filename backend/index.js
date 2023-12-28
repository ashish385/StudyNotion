const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payment");
const courseRoutes = require("./routes/Course");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require('./config/cloudinary');
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const PORT = process.env.PORT || 4000;

// database connect
database.connect();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    // origin: "https://ed-tech-client-rho.vercel.app/",
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir:"/temp/"
    })
)

// cloudinary connection
cloudinaryConnect();

// routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/course", courseRoutes);

// ---------------------------Deployment-------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  // def routes
  app.get("/", (req, res) => {
    return res.json({
      success: true,
      message: "Your server is up and running....",
    });
  });
}
// ---------------------------Deployment-------------------------------



app.listen(PORT, () => {
    console.log(`Server is running at port no. ${PORT}`);
})

