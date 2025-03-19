import Ticket from "../models/Ticket.js"

class TicketController {
    static async ticketsList (req, res) {
        try{
            const ticketList = await Ticket.find({})
            res.status(200).json(ticketList);
        } catch(erro) {
            res.status(500).json({
                message: `${erro.message} - failed to find tickets`
            });
        }
    };

    static async ticketsListById (req, res) {
        try{
            const id = req.params.id
            const ticketFound = await Ticket.findById(id);
            res.status(200).json(ticketFound);
        } catch(erro) {
            res.status(500).json({
                message: `${erro.message} - failed to find tickets`
            });
        }
    };

    static async registerTicket(req, res){
        const newTicket = req.body;
        try {
            const ticketCreated = await Ticket.create(newTicket);
            res.status(201).json({ message: "created with success", ticket: ticketCreated });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - failed to register new` });
        }
    };

    static async updateTicket(req, res){
        try {
            const id = req.params.id;
            await Ticket.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "ticket updated" });
          } catch (erro) {
            res.status(500).json({ message: `${erro.message} - failed to update` });
          }
    }

    static async deleteTicket(req, res) {
        try {
            const id = req.params.id;
            await Ticket.findByIdAndDelete(id);
            res.status(200).json({ message: "ticket deleted with success" });
          } catch (erro) {
            res.status(500).json({ message: `${erro.message} - failed to delete` });
          }
    }
}

export default TicketController;