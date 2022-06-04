import './PhotoContainerGrid.css'

import {PhotoContainerImages} from '../PhotoContainerImages/PhotoContainerImages';

export function PhotoContainerGrid({photoArr}) {
    if (!Array.isArray(photoArr)) {
        return null;
    }

    const photos = photoArr.map(
        (imageSrc) => (
            <PhotoContainerImages src={imageSrc}/>
        )
    );

    return (
        <div className='photo-container__grid-wrapper'>
            {photos}
        </div>
    );
}