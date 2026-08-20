const authorize = (...roles) => {

    const allowedRoles = roles.map(role => role.toLowerCase());

    return (req, res, next) => {

        if (!req.user || !req.user.role) {
            return res.status(401).json({
                success: false,
                message: "Authentication required."
            });
        }

        const userRole = req.user.role.toLowerCase();

        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({
                success: false,
                message: "Access denied. Insufficient permissions."
            });
        }

        next();
    };
};

module.exports = authorize;