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
  location?: string; // Full address
  rate?: string; // Ticket price
  recurring?: {
    schedule: string; // e.g., "Every Thursday", "Weekly", "Monthly"
    time?: string; // e.g., "7:30 PM"
  };
  flyer?: string; // Path to flyer image (relative to /public)
  ticketLink?: string; // Optional ticket URL
}

// Set to empty array when no events are scheduled
export const upcomingShows: Show[] = [
  {
    venue: "2927 Comedy Club",
    city: "Accra",
    location: "2927 Temera Street",
    rate: "GHS 50",
    recurring: {
      schedule: "Every Thursday",
      time: "7:30 PM",
    },
    flyer: "/images/shows/ComedyClub.webp",
    ticketLink: "#", // Replace with actual ticket link
  },
];

// Helper to check if there are any events
export const hasEvents = upcomingShows.length > 0;
