import * as React from 'react'
import './artWorks.scss'

const images2D = [
    require('../images/2d01.jpg'),
    require('../images/2d02.jpg'),
    require('../images/2d03.jpg'),
    require('../images/2d04.jpg'),
]

const images3D = [
    require('../images/3d01.jpg'),
    require('../images/3d02.jpg'),
    require('../images/3d03.jpg'),
    require('../images/3d04.jpg'),
    require('../images/3d05.jpg'),
    require('../images/3d06.jpg'),
    require('../images/3d07.png'),
    require('../images/3d08.png'),
    require('../images/3d09.png'),
    require('../images/3d10.png'),
]

const ArtWorks = () => {
    const [viewerSrc, setViewerSrc] = React.useState('')
    const [isViewerVisible, setViewerVisible] = React.useState(false)

    const setViewer = (src: string) => {
        setViewerSrc(src)
        setViewerVisible(true)
    }

    return (
        <div className="art-works">
            <h1 className="first-title">Art Works</h1>
            <p>For hobby. 2D paints are done with Photoshop. 3D models are done with Blender and ZBrush.</p>
            <section>
                <h2>2D Painting</h2>
                <div className="three-column">
                    {images2D.map((image, index) => {
                        return <img key={index} src={image} onClick={() => setViewer(image)} alt="" />
                    })}
                </div>
            </section>
            <section>
                <h2>3D Modeling</h2>
                <div className="three-column">
                    {images3D.map((image, index) => {
                        return <img key={index} src={image} onClick={() => setViewer(image)} alt="" />
                    })}
                </div>
            </section>
            <div
                className={`image-viewer ${isViewerVisible ? 'show' : 'hide'}`}
                onClick={() => setViewerVisible(false)}
            >
                <img src={viewerSrc} alt="" />
            </div>
        </div>
    )
}

export default ArtWorks
