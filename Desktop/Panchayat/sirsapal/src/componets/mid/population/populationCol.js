import './populationCol.css'
const PopulationCal = (props) => {
    return (
        <div className='populationCal'>
            <p>{props.number}</p>
            <p>{props.catagory}</p>
        </div>
    )
}
export default PopulationCal