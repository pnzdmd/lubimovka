import './App.css';
import { PhotoGallery } from '../PhotoGallery/PhotoGallery';
import { ShowInfo } from '../ShowInfo';
import { showData } from './data';

function App() {
  return (
    <>
      <div class="page">
        <ShowInfo showData={showData} />
        <PhotoGallery gallery={showData.photoGallery} />
      </div>
    </>
  );
}

export default App;
