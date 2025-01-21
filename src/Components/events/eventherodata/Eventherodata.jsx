// Importing the event image correctly
import event from "../../events/image/event2.avif";

// Exporting event data, locations, and categories
export const eventData = {
  image: event,
  category: "Technology",
  title: "Digital Meetup Event 2021",
  date: "25 Feb, 2021",
  location: "MicDrop South Melbourne, VIC 3205, AU",
  buttons: [
    { text: "Purchase Ticket", link: "#" },
    { text: "View Details", link: "#" }
  ]
};

export const locations = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Miami",
  "San Francisco",
];

export const categories = ["Music", "Sports", "Theater", "Art", "Festival"];

export default { eventData, locations, categories };
