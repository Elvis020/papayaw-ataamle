// Centralized events/shows data
// When events are added, they will automatically appear in:
// - Navigation (Shows link)
// - Homepage (Upcoming Shows section + buttons)
// - /shows page

export interface Show {
  date?: string; // Optional for recurring events
  year?: string; // Optional for recurring events
  venue: string;
  city: string;
  recurring?: {
    schedule: string; // e.g., "Every Friday", "Weekly", "Monthly"
    time?: string; // e.g., "8:00 PM"
  };
  flyer?: string; // Path to flyer image (relative to /public)
  ticketLink?: string; // Optional ticket URL
}

// Set to empty array when no events are scheduled
export const upcomingShows: Show[] = [
  {
    venue: "2927 Comedy Club",
    city: "Accra",
    recurring: {
      schedule: "Every Friday",
      time: "8:00 PM",
    },
    flyer: "/images/shows/ComedyClub.jpeg",
    ticketLink: "#", // Replace with actual ticket link
  },
];

// Helper to check if there are any events
export const hasEvents = upcomingShows.length > 0;
