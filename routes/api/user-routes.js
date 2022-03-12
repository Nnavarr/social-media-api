const router = require('express').Router();

const { getAllUsers, createUser, updateUser, deleteUser, addFriend, removeFriend } = require('../../controllers/user-controller');

// assign routes
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// specific id routes /api/users/:id
router
  .route('/:id')
  .put(updateUser)
  .delete(deleteUser)
  .get(addFriend);

// add friends
router
  .route('/:id/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend)

// export router
module.exports = router;