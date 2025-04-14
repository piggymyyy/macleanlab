export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  research: string[];
  email: string;
  profileUrl?: string;
  linkedinUrl?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'craig-maclean',
    name: 'Craig MacLean',
    title: 'Professor of Evolution and Microbiology',
    image: '/images/team/craig_mclean.jpg',
    bio: 'Craig MacLean is a Professor of Evolution and Microbiology at the University of Oxford.',
    research: ['Antimicrobial resistance', 'Evolutionary biology', 'Bacterial adaptation'],
    email: 'craig.maclean@biology.ox.ac.uk',
    profileUrl: 'https://www.biology.ox.ac.uk/people/craig-maclean#tab-2777526',
    linkedinUrl: 'https://www.linkedin.com/in/craig-maclean'
  },
  {
    id: 'adam-mulkern',
    name: 'Adam Mulkern',
    title: 'Postdoctoral Researcher',
    image: '/images/team/adam_mulkern.jpg',
    bio: 'Adam specializes in understanding the within-host evolution of antimicrobial resistance, particularly in the pathogen Pseudomonas aeruginosa, using high-throughput technologies and robotic platforms.',
    research: ['High-throughput', 'Antimicrobial Resistance', 'Evolution'],
    email: 'adam.mulkern@biology.ox.ac.uk',
    linkedinUrl: 'https://www.linkedin.com/in/adam-mulkern'
  }
];