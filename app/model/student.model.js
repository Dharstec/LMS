module.exports = (mongoose) => {
    var schema = mongoose.Schema(
      {
        phone_no: String,
        email: String,
        gender: String,
        dob:String,
        blood_group:String,
        community:String,
        religion:String,
        language:String,
        aadhar_no:String
      },
      { timestamps: true }
    );
    
    const Student = mongoose.model("student", schema);
    return Student;
  };