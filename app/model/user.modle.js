var Schema = require('mongoose').Schema;
var usersSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

// var usersModel = db.model('users', usersSchema);
// usersSchema.index({username: 1 });
// usersSchema.index({email: 1 });
// usersSchema.index({username: 1, email: 1 });
// module.exports = usersModel;


module.exports = (mongoose) => {
    var schema = mongoose.Schema(
      {
        username: {
            type: String,
            required: true,
            // index: true,
            // unique: true
        },
        email: {
            type: String,
            required: true,
            // index: true,
            // unique: true
        },
        created: {
            type: Date,
            default: Date.now
        }
      },
      { timestamps: true }
    );
    schema.index({username: 1, email: -1}, {unique: true})
    schema.index({username: 1})
    schema.index({email: 1})
    
    const User = mongoose.model("user", schema);
    

    return User;
  };