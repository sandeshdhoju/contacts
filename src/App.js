import "antd/dist/antd.css";
import { Routes, Route } from 'react-router-dom'
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ContactList/>} />
        <Route path='/:id' element={<ContactDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
