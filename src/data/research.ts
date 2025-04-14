export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  icon: 'TestTubes' | 'Microscope' | 'Dna';
  projects: string[];
  publications?: string[];
  image?: string;
  collaborators?: string[];
  funding?: string[];
}

export interface ResearchArea {
  id: string;
  name: string;
  description: string;
  projects: ResearchProject[];
  overview: string;
}

export const researchData: ResearchArea[] = [
  {
    id: 'antimicrobial-resistance',
    name: 'Antimicrobial Resistance',
    description: 'Understanding the evolution and mechanisms of antimicrobial resistance in bacterial populations.',
    overview: 'Our lab focuses on unraveling the complex dynamics of antimicrobial resistance development and spread in bacterial populations.',
    projects: [
      {
        id: 'evolutionary-dynamics',
        title: 'Evolutionary Dynamics of Resistance',
        description: 'Investigating how bacteria evolve resistance to antibiotics over time.',
        icon: 'TestTubes',
        projects: [
          'Mutation rate analysis',
          'Fitness cost measurements',
          'Population dynamics modeling'
        ],
        funding: ['Wellcome Trust', 'UKRI']
      }
    ]
  },
  {
    id: 'phage-therapy',
    name: 'Phage Therapy',
    description: 'Developing novel therapeutic approaches using bacteriophages.',
    overview: 'We explore the potential of bacteriophages as alternatives to conventional antibiotics.',
    projects: [
      {
        id: 'phage-bacteria-coevolution',
        title: 'Phage-Bacteria Coevolution',
        description: 'Studying the evolutionary arms race between phages and bacteria.',
        icon: 'Microscope',
        projects: [
          'Host range evolution',
          'Resistance mechanisms',
          'Therapeutic applications'
        ],
        collaborators: ['Phage Therapy Center', 'Oxford Hospitals']
      }
    ]
  }
];