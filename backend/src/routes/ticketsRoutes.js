import express from "express";
import TicketController from "../controllers/ticketController.js";

const routes = express.Router();

routes.get("/tickets", TicketController.ticketsList);
routes.get("/tickets/:id", TicketController.ticketsListById);
routes.post("/tickets", TicketController.registerTicket);
routes.put("/tickets/:id", TicketController.updateTicket);
routes.delete("/tickets/:id", TicketController.deleteTicket);

export default routes;