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
  mb: 4,
  display: 'flex',
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
  borderRadius: 6,
  px: 2,
  transition: 'background-color 0.6s ease', // Add a smooth transition effect

  '&:hover': {
    backgroundColor: '#e6d4d4', // Change the background color on hover
    borderRadius: 6
  },
};

export const ChatListSingleCardInnerTypography = {
  ml: 3
}

export const ChatListHeaderSearchBox = {
  height: 31,
  mt: 2.5,
  ml: 3,
  width: 250,
  display: 'flex',
  justifyContent: 'center',
}

export const ChatListHeaderMenuButton = {
  mt: 2.5
}

export const ChatListHeaderSearchTextField = {

  width: 250,
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '20px',
  border: '1px solid',
  height: 35,
  paddingLeft: '30px',

};


export const ChatContainerMainContainer = {
  height: '97vh',
  width: '100%',
  m: 1,
}

export const NavbarMainContainerBox = {
  height: 70,
  backgroundColor: 'lightblue',
  m: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent:'space-between',
  px: 3
}

export const NavbarTypography = {
  ml: 2
}

export const NavbarInnerFirstBox = {
  display: 'flex',
  alignItems: 'center'
}

export const ChatComponentInnerBoxChat = {
  px:30,
}

export  const ChatComponentInnerBoxTop = {
  height:'76vh',
  m:2,
  overflowY:'scroll'
}

export const ChatComponentInnerBoxBottom = {
  height:'6vh',
  display:'flex',
  alignItems:'end',
  border:1,
  px:3,
  borderRadius:'15px'
}