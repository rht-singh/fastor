const enquiry = require("../../model/enquiry");
const employee = require("../../model/employee");

/**
 *
 * @param {*} req email
 * @param {*} res { success: true, data: query }
 */
exports.fetchUnclaimedEnquiry = async (req, res) => {
  try {
    const { email } = req.query;
    // check employee is valid or not
    const getEmployee = await employee.findOne({ email });
    if (!getEmployee)
      throw new Error("Only an employee can fetch claimed enquiries");
    // get all unclaimed enquiries
    const query = await enquiry.find({ claimed: false });
    if (!query.length) throw new Error("Enquiry not found");
    res.send({ success: true, data: query });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      msg: err.message,
    });
  }
};
