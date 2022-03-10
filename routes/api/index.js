const router = require('express').Router();
const userRoutes = require('./user-routes');

// add prefix to associated routes
router.use('/users', userRoutes);

// export router
module.exports = router;