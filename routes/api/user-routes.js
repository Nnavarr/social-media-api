const router = require('express').Router();

const { getAllUsers, createUser, updateUser, deleteUser} = require('../../controllers/user-controller');

// assign routes
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// specific id routes /api/users/:id
router
  .route('/:id')
  .put(updateUser)
  .delete(deleteUser);

// export router
module.exports = router;