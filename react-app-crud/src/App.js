import { Route, Routes } from 'react-router-dom';
import './App.css';
import { UpdateTudo } from './components/tudo/UpdateTudo';
import { Layout } from './components/tudo/Layout';
import { TudoList } from './components/tudo/TudoList';
function App() { 
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout />}>
            <Route path='/tudoList' element={<TudoList />}/>
            </Route>
            <Route path='/updateTudo/:id' element={<UpdateTudo/>}/>
         </Routes>
    </div>
  );
}
export default App;
