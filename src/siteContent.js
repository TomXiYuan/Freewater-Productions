/*
  ⭐ START HERE! Change the text, images, and links in this file.
  You do NOT need to understand React to edit these values.

  Images live in public/images/. For a file named my-photo.jpg, write:
  image: '/images/my-photo.jpg'

  To show a YouTube video, paste its VIDEO ID (not the full URL).
  Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ
  becomes youtubeId: 'dQw4w9WgXcQ'
*/

export const site = {
  name: 'FREEWATER\nPRODUCTIONS',
  university: 'DUKE UNIVERSITY',
  affiliation: 'DUU',

  hero: {
    titleFirst: 'WE MAKE',
    titleAccent: 'MEMES.',
    subtitle: 'A film community for every Duke student.',
    image: '/images/shocked-black-guy.jpg',
    primaryButton: 'WATCH OUR FILMS',
    secondaryButton: 'JOIN THE CREW',
  },

  filmsHeading: 'QUICK',
  filmsHeadingHighlight: 'PREVIEWS',
  films: [
    { id: 1, title: 'rick-roll', image: '/images/rick-roll.jpg', youtubeId: '' },
    { id: 2, title: 'sooubway', image: '/images/sooubway.jpeg', youtubeId: '' },
    { id: 3, title: 'gotham-chess', image: '/images/gotham-chess.jpg', youtubeId: '' },
  ],

  about: {
    heading: 'Made by students. For students.',
    body: 'Freewater is a creative home for student filmmakers. Whether you love directing, shooting, editing, acting, or just watching movies, there is a place for you here.',
  },

  // Replace these empty strings with your REAL URLs when you have them.
  links: {
    mailingList: '',
    groupMe: '',
    instagram: '',
  },
};
