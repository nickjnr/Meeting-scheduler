"use client"

import React, { useEffect } from 'react'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CalendarView from './CalendarView'
import useMeetingStore from '@/store/meetingStore';
import { Meeting } from '@/lib/types';

interface Props {
    meetings: Meeting[];
  }

function MainView({meetings}:Props) {
    const { setMeetings } = useMeetingStore();

    useEffect(() => {
      setMeetings(meetings);
    }, [meetings, setMeetings]);

  return (
    <div className='h-full max-h-screen w-full'>
    <CardHeader>
      <CardTitle>Meetings</CardTitle>
      <CardDescription>
        Manage your meetings and view scheduled meetings.
      </CardDescription>
    </CardHeader>
    <CardContent>
     <CalendarView />    
    </CardContent>
  </div>
  )
}

export default MainView