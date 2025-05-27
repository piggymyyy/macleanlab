export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi: string;
  abstract: string;
  area: string;
  citations?: number;
}

export const publications: Publication[] = [
  {
    id: 'pub-2025-1',
    title: 'Chromosomal capture of beneficial genes drives plasmids towards ecological redundancy',
    authors: ['R. Craig MacLean', 'Cédric Lood', 'Rachel M. Wheatley'],
    journal: 'The ISME Journal',
    year: 2025,
    doi: 'https://doi.org/10.1093/ismejo/wraf091',
    abstract: 'This study explores the plasmid paradox.',
    area: 'Plasmid Ecology and Evolution'
  },
  {
    id: 'pub-2024-1',
    title: 'Antibiotic resistance alters the ability of Pseudomonas aeruginosa to invade bacteria from the respiratory microbiome',
    authors: ['Lindon S', 'Shah S', 'Gifford DR', 'Lood C', 'Gomis Font MA', 'Kaur D', 'Oliver A', 'MacLean RC', 'Wheatley RM'],
    journal: 'Evolution Letters',
    year: 2024,
    doi: 'https://doi.org/10.1093/evlett/qrae030',
    abstract: 'This study looks at how antibiotic resistance influences the ability of a pathogen to invade the host-associated microbiome.',
    area: 'Antimicrobial Resistance and Microbiome Interactions'
  }
];