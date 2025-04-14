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
    image: 'https://lh3.googleusercontent.com/pw/AP1GczM8xGxViOTlWqIkSTaUiz4Atpeca2J-5gAvw9fsNWva5cXbTyHOYqYvUM84c6Mn_z1eJBP0G5BWNJ2rAvzRusngheUIpcjgwitcA0kO2Cd9CR1cPZsm0po-jaQCeciARSXgIpSq1Nmx-YxMhxa-T84Z=w600-h400-s-no?authuser=0',
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
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOayStrirOe3kIM3UJ95PhfYMFjNcseuLqTGASAeEXliHPV5uKpxpW5NWUwRR2dtCLcfwMAAaUriYXHQWbr5Wp25mupS_Z0bxx23CCt5GhcybJfrL4ONuKUCA5JO6vvjf-O8cbKziSlvECnwKIkKpqz=w600-h400-s-no?authuser=0',
    bio: 'Adam specializes in understanding the within-host evolution of antimicrobial resistance, particularly in the pathogen Pseudomonas aeruginosa, sing high-throughput technologies and robotic platforms.',
    research: ['High-throughput', 'Antimicrobial Resistance', 'Evolution'],
    email: 'adam.mulkern@biology.ox.ac.uk',
    linkedinUrl: 'https://www.linkedin.com/in/adam-mulkern'
  }
];