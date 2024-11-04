const express = require("express");
const { createMeeting, getAllMeeting } = require("../controllers/meeting");
const router = express.Router()

router.post("/", createMeeting)
router.get("/", getAllMeeting)

module.exports = router;
