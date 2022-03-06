const { Schema, model } = require('mongoose');

// create user model
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/.+\@.+\..+/, 'Email must be valid']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJson: {
      virtuals: true,
      getters: true
    }
  }
);

// virtual of friendscount
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length
});

// create model
const User = model('User', UserSchema);

// export model
module.exports = User;

