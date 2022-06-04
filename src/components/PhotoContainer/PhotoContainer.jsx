import './PhotoContainer.css'
import {PhotoContainerTitle} from './PhotoContainerTitle/PhotoContainerTitle';
import {PhotoContainerGrid} from './PhotoContainerGrid/PhotoContainerGrid'; 

export function PhotoContainer({photoArr, galleryTitle}) {
    if (!Array.isArray(photoArr)) {
        return null;
    }

    return (
        <section className='photo-container'>
            <PhotoContainerTitle text={galleryTitle} />
            <PhotoContainerGrid photoArr={photoArr}/>            
        </section>
    );
}