import React from 'react';
import { RichText } from 'prismic-reactjs';
import Image from "next/legacy/image";
import DocLink from '../DocLink';
import { linkResolver } from '../../prismic-configuration';

function ImageHighlight({ slice }) {
  return (
    <section className="highlight content-section">
      <div className="highlight-left">
        <RichText render={slice.primary.title} linkResolver={linkResolver} />
        <RichText render={slice.primary.headline} linkResolver={linkResolver} />
        <p>
          <DocLink link={slice.primary.link}>
            {RichText.asText(slice.primary.link_label)}
          </DocLink>
        </p>
      </div>
      <div className="highlight-right">
        <Image
          src={slice.primary.featured_image.url}
          alt={slice.primary.featured_image.alt}
        />
      </div>
    </section>
  );
}

export default ImageHighlight;
