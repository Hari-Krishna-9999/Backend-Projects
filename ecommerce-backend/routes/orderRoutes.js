const express = require("express");

const {
    createOrder,
    getMyOrders,
    getOrderById,
    getAllOrders,
    updateOrderStatus
} = require("../controllers/orderController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    createOrder
);

router.get(
    "/my-orders",
    authMiddleware,
    getMyOrders
);

router.get(
    "/",
    authMiddleware,
    roleMiddleware("ADMIN"),
    getAllOrders
);

router.get(
    "/:id",
    authMiddleware,
    getOrderById
);

router.put(
    "/:id/status",
    authMiddleware,
    roleMiddleware("ADMIN"),
    updateOrderStatus
);

module.exports = router;