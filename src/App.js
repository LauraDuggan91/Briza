import './styles/App.scss';

import React, {useState} from 'react';
import Button from './components/Button';
import StartModal from './containers/StartModal';


const App = () => {

  const [modalOpen, setModalOpen ] = useState(false)


  return (
    <div className='App'>
      <div className='overlay'>
        <div className='intro-button'>
          <Button size='md' variant='success' onClick={() => setModalOpen(!modalOpen)}>CLICK TO START</Button>
        </div>

        {modalOpen && (
          <StartModal/>
        )}
      </div>

     
    </div>
  );
}

export default App;
