import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RecordList from './components/RecordList';
import ViewRecord from './components/ViewRecord';
import EditRecord from './components/EditRecord';
import CreateRecord from './components/CreateRecord';
function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<RecordList />}></Route>
          <Route path='/create' element={<CreateRecord />}></Route>
          <Route path='/view/:id' element={<ViewRecord />}></Route>
          <Route path='/edit/:id' element={<EditRecord />}></Route>
          <Route path="*" element={<h2>Page Not Found</h2>}></Route>
        </Routes>
      </Router>
  );

}

export default App;