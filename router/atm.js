const router = require("express").Router();
const { Authenticate } = require("../middleWares/auth");
const { postAtm, deleteAtm, getAtms, addPeople } = require("../controller/atm");

router.post("/", Authenticate, postAtm); //done!
router.post("/people", Authenticate, addPeople); //done!
router.get("/", Authenticate, getAtms); //done!
router.delete("/:atmId", Authenticate, deleteAtm);

module.exports = router;
