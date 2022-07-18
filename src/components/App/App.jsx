import Header from '../Header/Header.js';
import Play from '../Play/Play.js';
import { PhotoGallery } from '../PhotoGallery/PhotoGallery';
import { ShowInfo } from '../ShowInfo';
import { showData } from '../../assets/data';
import Reviews from "../Reviews/Reviews";
import Footer from '../Footer/Footer.jsx'

import './App.css';
import MobileMenu from '../MobileMenu/MobileMenu';

function App() {

  return (
    <div className="page">
      <Header />
      <Play />
      <ShowInfo showData={showData} />
      <PhotoGallery gallery={showData.photoGallery} />
      <Reviews />
      <Footer />

      <MobileMenu />

    </div>
  )
}

export default App;
