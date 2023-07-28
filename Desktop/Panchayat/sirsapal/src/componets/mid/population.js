import PopulationCol from "./population/populationCol"
import './population.css'

const Population = () => {
    return (
        <div className='population'>
            <h2 className='population__header'>Population Counter</h2>
            <div className='population__contener'>
                <PopulationCol number='760' catagory='Population' />
                <PopulationCol number='330' catagory='Men' />
                <PopulationCol number='430' catagory='Women' />
                <PopulationCol number='365' catagory='Houses' />
            </div>
        </div>
    )
}
export default Population