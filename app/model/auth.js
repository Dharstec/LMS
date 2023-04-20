module.exports = (mongoose) => {
    var schema = mongoose.Schema(
      {
        email: String,
        password: String,
        flag: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
   // schema.plugin(mongoosePaginate);
  
    const Auth = mongoose.model("auth", schema);
    return Auth;
  };