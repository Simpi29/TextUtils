
import './App.css';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';



function App() {
  return (
   <>
<Navbar title = "Title" about = "About" />
<div className='container my-3'>
<TextForm text = "Enter the Text to analyze"/>
</div>

   </>
  );
}

export default App;
