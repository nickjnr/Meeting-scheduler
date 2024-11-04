import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Meeting } from "@/lib/types";
import { Calendar } from "lucide-react";

interface Props {
  meeting: Meeting;
}

export default function SingleMeetingCard({ meeting }: Props) {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-md">
      <Avatar className="h-9 w-9 sm:flex">
        <AvatarFallback>
          <Calendar />
        </AvatarFallback>
      </Avatar>
      <div className="grid gap-1">
        <p className="text-sm font-medium leading-none">{meeting.title}</p>
        <p className="text-sm text-muted-foreground">
          {new Date(meeting.date).toDateString()}
        </p>
      </div>
      <div className="ml-auto font-medium">
        {new Date(meeting.from_time).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </div>
    </div>
  );
}
