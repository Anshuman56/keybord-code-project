import LeaderCard from "./leaderCard"
import './leader.css'
import woman from './../../images/woman.png'
import man from './../../images/man.png'


const Leader = () => {
    return (
        <div className='leader'>
            <h2 className='leader__heading'>Leadership</h2>
            <div className='leader__contener'>
                <LeaderCard name='Mrs. Hira Sahu' photoSrc={woman} designation='SARAPANCH' />
                <LeaderCard name='Mr. Sukumar Pani' photoSrc={man} designation='PANCHAYAT EXECUTIVE OFFICER' />
            </div>
        </div>
    )
}
export default Leader