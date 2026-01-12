// Centralized events/shows data
// When events are added, they will automatically appear in:
// - Navigation (Shows link)
// - Homepage (Upcoming Shows section + buttons)
// - /shows page

export interface Show {
  date: string;
  year: string;
  venue: string;
  city: string;
}

// Set to empty array when no events are scheduled
export const upcomingShows: Show[] = [];

// Helper to check if there are any events
export const hasEvents = upcomingShows.length > 0;
