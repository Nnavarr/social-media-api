const router = require('express').Router();

const { getAllUsers, createUser, updateUser } = require('../../controllers/user-controller');

// assign routes
router
  .route('/')
  .get(getAllUsers)
  .post(createUser)

// specific id routes /api/users/:id
router
  .route('/:id')
  .put(updateUser);


// export router
module.exports = router;