export const placeholder = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' as const
export const API_URL: string = 'https://openlibrary.org/search.json?q=' as const
export const emptyFavorites =
  "You don't have any favorites yet. Start adding some now!"
export const API_KEY = import.meta.env.VITE_REACT_API_KEY
export const GOOGLE_API: string = 'https://www.googleapis.com/books/v1/volumes?q='
export const activities = [
  {
    title: 'Group',
    description:
      'Admission to the Book of Kells and Old Library with free Audio Guide.',
    image: '/src/assets/images/activity-1.webp'
  },
  {
    title: 'TCD Students/Staff',
    description:
      'Staff/Students are welcome to visit free of charge with up to 2 guests.',
    image: './src/assets/images/activity-2.webp'
  },
  {
    title: 'Standard',
    description: 'Standard Entry to the Book of Kells',
    image: './src/assets/images/activity-3.webp'
  },
  {
    title: 'Family',
    description: 'Up to 2 adults and 2 children (aged 6-17 years).',
    image: './src/assets/images/activity-4.webp'
  },
  {
    title: 'Concession ',
    description: 'Students or seniors (over 60)',
    image: './src/assets/images/activity-5.webp'
  },
  {
    title: 'Trinity Campus Tour ',
    description: 'Guided walking tour of Trinity campus ',
    image: './src/assets/images/activity-6.webp'
  }
]
