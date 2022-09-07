const router = require("express").Router();
const { Authenticate } = require("../middleWares/auth");
const { postAtm, deleteAtm, getAtms, addPeople } = require("../controller/atm");

router.get("/", Authenticate, getAtms); //get atms
router.post("/", Authenticate, postAtm); //add atm
router.post("/people", Authenticate, addPeople); //add trans
router.delete("/:atmId", Authenticate, deleteAtm); //delete

module.exports = router;
