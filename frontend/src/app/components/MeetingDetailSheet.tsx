import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"
import useMeetingStore from '@/store/meetingStore';
import SingleMeetingCard from './SingleMeetingCard';
import { Button } from '@/components/ui/button';
import { Meeting } from '@/lib/types';
  
function MeetingDetailSheet() {
 const { isMeetingDetailSheetOpen,closeMeetingSheet, date , openCreateDialog,meetings } = useMeetingStore();

 const addNewMeeting = () =>{
    closeMeetingSheet()
    openCreateDialog({date})
 }

 const meetingsOfTheDay:Meeting [] = meetings.filter((m) => {
    return new Date(m.date).toISOString().slice(0, 10) === new Date(date).toISOString().slice(0, 10);
  });

  return (
    <Sheet open={isMeetingDetailSheetOpen} onOpenChange={closeMeetingSheet}>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Create New Meeting Details</SheetTitle>
        <SheetDescription>
          Date: {date.toDateString()}
        </SheetDescription>
      </SheetHeader>
      <div className='space-y-2 my-4'>
      {meetingsOfTheDay.length > 0 ? (
        meetingsOfTheDay.map(meeting => (
          <SingleMeetingCard key={meeting.id} meeting={meeting} />
        ))
      ) : (
        <p>No meetings scheduled for today.</p>
      )}

      </div>
      <SheetFooter>
          <Button type="submit" onClick={addNewMeeting}>Add New Meeting</Button>
        </SheetFooter>
    </SheetContent>
  </Sheet>
  )
}

export default MeetingDetailSheet