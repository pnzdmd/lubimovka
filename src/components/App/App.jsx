import './App.css';
import Header from '../Header/Header.js';
import Play from '../Play/Play.js';
import { PhotoGallery } from '../PhotoGallery/PhotoGallery';
import { ShowInfo } from '../ShowInfo';
import { showData } from '../../assets/data';

function App() {
  return (
    <div className="page">
      <Header />
      <Play />
      <ShowInfo showData={showData} />
      <PhotoGallery gallery={showData.photoGallery} />
    </div>
  );
}

export default App;
