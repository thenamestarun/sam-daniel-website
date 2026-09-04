export function eventDateKey(value: string) {
  return value.slice(0, 10);
}

export function isEventPast(value: string, today = new Date()) {
  const current = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const event = new Date(`${eventDateKey(value)}T00:00:00`);
  return event < current;
}

export function formatEventDate(value: string) {
  const [year, month, day] = eventDateKey(value).split("-").map(Number);
  if (!year || !month || !day) return value;

  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}
