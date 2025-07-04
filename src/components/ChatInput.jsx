import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages}){

  const [inputText, setInputText] = useState('');

  function saveInputtext(event) {
      setInputText(event.target.value)
  };
      function sendMessage() {
          const newChatMessages = [
              ...chatMessages,
              {
                  message: inputText,
                  sender: 'userprofileimage',
                  id: crypto.randomUUID()
              }
          ]
          setChatMessages(newChatMessages);

          const response = Chatbot.getResponse(inputText);
          setChatMessages([
              ...newChatMessages,
              {
                  message: response,
                  sender: 'robotprofileimage',
                  id: crypto.randomUUID()
              }
          ]);
          setInputText('');
      };
      
  return(
      <div className="chat-input-container">
          <input 
            placeholder="Send a message to Chatbot" 
            size="30" 
            onChange={saveInputtext} 
            value = {inputText}     
            className="chat-input" 
          />
          <button 
            onClick={sendMessage} 
            className="send-button">send
          </button>
      </div>
  );
};