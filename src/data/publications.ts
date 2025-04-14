export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi: string;
  abstract: string;
  area: string;
}

export const publications: Publication[] = [
  {
    id: 'pub-2023-1',
    title: 'Evolution of antibiotic resistance in bacterial populations',
    authors: ['MacLean, C.', 'Smith, J.', 'Jones, S.'],
    journal: 'Nature Microbiology',
    year: 2023,
    doi: '10.1038/s41564-023-1234-5',
    abstract: 'This study explores the mechanisms of antibiotic resistance evolution...',
    area: 'Antimicrobial Resistance'
  }
];