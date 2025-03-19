import express from "express";
import tickets from "./ticketsRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("ticket-control-system")) 
    app.use(express.json(), tickets);
};

export default routes;