import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    requester: { type: String, required: true },
    assignee: { type: String, default: null },
    status: { 
      type: String, 
      enum: ["Aberto", "Em Andamento", "Resolvido", "Fechado"], 
      default: "Aberto" 
    },
    priority: {
        type: String,
        enum: ["Alta", "Média", "Baixa"]
    },
    category: { 
        type: String, 
        enum: ["Suporte Técnico", "Manutenção", "Entrega/Substituição"], 
        required: true 
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    closed_at: { type: Date, default: null }
});

const ticket = mongoose.model("tickets", ticketSchema);

export default ticket;

