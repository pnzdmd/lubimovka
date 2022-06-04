import './TroupeContainerTitle.css'

export function TroupeContainerTitle({duration, image, age}) {
    return (
        <>
        <div class='troupe-container__wrapper'>
            <h6 className="troupe-container__title">{duration}</h6>
            <img className="troupe-container__image" src={image} alt="" />
            <h6 className="troupe-container__title">{age}</h6>
        </div>
        </>
    );
}