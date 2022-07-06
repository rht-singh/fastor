const enquiry = require("../../model/enquiry");

/**
 *
 * @param {*} req name, course_interested, email
 * @param {*} res { success: true, message: "Enquiry added successfully"
 */
exports.addEnquiry = async (req, res) => {
  try {
    // get name, course_interested, email in body
    const { name, course_interested, email } = req.body;
    if (!name || !course_interested || !email)
      throw new Error("Please fill all the fields");
    // get current time of system
    const time = new Date().toLocaleString();
    // create new enquiry
    const newEnquiry = new enquiry({ name, course_interested, email, time });
    await newEnquiry.save();
    res.send({ success: true, message: "Enquiry added successfully" });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      msg: error.message,
    });
  }
};
