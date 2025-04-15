export interface AlumniMember {
  id: string;
  name: string;
  years: string;
  currentPosition: string;
  achievements: string[];
  image?: string;
  linkedinUrl?: string;
  websiteUrl?: string;
}

export const alumniMembers: AlumniMember[] = [
  {
    id: 'rachel-wheatley',
    name: 'Dr. Rachel Wheatley',
    years: '2019-20221',
    currentPosition: `Group Leader and Vice Chancellor's Illuminate Fellow at Queen's University Belfast`,
    achievements: [
      'working on a COMBACTE funded project (https://www.combacte.com/) looking at how antimicrobial resistance evolves during respiratory infections',
      `Recipient of a 'Time to Think' fellowship at Wissenschaftskolleg Berlin, Institute for Advanced Study`
    ],
    image: '/images/alumni/rachel_wheatley.png',
    linkedinUrl: 'https://www.linkedin.com/in/rachel-wheatley-b48b2b102/'
  }
];