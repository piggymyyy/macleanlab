export interface AlumniMember {
  id: string;
  name: string;
  years: string;
  currentPosition: string;
  achievements: string[];
  image?: string;
  linkedinUrl?: string;
}

export const alumniMembers: AlumniMember[] = [
  {
    id: 'sarah-jones',
    name: 'Dr. Sarah Jones',
    years: '2018-2022',
    currentPosition: 'Assistant Professor at Cambridge University',
    achievements: [
      'Developed novel phage therapy approaches',
      'Published 5 high-impact papers',
      'Awarded Young Researcher Prize 2022'
    ],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/sarah-jones'
  }
];