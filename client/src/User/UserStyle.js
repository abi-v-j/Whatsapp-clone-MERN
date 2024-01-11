export const UserMainAppContainer = {
  display: 'flex',
  backgroundColor: 'lightblue',
}

export const ChatListMainContainer = {
  height: '97vh',
  width: 450,
  m: 1,
}

export const ChatListHeaderBox = {
  height: '10vh',
  p: 2,
  mb:4
}
export const ChatListBodyBox = {
  height: '81vh',
  overflowY: 'scroll',
  WebkitOverflowScrolling: 'touch', // For smoother scrolling on iOS devices

  /* Customize the scrollbar */
  scrollbarWidth: 'thin', // Firefox
  scrollbarColor: '#888 #f1f1f1', // Firefox

  '&::-webkit-scrollbar': {
    width: '5px', // Set the width of the scrollbar
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'white', // Set the color of the scrollbar thumb
    borderRadius: '5px', // Set the border radius of the thumb
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: '#f1f1f1', // Set the color of the scrollbar track
  },

  /* Make the scrollbar visible when scrolling */
  '&:hover::-webkit-scrollbar-thumb': {
    backgroundColor: '#cfbbbb', // Change the color on hover
  },
}
export const ChatListBodySingleCard = {
    m: 1,
    height: '10vh',
    display: 'flex',
    alignItems: 'center',
    borderRadius:6,
    px: 2,
    transition: 'background-color 0.6s ease', // Add a smooth transition effect
  
    '&:hover': {
      backgroundColor: '#f0f0f0', // Change the background color on hover
      borderRadius:6
    },
  };
  
export const ChatContainerMainContainer = {
  height: '97vh',
  width: '100%',
  m: 1,
}
