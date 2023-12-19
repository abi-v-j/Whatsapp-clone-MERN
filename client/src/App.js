import React, { useState } from 'react';
import { Box, Paper, TextField, Button, Typography } from '@mui/material';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > :not(style)': {
          m: 1,
          width: '400px',
          height: '620px',
        },
      }}
    >
      <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Paper elevation={3} sx={{ width: '100%', height: '90%', overflowY: 'auto', padding: '10px' }}>
          {messages.map((message, index) => (
            <Typography key={index} variant="body1" gutterBottom>
              {message.text}
            </Typography>
          ))}
        </Paper>
        <Box sx={{ width: '70%', mt: 2 }}>
          <TextField
            id="filled-basic"
            label="Type a message"
            variant="filled"
            fullWidth
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </Box>
        <Button variant="contained" color="primary" onClick={handleSendMessage} sx={{ mt: 2 }}>
          Send
        </Button>
      </Paper>
    </Box>
  );
};

export default ChatPage;
