import { Meeting } from '@/lib/types'
import { create } from 'zustand'

interface Data {
    date:Date,
}

interface DialogState {
  isCreateDialogOpen: boolean,
  isMeetingDetailSheetOpen: boolean,
  date: Date,
  meetings:Meeting []
  openCreateDialog: (data:Data) => void
  closeCreateDialog: () => void
  openMeetingSheet: (data:Data) => void
  closeMeetingSheet: () => void
  setMeetings: (data:Meeting[]) => void
}

const useMeetingStore = create<DialogState>()((set) => ({
    isCreateDialogOpen: false,
    isMeetingDetailSheetOpen:false,
    date: new Date(),
    meetings:[],
    openCreateDialog: (data) => {set(() => ({ isCreateDialogOpen: true, date:data.date }))},
    closeCreateDialog: () => {set(() => ({ isCreateDialogOpen: false, date:new Date() }))},
    openMeetingSheet: (data) => {set(() => ({ isMeetingDetailSheetOpen: true, date:data.date }))},
    closeMeetingSheet: () => {set(() => ({ isMeetingDetailSheetOpen: false, date:new Date() }))},
    setMeetings: (data) => {set(() => ({ meetings:data }))},
}))

export default useMeetingStore