const mongoose = require("mongoose");

const Ticket = require("../models/Ticket");
const User = require("../models/User");


// CREATE TICKET
const createTicket = async (req, res, next) => {
    try {
        const {
            title,
            description,
            priority
        } = req.body;

        if (!title || !description) {
            return res.status(400).json({
                message: "Title and description are required"
            });
        }

        const ticket = await Ticket.create({
            title,
            description,
            priority,
            createdBy: req.user.id
        });

        res.status(201).json({
            message: "Ticket created successfully",
            ticket
        });
    } catch (error) {
        next(error);
    }
};


// GET ALL TICKETS
const getTickets = async (req, res, next) => {
    try {
        let filter = {};

        // Customer → own tickets
        if (req.user.role === "CUSTOMER") {
            filter.createdBy = req.user.id;
        }

        // Agent → assigned tickets
        if (req.user.role === "SUPPORT_AGENT") {
            filter.assignedTo = req.user.id;
        }

        // Filters
        if (req.query.status) {
            filter.status = req.query.status;
        }

        if (req.query.priority) {
            filter.priority = req.query.priority;
        }

        // Pagination
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;

        const skip = (page - 1) * limit;

        const tickets = await Ticket.find(filter)
            .populate(
                "createdBy",
                "name email role"
            )
            .populate(
                "assignedTo",
                "name email role"
            )
            .sort({
                createdAt: -1
            })
            .skip(skip)
            .limit(limit);

        const total =
            await Ticket.countDocuments(filter);

        res.status(200).json({
            page,
            limit,
            total,
            totalPages:
                Math.ceil(total / limit),
            tickets
        });
    } catch (error) {
        next(error);
    }
};


// GET SINGLE TICKET
const getTicketById = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid ticket ID"
            });
        }

        const ticket = await Ticket.findById(id)
            .populate(
                "createdBy",
                "name email role"
            )
            .populate(
                "assignedTo",
                "name email role"
            );

        if (!ticket) {
            return res.status(404).json({
                message: "Ticket not found"
            });
        }

        // Customer → own ticket only
        if (
            req.user.role === "CUSTOMER" &&
            ticket.createdBy._id.toString() !==
                req.user.id
        ) {
            return res.status(403).json({
                message:
                    "You are not authorized to view this ticket"
            });
        }

        // Agent → assigned ticket only
        if (
            req.user.role === "SUPPORT_AGENT" &&
            (
                !ticket.assignedTo ||
                ticket.assignedTo._id.toString() !==
                    req.user.id
            )
        ) {
            return res.status(403).json({
                message:
                    "You are not authorized to view this ticket"
            });
        }

        res.status(200).json({
            ticket
        });
    } catch (error) {
        next(error);
    }
};


// UPDATE TICKET STATUS
const updateTicketStatus = async (
    req,
    res,
    next
) => {
    try {
        const { status } = req.body;

        const ticket =
            await Ticket.findById(req.params.id);

        if (!ticket) {
            return res.status(404).json({
                message: "Ticket not found"
            });
        }

        // Agent can update only assigned tickets
        if (
            req.user.role === "SUPPORT_AGENT" &&
            (
                !ticket.assignedTo ||
                ticket.assignedTo.toString() !==
                    req.user.id
            )
        ) {
            return res.status(403).json({
                message:
                    "You are not assigned to this ticket"
            });
        }

        const validTransitions = {
            OPEN: ["IN_PROGRESS"],

            IN_PROGRESS: ["RESOLVED"],

            RESOLVED: ["CLOSED"],

            CLOSED: []
        };

        if (
            !validTransitions[ticket.status] ||
            !validTransitions[ticket.status].includes(status)
        ) {
            return res.status(400).json({
                message:
                    `Cannot change status from ${ticket.status} to ${status}`
            });
        }

        ticket.status = status;

        await ticket.save();

        res.status(200).json({
            message:
                "Ticket status updated successfully",
            ticket
        });
    } catch (error) {
        next(error);
    }
};


// ASSIGN TICKET
const assignTicket = async (
    req,
    res,
    next
) => {
    try {
        const {
            agentId
        } = req.body;

        if (
            !mongoose.Types.ObjectId.isValid(agentId)
        ) {
            return res.status(400).json({
                message: "Invalid agent ID"
            });
        }

        const ticket =
            await Ticket.findById(req.params.id);

        if (!ticket) {
            return res.status(404).json({
                message: "Ticket not found"
            });
        }

        const agent =
            await User.findOne({
                _id: agentId,
                role: "SUPPORT_AGENT"
            });

        if (!agent) {
            return res.status(400).json({
                message:
                    "Invalid support agent"
            });
        }

        ticket.assignedTo = agent._id;

        await ticket.save();

        res.status(200).json({
            message:
                "Ticket assigned successfully",
            ticket
        });
    } catch (error) {
        next(error);
    }
};


// DELETE TICKET
const deleteTicket = async (
    req,
    res,
    next
) => {
    try {
        const ticket =
            await Ticket.findById(req.params.id);

        if (!ticket) {
            return res.status(404).json({
                message: "Ticket not found"
            });
        }

        await ticket.deleteOne();

        res.status(200).json({
            message:
                "Ticket deleted successfully"
        });
    } catch (error) {
        next(error);
    }
};


module.exports = {
    createTicket,
    getTickets,
    getTicketById,
    updateTicketStatus,
    assignTicket,
    deleteTicket
};