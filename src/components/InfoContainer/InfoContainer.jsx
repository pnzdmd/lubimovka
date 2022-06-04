import './InfoContainer.css'
import {TroupeContainer} from './TroupeContainer/TroupeContainer'

export function InfoContainer({showData}) {
    return <section className='info-container'>
        <TroupeContainer showData={showData} />
    </section>;
}
