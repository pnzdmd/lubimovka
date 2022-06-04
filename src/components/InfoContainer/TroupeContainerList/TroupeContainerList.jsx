import './TroupeContainerList.css'

export function TroupeContainerList({title, subtitle}) {
    return (
        <>
            <ul class='troupe-list'>
                <li class='troupe-list__item'>
                    <p class='troupe-list__title'>{title}</p>
                    <p class='troupe-list__subtitle'>{subtitle}</p>
                </li>
            </ul>
        </>
    );
}