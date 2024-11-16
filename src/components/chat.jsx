import React, { useState } from 'react';
import { collection, addDoc, query, orderBy } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from './../FirebaseConfig.js';
import "./chat.css";

const Chat = () => {
  const messagesRef = collection(db, 'messages');
  const q = query(messagesRef, orderBy('timestamp'));

  const [messages] = useCollectionData(q, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    await addDoc(messagesRef, {
      text: formValue,
      sender: 'User1', // Troque pelo usuário logado
      timestamp: new Date(),
    });

    setFormValue('');
  };

  return (
    <div class="chat-container">
      <div>
        {messages &&
          messages.map((msg) => (
            <div key={msg.id} class="messages">
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
      </div>

      <form class="form" onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Chat;
