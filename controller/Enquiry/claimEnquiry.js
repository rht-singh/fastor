const enquiry = require("../../model/enquiry");
const employee = require("../../model/employee");

/**
 *
 * @param {*} req email, enquiry_id
 * @param {*} res { success: true, message: "Enquiry claimed successfully" }
 */
exports.ClaimEnquiry = async (req, res) => {
  try {
    // get email address of employee and enquiry_id for claim
    const { email, enquiry_id } = req.query;
    // check employee is valid or not
    const getEmployee = await employee.findOne({ email });
    if (!getEmployee) throw new Error("Only an employee can claim enquiries");
    // check enquiry is valid or not
    const query = await enquiry.findOne({
      _id: enquiry_id,
      claimed: false,
    });
    if (!query) throw new Error("Enquiry not found");
    // if the enquiry is not claimed then claim it
    query.claimed = true;
    query.counsellor = getEmployee.email;
    await query.save();
    res.send({ success: true, message: "Enquiry claimed successfully" });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      msg: err.message,
    });
  }
};
