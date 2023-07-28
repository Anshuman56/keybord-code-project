import SchemesCard from './schemesCard'
import './schemes.css'

const Schemes = () => {
    return (
        <div className='schemes'>
            <h2 className='schemes__header'>Programmes & Schemes</h2>
            <div className='schemes__contener'>
                <SchemesCard />
                <SchemesCard />
                <SchemesCard />
            </div>
        </div>
    )
}
export default Schemes