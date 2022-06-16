import Header from '../Header/Header.js';
import Play from '../Play/Play.js';
import { PhotoGallery } from '../PhotoGallery/PhotoGallery';
import { ShowInfo } from '../ShowInfo';
import { showData } from '../../assets/data';
import Footer from '../Footer/Footer.jsx'

function App() {
  return ( 
    <div className="page">
      <Header />
      <Play />
      <ShowInfo showData={showData} />
      <PhotoGallery gallery={showData.photoGallery} />
      <Footer />
    </div>
  )
}

export default App;