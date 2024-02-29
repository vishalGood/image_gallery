import React from 'react'
import "./Image_gallery.css"
const Image_gallery = () => {
    const photo = ["images/image1.jpg", "images/image2.jpeg", "images/image3.jpeg", "images/image4.jpeg", "images/image5.jpeg", "images/image6.jpeg", "images/image7.jpeg", "images/image8.jpeg", "images/image9.jpeg", "images/image10.jpg", "images/image11.jpg", "images/image12.jpg", "images/image13.jpg", "images/image14.jpg", "images/image15.jpg"]
    return (
        <>
           
            <div className="wrapper">
                <div className="container">
                    <h1>MY Gallery</h1>
                    <div className="gallery">
                        {photo.map((img, i) => {
                            return (
                                <figure className="card">
                                    <img key={i} src={img} />
                                    <figcaption>{`image ${i}`}</figcaption>
                                </figure>
                            )


                        })}
                        
                    </div>
                </div>
            </div>



        </>
    )
}

export default Image_gallery