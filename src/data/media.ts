export interface MediaItem {
  id: string;
  title: string;
  type: 'article' | 'video';
  url: string;
  description: string;
  date: string;
  source?: string;
  thumbnail?: string;
  author?: string;
}

export const mediaItems: MediaItem[] = [
  {
    id: 'article-1',
    title: 'Breakthrough in Antimicrobial Resistance Research',
    type: 'article',
    url: 'https://example.com/article-1',
    description: 'Latest findings from our lab on novel approaches to combat antimicrobial resistance.',
    date: 'March 15, 2024',
    source: 'Nature Microbiology',
    author: 'Dr. Craig McLean'
  },
  {
    id: 'video-1',
    title: 'Lab Tour: Inside the McLean Laboratory',
    type: 'video',
    url: 'https://example.com/video-1',
    description: 'Take a virtual tour of our state-of-the-art research facilities.',
    date: 'February 20, 2024',
    source: 'University Media',
    thumbnail: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  }
];