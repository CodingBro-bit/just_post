
import './App.css'
import { myposts } from './fakedb/fakepostsdb';

import Input from './InputForm/InputForm';
function App() {


  return(
        
          <Input myposts={myposts} />         
        
  );
}

export default App
