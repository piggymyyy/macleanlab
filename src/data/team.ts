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
    image: '/macleanlab/images/team/craig_mclean.png',
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
    image: '/macleanlab/images/team/adam_mulkern.png',
    bio: `Adam's research focuses on understanding the within-host evolution of antimicrobial resistance, 
particularly in the pathogen Pseudomonas aeruginosa. Using high-throughput technologies and robotic platforms, 
he is conducting large-scale evolution experiments to investigate how pre-existing genetic diversity influences 
resistance development, aiming to uncover the ecological and evolutionary processes driving antibiotic resistance 
in clinical settings.`,
    research: ['High-throughput', 'Antimicrobial Resistance', 'Evolution'],
    email: 'adam.mulkern@biology.ox.ac.uk',
    profileUrl: 'https://www.biology.ox.ac.uk/people/adam-mulkern',
    linkedinUrl: 'https://www.linkedin.com/in/adam-mulkern'
  },
  {
    id: 'cedric-lood',
    name: 'Cedric Lood',
    title: 'Marie Curie Fellow',
    image: '/macleanlab/images/team/cedric_lood.png',
    bio: `Cedric studies host-virus interactions and utilises bacteria and their viruses as models to
    study the evolution of these interactions. I am particularly interested in phage 
    therapy (i.e., the use of bacterial viruses) as a technique that can help us 
    mitigate the global challenge of antimicrobial resistance and as a therapeutic approach
    to clear resistant infections in patients.`,
    research: ['Lysonegic Phages', 'Antimicrobial Resistance', 'Evolution', 'Phage Therapy'],
    email: 'cedric.lood@biology.ox.ac.uk',
    profileUrl: 'https://www.biology.ox.ac.uk/people/cedric-lood'
  },
  {
    id: 'will-matlock',
    name: 'Will Matlock',
    title: 'Postdoctoral Researcher',
    image: '/macleanlab/images/team/will_matlock.png',
    bio: `Will is a computational biologist postdoc based in the Department of Biology, University of Oxford, UK. He is
     interested how mobile genetic elements, such as plasmids, integrons, and transposons, evolve and spread antimicrobial 
     resistance genes. Will spends most of his time developing novel genomic methods, but also works on more fundamental
     questions surrounding bacterial evolution.`,
    research: ['Computational Biology', 'Antimicrobial Resistance', 'Evolution'],
    email: 'will.mattlock@biology.ox.ac.uk',
    profileUrl: 'https://www.biology.ox.ac.uk/people/will-matlock'
  },
  {
    id: 'samuel-greenrod',
    name: 'Samuel TE Greenrod',
    title: 'Graduate Student',
    image: '/macleanlab/images/team/sam_greenrod.png',
    bio: `Sam's research looks at how bacteria and phages interact and evolve. Specifically, he am focusing on how phage 
    activity changes with temperature, which varies both within and between individuals. His research aims to improve our 
    understanding of how phage treatment efficacy changes between and within individuals. This will inform us about the 
    benefits and challenges that phage treatments might face as therapeutics. Further, this work will aid the development 
    of more effective phage treatments to cure antibiotic-resistant bacterial infections.`,
    research: ['Lytic Phages', 'Temperature', 'Evolution', 'Phage Therapy', 'Climate Change'],
    email: 'samuel.greenrod@magd.ox.ac.uk',
    profileUrl: 'https://www.biology.ox.ac.uk/people/samuel-greenrod#tab-3799836',
    linkedinUrl: 'https://www.linkedin.com/in/samuel-greenrod-563909155/'
  },
  {
    id: 'michelle-yin',
    name: 'Michelle Yin',
    title: 'Graduate Student',
    image: '/macleanlab/images/team/michelle_yin.png',
    bio: `Michelle's research focues on the interactions between plasmid-dependent phages and plasmid-harbouring bacteria, 
    as well as their underlying evolutionary biology. She is also interested in the potential of these phages as a tool against the 
    spread of antimicrobial resistance. Michelle is supported by a fellowship from the Agency of 
    Science Technology and Research (A*STAR).`,
    research: ['Plasmid-Dependent Phages', 'Antimicrobial Resistance', 'Evolution', 'Phage Therapy', 'Plasmid'],
    email: 'michelle.yin@biology.ox.ac.uk',
    profileUrl: 'https://www.biology.ox.ac.uk/people/michelle-yin',
    linkedinUrl: 'https://www.linkedin.com/in/michelle-yin-yy/'
  }
];