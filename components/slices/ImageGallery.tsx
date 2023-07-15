import React from 'react';
import { RichText } from 'prismic-reactjs';
import Image from "next/legacy/image";
import DocLink from '../DocLink';
import { linkResolver } from '../../prismic-configuration';

function GalleryItem({ item }) {
  return (
    <div className="gallery-item">
      <Image src={item.image.url} alt={item.image.alt} />
      <RichText render={item.image_description} linkResolver={linkResolver} />
      <p className="gallery-link">
        <DocLink link={item.link}>{RichText.asText(item.link_label)}</DocLink>
      </p>
    </div>
  );
}

function ImageGallery({ slice }) {
  return (
    <section className="image-gallery content-section">
      <RichText
        render={slice.primary.gallery_title}
        linkResolver={linkResolver}
      />
      <div className="gallery">
        {slice.items.map((item, index) => (
          <GalleryItem item={item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default ImageGallery;
