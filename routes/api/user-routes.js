const router = require('express').Router();

const { getAllUsers, createUser } = require('../../controllers/user-controller');

// assign routes
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);
  
// export router
module.exports = router;