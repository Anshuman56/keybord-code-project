
import GalleryCol from './galleryCol'
import './gallery.css'

const Gallery = () => {
    return (
        <div className='gallery'>
            <h2 className='gallery__header'>Gallery</h2>
            <div className='gallery__contener'>
                <GalleryCol />
                <GalleryCol />
                <GalleryCol />
            </div>
        </div>
    )
}
export default Gallery