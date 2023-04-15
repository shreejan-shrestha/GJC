import { house, land, apartment} from "../assets";

const navLinks = [
  {
    id: "housing",
    title: "Housing",
  },
  {
    id: "land",
    title: "Land",
  },
  {
    id: "apartments",
    title: "Apartment",
  },
  {
    id: "contact",
    title: "Contact us"
  }
];

const services = [
  {
    icon: house,
    title: "Housing",
  },
  {
    icon: apartment,
    title: "Apartments",
  },
  {
    icon: land,
    title: "Land",
  },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    name: "Sara Lee",
    designation: "CFO",
    company: "ABC",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    name: "Lisa Wang",
    designation: "IJK",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { navLinks, services, testimonials };
