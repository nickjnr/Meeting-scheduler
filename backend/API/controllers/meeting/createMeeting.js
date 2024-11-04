const prisma = require("../../DB/prisma");

const createMeeting = async (req, res) => {
    const { title, description, date, start_time, end_time } = req.body;
    

    if (!title || !description || !date || !start_time || !end_time) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
  
    try {
      s
      const localDate = new Date(date); 
      const fromTime = new Date(`${localDate.toISOString().split('T')[0]}T${start_time}:00`); 
      const toTime = new Date(`${localDate.toISOString().split('T')[0]}T${end_time}:00`); 
    
     
      const fromTimeUTC = fromTime.toISOString(); 
      const toTimeUTC = toTime.toISOString(); 
    
    
      const conflictingMeetings = await prisma.meeting.findMany({
        where: {
          date: localDate,
          OR: [
            {
              from_time: { lte: toTime },
              to_time: { gte: fromTime },
            },
          ],
        },
      });
  
      if (conflictingMeetings.length > 0) {
        return res.status(409).json({ error: 'A meeting already exists during the specified time.' });
      }
  
    
      const newMeeting = await prisma.meeting.create({
        data: {
          title,
          description,
          date: date, 
          from_time: fromTimeUTC, 
          to_time: toTimeUTC, 
        },
      });
  
      res.status(201).json({ message: 'Meeting created successfully', meeting:newMeeting });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the meeting.' });
    }
  };
  
  module.exports = createMeeting;