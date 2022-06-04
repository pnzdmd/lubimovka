import './TroupeContainer.css'
import {TroupeContainerTitle} from '../TroupeContainerTitle/TroupeContainerTitle'
import {TroupeContainerList} from '../TroupeContainerList/TroupeContainerList'


export function TroupeContainer({showData}) {
    return <div className='troupe-container'>
       <TroupeContainerTitle 
        duration={showData.showDuration} 
        image={showData.titleSplitImageSrc}
        age={showData.showAgeRestriction}
       />
       <TroupeContainerList 
       />
    </div>;
}