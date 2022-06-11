import styles from './App.module.css';
import { PhotoGallery } from '../PhotoGallery/PhotoGallery';
import { ShowInfo } from '../ShowInfo';
import { showData } from '../../assets/data';

function App() {
  return (
    <>
      <div className={styles.page}>
        <ShowInfo showData={showData} />
        <PhotoGallery gallery={showData.photoGallery} />
      </div>
    </>
  );
}

export default App;
