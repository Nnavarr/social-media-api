const { Thought } = require('../models');

const thoughtController = {
  // get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .then(dbThoughtsData => res.json(dbThoughtsData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      })
  },

  // create new thought
  createThought({ params, body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: _id }},
          { new: true }
        );
      })
      .then(dbThoughtsData => {
        if (!dbThoughtsData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbThoughtsData);
      })
      .catch(err => res.status(400).json(err));
  },

  // get thought by specific id
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .then(dbThoughtsData => {
        if (!dbThoughtsData) {
          res.status(400).json({ message: 'No thought with this id found' });
          return;
        }
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      })
  }

  // // delete thought by id
  // removeThought({ params }, res) {
  //   Thought.findOneAndDelete({ _id: params.thoughtId })
  //     .then(deletedThought => {
  //       if (!deletedThought) {
  //         return res.status(404).json({ message: 'No thought found with this id' });
  //       }
  //       return User.findOneAndUpdate(
  //         { _id: params:}
  //       )
  //     })
  // }
}

module.exports = thoughtController;