"use client";

import { CreateMeetingDialog } from "@/app/components/CreateMeetingDialog";
import MeetingDetailSheet from "@/app/components/MeetingDetailSheet";
import React from "react";
import { Toaster } from "react-hot-toast";

export function Providers(props: { children: React.ReactNode }) {
  return (
    <>
      {props.children}
      <CreateMeetingDialog />
      <MeetingDetailSheet />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}