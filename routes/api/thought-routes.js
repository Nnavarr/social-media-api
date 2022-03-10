const router = require('express').Router();
const { getAllThoughts, createThought, getThoughtById } = require('../../controllers/thought-controller');

// all
router
  .route('/')
  .get(getAllThoughts)

// id specific
router
  .route('/:userId').post(createThought)

module.exports = router;
