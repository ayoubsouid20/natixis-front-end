import { galleryImages } from '../mocks/images'
import './explore-section.css'

const ExploreSection = () => {
    return (
        <div className="explore-section-container">
            <h1 className="explore-section-title">
                Explore Our Products
                & make sure to be at the heart of it</h1>

            <div className="gallery">
                {galleryImages.map((image) => (
                    <img key={image.id} src={image.src} alt={image.alt} />
                ))}
            </div>
        </div>
    )
}

export default ExploreSection