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
const webWorkData: {
    title: string
    link: string
    sourceCode?: string
    image: string
    contents: string[]
}[] = []

const ArtWorks = () => {
    return (
        <div className="art-works">
            <h1 className="first-title">Art Works</h1>
            <p>
                For hobby. 2D paints are done with Photoshop. 3D models are
                done with Blender and Zbrush.
            </p>
            <section>
                <h2>2D Painting</h2>
                <div className="three-column">
                    {images2D.map((image, index) => {
                        return <img src={image} alt="" key={index} />
                    })}
                </div>
            </section>
            <section>
                <h2>3D Modeling</h2>
                <div className="three-column">
                    {images3D.map((image, index) => {
                        return <img src={image} alt="" key={index} />
                    })}
                </div>
            </section>
        </div>
    )
}

export default ArtWorks
