const express = require("express")
const router = express.Router()
const meetingRoutes = require("./meetings")


router.use("/meetings", meetingRoutes)


module.exports = router;
