const express = require("express");

const {
    createTicket,
    getTickets,
    getTicketById,
    updateTicketStatus,
    assignTicket,
    deleteTicket
} = require("../controllers/ticketController");

const authMiddleware =
    require("../middleware/authMiddleware");

const authorizeRoles =
    require("../middleware/roleMiddleware");

const router = express.Router();


// CREATE TICKET
router.post(
    "/",
    authMiddleware,
    authorizeRoles("CUSTOMER"),
    createTicket
);


// GET TICKETS
router.get(
    "/",
    authMiddleware,
    getTickets
);


// GET SINGLE TICKET
router.get(
    "/:id",
    authMiddleware,
    getTicketById
);


// UPDATE STATUS
router.patch(
    "/:id/status",
    authMiddleware,
    authorizeRoles(
        "SUPPORT_AGENT",
        "ADMIN"
    ),
    updateTicketStatus
);


// ASSIGN TICKET
router.patch(
    "/:id/assign",
    authMiddleware,
    authorizeRoles("ADMIN"),
    assignTicket
);


// DELETE TICKET
router.delete(
    "/:id",
    authMiddleware,
    authorizeRoles("ADMIN"),
    deleteTicket
);


module.exports = router;