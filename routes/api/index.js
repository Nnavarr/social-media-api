const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// add prefix to associated routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

// export router
module.exports = router;