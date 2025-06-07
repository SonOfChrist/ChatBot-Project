import { useState} from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([{
      message: 'hello chatbot',
      sender: 'userprofileimage',
      id: 'id1'
  }, {
      message: 'Hello! How can i help you',
      sender: 'robotprofileimage',
      id: 'id2'
  }, {
      message: 'can you get me Todays Date?',
      sender: 'userprofileimage',
      id: 'id3'
  }, {
      message: 'Today is MAY 14',
      sender: 'robotprofileimage',
      id: 'id4'
  }]);

  return (
      <div className="app-container">
          < ChatMessages 
            chatMessages = {chatMessages} 
          />
          < ChatInput 
            chatMessages={chatMessages} 
            setChatMessages={setChatMessages} 
          />
      </div>
  );
};

export default App
