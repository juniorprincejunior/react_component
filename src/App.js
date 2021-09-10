
import './App.css';
import ProfilePhoto from './Profile/ProfilePhoto.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullName from './Profile/FullName.js';
import Address from './Profile/Address';
const App = () => {
  return (
    <>
      <ProfilePhoto/>
      <FullName/>
      <Address/>
    </>
  );
};
export default App;
