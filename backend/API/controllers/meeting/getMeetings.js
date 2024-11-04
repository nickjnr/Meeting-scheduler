const prisma = require("../../DB/prisma");

const getAllMeeting = async (req, res) => {
  try {
    const meetings = await prisma.meeting.findMany();
    res.status(200).json(meetings);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving meetings." });
  }
};

module.exports = getAllMeeting;
