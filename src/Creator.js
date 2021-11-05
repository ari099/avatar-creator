import logo from './logo.svg';
import './Creator.css';
import Avatar from './Avatar';
import AvatarControls from './AvatarControls';

function Creator() {
     return (
          <div className="Creator-container">
               <Avatar />
               <AvatarControls />
          </div>
     );
}

export default Creator;
