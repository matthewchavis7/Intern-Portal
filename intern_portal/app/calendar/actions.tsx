"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function createEvent(title: string, start: Date, end: Date) {
  const supabase = createClient();

  const calendarEvent = {
    title,
    start,
    end,
  };

  const { error } = await supabase
    .from("calendar-events")
    .insert(calendarEvent);

  if (error) {
    redirect("/error");
  }
}

export async function updateEvent(
  id: string,
  title: string,
  start: Date,
  end: Date
) {
  const supabase = createClient();

  const calendarEvent = {
    title,
    start,
    end,
  };

  const { error } = await supabase
    .from("calendar-events")
    .update(calendarEvent)
    .eq("id", id);

  if (error) {
    redirect("/error");
  }
}

export async function removeEvent(id: string) {
  const supabase = createClient();

  const { error } = await supabase
    .from("calendar-events")
    .delete()
    .eq("id", id);

  if (error) {
    redirect("/error");
  }
}
