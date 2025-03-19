import express from "express";
import connectInDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js"

const connection = await connectInDataBase();

connection.on("error", (erro) => {
    console.error("Connection error", erro);
});

connection.once("open", () => {
    console.log("Connection made with success!")
})

const app = express();
routes(app);

export default app;

