const router = require('express').Router();
const { getAllThoughts, createThought, getThoughtById, updateThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controller');

// all
router
  .route('/')
  .get(getAllThoughts)

// single thought
router.route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought);

// id userId params
router
  .route('/:userId')
  .post(createThought)

// user id and thought
router.route('/:userId/:thoughtId')
  .delete(removeThought)
  .put(addReaction);

// remove reaction
router.route('/:userId/:thoughtId/:reactionId')
  .delete(removeReaction)

module.exports = router;