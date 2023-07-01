import React from 'react'
import Image from 'next/image'

const FullWidthImage = ({ slice }) => (
    <section className="full-width-image content-section">
        <Image src={slice.primary.image.url} alt={slice.primary.image.alt} />
    </section>
)

export default FullWidthImage
