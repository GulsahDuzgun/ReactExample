import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import styles from './styles/modules/app.module.scss'
import AppContent from './components/AppContent'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <div className="container offset-3 col-6  my-5 todo">
        <PageTitle>THINGS TO DO</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader/>
          <AppContent/>
        </div>
      </div>
      <Toaster toastOptions={{style:{fontSize:'1.4rem'}}}></Toaster>
    </div>
  );
}

export default App;
