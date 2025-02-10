
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { FaPaperPlane, FaSmile } from 'react-icons/fa'; // Import icons from react-icons

const Message = ({ selectedUser , currentUser  }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (selectedUser ) {
      const messagesRef = collection(db, 'messages');
      const q = query(messagesRef, orderBy('createdAt'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const messagesList = snapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .filter(msg =>
            (msg.sender === currentUser ?.uid && msg.receiver === selectedUser ?.uid) ||
            (msg.sender === selectedUser ?.uid && msg.receiver === currentUser ?.uid)
          );

        setMessages(messagesList);
      });

      return () => unsubscribe();
    }
  }, [selectedUser , currentUser ]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    // Defensive checks
    if (newMessage.trim() === '' || !currentUser  || !selectedUser ) return;

    // Ensure userId is defined
    if (!currentUser .uid || !selectedUser .uid) {
      console.error("User  ID is undefined");
      return;
    }

    await addDoc(collection(db, 'messages'), {
      text: newMessage,
      sender: currentUser .uid,
      receiver: selectedUser .uid,
      createdAt: new Date(),
    });

    setNewMessage('');
  };

  return (
    <div className='flex flex-col h-full'>
      <div className='flex-grow overflow-y-auto p-4 bg-gray-50'>
        {messages.map((msg) => (
          <div key={msg.id} className={`mb-2 flex ${msg.sender === currentUser ?.uid ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs p-2 rounded-lg ${msg.sender === currentUser ?.uid ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
              <p className='font-medium'>{msg.sender === currentUser ?.uid ? 'You' : selectedUser .username}</p>
              <p>{msg.text}</p>
              <span className='text-xs text-gray-500'>{new Date(msg.createdAt.seconds * 1000).toLocaleTimeString()}</span>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className='flex p-2 bg-white border-t border-gray-300'>
        <div className='flex items-center flex-grow'>
         
          <input
            type='text'
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder='Type a message...'
            className='border border-gray-300 p-2 flex-grow w-10 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button type='submit' className='bg-blue-500 text-white p-2 ml-2 rounded-r-md flex items-center'>
            <FaPaperPlane className='text-lg' />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Message;