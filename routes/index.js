const router = require("express").Router();
const { add_Employee } = require("../controller/Employee/addEmployee");
const { ClaimEnquiry } = require("../controller/Enquiry/claimEnquiry");
const {
  fetchUnclaimedEnquiry,
} = require("../controller/Enquiry/getUnclaimedEnquiry");
const {
  fetchClaimedEnquiry,
} = require("../controller/Enquiry/getClaimedEnquiry");
const { addEnquiry } = require("../controller/Enquiry/postEnquiry");

router.route("/addEmployee").get(add_Employee);
router.route("/create_enquiry").post(addEnquiry);
router.route("/claim-enquiry").post(ClaimEnquiry);
router.route("/unclaim-enquiry").get(fetchUnclaimedEnquiry);
router.route("/claim-enquiry").get(fetchClaimedEnquiry);

module.exports = router;
