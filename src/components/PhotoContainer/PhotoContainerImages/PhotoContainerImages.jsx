import './PhotoContainerImages.css'

export function PhotoContainerImages({src, title}) {
    const alt = title ? title : 'Gallery image';
    return <img class='photo-container__img' src={src} alt={alt}/>;
}