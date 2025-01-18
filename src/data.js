import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];
export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const services = [
    {
      id: 1,
      icon: 'fas fa-wallet fa-fw',
      title: 'saving money',
      text: 'Travel doesn’t have to break the bank! Our budget-friendly packages ensure you experience the best adventures without overspending.',
    },
    {
      id: 2,
      icon: 'fas fa-tree fa-fw',
      title: 'endless hiking',
      text: 'Step into the wild and explore scenic trails, majestic mountains, and serene forests with our curated hiking tours.',
    },
    {
      id: 3,
      icon: 'fas fa-socks fa-fw',
      title: 'amazing comfort',
      text: 'After a day of adventure, relax in luxurious accommodations that combine comfort with breathtaking views.',
    },
  ];
  
  export const tours = [
    {
      id: 1,
      image: tour1,
      date: 'August 26th, 2025',
      title: 'Tibet Adventure',
      info: `Embark on an unforgettable journey to the roof of the world! Explore breathtaking landscapes, visit ancient monasteries, and immerse yourself in the rich Tibetan culture.`,
      location: 'China',
      duration: 6,
      cost: 2400, // Adjusted cost to reflect 2025
    },
    {
      id: 2,
      image: tour2,
      date: 'October 1st, 2025',
      title: 'Best of Java',
      info: `Experience the vibrant essence of Java in 2025! Visit lush green landscapes, iconic volcanoes, and serene beaches in this remarkable Indonesian adventure.`,
      location: 'Indonesia',
      duration: 11,
      cost: 1600, // Adjusted cost to reflect 2025
    },
    {
      id: 3,
      image: tour3,
      date: 'September 15th, 2025',
      title: 'Explore Hong Kong',
      info: `Discover the dynamic cityscape of Hong Kong in 2025! From vibrant markets to towering skyscrapers, experience the perfect blend of tradition and modernity.`,
      location: 'Hong Kong',
      duration: 8,
      cost: 5200, // Adjusted cost to reflect 2025
    },
    {
      id: 4,
      image: tour4,
      date: 'December 5th, 2025',
      title: 'Kenya Highlights',
      info: `Journey to Kenya in 2025 for a life-changing safari! Witness the majesty of African wildlife, stunning landscapes, and vibrant local traditions.`,
      location: 'Kenya',
      duration: 20,
      cost: 3500, // Adjusted cost to reflect 2025
    },
  ];
  
  