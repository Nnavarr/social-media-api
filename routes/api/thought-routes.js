const router = require('express').Router();
const { getAllThoughts, createThought, getThoughtById, updateThought, removeThought} = require('../../controllers/thought-controller');

// all
router
  .route('/')
  .get(getAllThoughts)

// single thought
router.route('/:thoughtId')
  .get(getThoughtById)

// id userId params
router
  .route('/:userId')
  .post(createThought)

// user id and thought
router.route('/:userId/:thoughtId')
  .delete(removeThought)
  .put(updateThought);

module.exports = router;