export type CalendarReminder = "none" | "1d" | "3d" | "7d";

export const calendarReminderOptions: Array<{
  value: CalendarReminder;
  label: string;
}> = [
  { value: "none", label: "Sem lembrete" },
  { value: "1d", label: "1 dia antes" },
  { value: "3d", label: "3 dias antes" },
  { value: "7d", label: "7 dias antes" },
];
