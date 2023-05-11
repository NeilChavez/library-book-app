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
    image:
      'https://tcdvisitors.sirv.com/visittrinity/2023/02/Standard-Ticket-3.jpg?cw=100.0000%25&ch=100.0000%25&scale.option=fill&w=0&h=600'
  },
  {
    title: 'TCD Students/Staff',
    description:
      'Staff/Students are welcome to visit free of charge with up to 2 guests.',
    image:
      'https://tcdvisitors.sirv.com/visittrinity/2023/02/Standard-Ticket.jpg?cw=100.0000%25&ch=100.0000%25&scale.option=fill&w=0&h=600'
  },
  {
    title: 'Standard',
    description: 'Standard Entry to the Book of Kells',
    image:
      'https://tcdvisitors.sirv.com/visittrinity/2023/02/Student-Tickets.jpg?cw=100.0000%25&ch=100.0000%25&scale.option=fill&w=0&h=600'
  },
  {
    title: 'Family',
    description: 'Up to 2 adults and 2 children (aged 6-17 years).',
    image:
      'https://tcdvisitors.sirv.com/visittrinity/2023/02/Group-Ticket.jpg?cw=100.0000%25&ch=100.0000%25&scale.option=fill&w=0&h=600'
  },
  {
    title: 'Concession ',
    description: 'Students or seniors (over 60)',
    image:
      'https://tcdvisitors.sirv.com/visittrinity/2023/02/TCD-Student-Tickets.jpg?cw=100.0000%25&ch=100.0000%25&scale.option=fill&w=0&h=600'
  },
  {
    title: 'Trinity Campus Tour ',
    description: 'Guided walking tour of Trinity campus ',
    image:
      'https://tcdvisitors.sirv.com/visittrinity/2023/02/Trinity-Trails-Adult-Tickets.jpg?cw=100.0000%25&ch=100.0000%25&scale.option=fill&w=0&h=600'
  }
]
