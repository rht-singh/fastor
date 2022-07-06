const employee = require("../../model/employee");

/**
 *
 * @param {*} req  name , email
 * @param {*} res { success: true, message: "Employee added successfully" }
 */
exports.add_Employee = async (req, res) => {
  try {
    const { name, email } = req.query;
    //check if name and email not passed in params
    if (!name || !email) throw new Error("Name and email are required");

    //check if name and email already exists
    const getEmployee = await employee.findOne({ email });
    if (getEmployee) throw new Error("Employee already exists");

    //create new employee
    const newEmployee = new employee({ name, email });
    await newEmployee.save();
    res.send({ success: true, message: "Employee added successfully" });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: err.message,
    });
  }
};
