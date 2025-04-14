export interface SocialEvent {
  id: string;
  title: string;
  date: string;
  type: 'conference' | 'lab-event';
  description: string;
  location: string;
  image?: string;
  participants?: string[];
}

export const socialEvents: SocialEvent[] = [
  {
    id: 'conference-2024',
    title: 'International Microbiology Conference 2024',
    date: 'June 15-18, 2024',
    type: 'conference',
    description: 'Our team will be presenting our latest findings on antimicrobial resistance at the International Microbiology Conference.',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  },
  {
    id: 'lab-retreat-2024',
    title: 'Annual Lab Retreat',
    date: 'July 5-7, 2024',
    type: 'lab-event',
    description: 'Three days of team building, research presentations, and strategic planning in the Cotswolds.',
    location: 'Cotswolds, UK',
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    participants: ['All lab members']
  }
];