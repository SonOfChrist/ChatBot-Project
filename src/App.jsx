import { useState} from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([{
      message: 'hello chatbot',
      sender: 'userprofileimage',
      id: crypto.randomUUID()
  }, {
      message: 'Hello! How can i help you',
      sender: 'robotprofileimage',
      id: crypto.randomUUID()
  }, {
      message: 'can you get me Todays Date?',
      sender: 'userprofileimage',
      id: crypto.randomUUID()
  }, {
      message: 'Today is MAY 14',
      sender: 'robotprofileimage',
      id: crypto.randomUUID()
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
