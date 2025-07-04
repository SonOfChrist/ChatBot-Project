import robotProfileImage from '../assets/robotprofileimage.png';
import userProfileImage from '../assets/userprofileimage.png';
import './ChatMessage.css';

export function ChatMessage({message, sender}) {
return(
      <div className= { 
        sender === 'userprofileimage' 
            ? 'chat-message-userprofileimage' 
            : 'chat-message-robotprofileimage'
        }>
          { sender === 'robotprofileimage' &&  <img src={robotProfileImage} className="chat-message-profileimage" /> }
          <div className="chat-message-text">{message}</div>
          { sender === 'userprofileimage' &&  <img src={userProfileImage} className="chat-message-profileimage" /> }
      </div>
  );
};

