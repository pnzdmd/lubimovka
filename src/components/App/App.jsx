import './App.css';
import {InfoContainer} from '../InfoContainer/InfoContainer';
import {PhotoContainer} from '../PhotoContainer/PhotoContainer';
import PHOTO1_SRC from '../../images/photo__container/two_actors.jpg';
import PHOTO2_SRC from '../../images/photo__container/black_and_white_actress.jpg';
import PHOTO3_SRC from '../../images/photo__container/male_actor.jpg';
import PHOTO4_SRC from '../../images/photo__container/musicians.jpg';
import PHOTO5_SRC from '../../images/photo__container/auditorium.jpg';
import PHOTO6_SRC from '../../images/photo__container/actress_with_long_hair.jpg';
import PHOTO7_SRC from '../../images/photo__container/singer.jpg';
import PHOTO8_SRC from '../../images/photo__container/actress.jpg';
import IMAGE_SPLIT_TITLE from '../../images/troupe-container__image.svg';

const PHOTOS_ARR = [PHOTO1_SRC, PHOTO2_SRC, PHOTO3_SRC, PHOTO4_SRC, PHOTO5_SRC, PHOTO6_SRC, PHOTO7_SRC, PHOTO8_SRC];

const showData = {
  showDuration: '1 ч. 15 мин.',
  showAgeRestriction: '18+',
  titleSplitImageSrc: IMAGE_SPLIT_TITLE,
  troupeArr: [
    {profession: 'Драматург',
      name: 'Роберт Аскинс'},
    {profession: 'Перевод',
      name: 'Оксана Алёшина'},
    {profession: 'Адаптация текста',
      name: 'Валерий Печейкин'},
    {profession: 'Актёры',
      name: 'Фёдор Кокорев, Коля Ноекёльн, Ксения Чекина, Александр Пронькин, Владимир Морозов, Светлана Маршанкина'}
  ]
}

function App() {
  return (
    <>
      <InfoContainer showData={showData} 
      />
      <PhotoContainer 
        photoArr={PHOTOS_ARR} 
        galleryTitle={'Заголовок блока с фотографиями'} 
      />
    </>
  );
}

export default App;
