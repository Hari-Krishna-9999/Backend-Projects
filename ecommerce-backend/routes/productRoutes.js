const express = require("express");

const {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

// Public product viewing
router.get("/", getProducts);

router.get("/:id", getProduct);

// Admin-only operations
router.post(
    "/",
    authMiddleware,
    roleMiddleware("ADMIN"),
    createProduct
);

router.put(
    "/:id",
    authMiddleware,
    roleMiddleware("ADMIN"),
    updateProduct
);

router.delete(
    "/:id",
    authMiddleware,
    roleMiddleware("ADMIN"),
    deleteProduct
);

module.exports = router;