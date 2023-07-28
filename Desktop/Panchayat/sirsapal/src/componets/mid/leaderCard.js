
import './leaderCard.css'

const LeaderCard = (props) => {
    return (
        <div className='leader__card-contener'>
            <div className='leader__card-image-contener'>
                <img className='leader__style-image' src={props.photoSrc} alt=''></img>
            </div>
            <div className='leader__card-text-contener'>
                <h3 className='leader__card-text__header'>{props.name}</h3>
                <h4 className='leader__card-text__title'>{props.designation}</h4>
            </div>
        </div>
    )
}
export default LeaderCard