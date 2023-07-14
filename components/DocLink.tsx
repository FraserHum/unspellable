/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/no-named-default
import { default as NextLink } from 'next/link';
import { Link } from 'prismic-reactjs';

import { linkResolver, hrefResolver } from '../prismic-configuration';

// Main DocLink component function for generating links to other pages on this site
function DocLink({ children, link }) {
  if (link) {
    const linkUrl = Link.url(link, linkResolver);

    // If the link is an internal link, then return a NextLink
    if (link.link_type && link.link_type === 'Document') {
      return (
        <NextLink as={linkUrl} href={Link.url(link, hrefResolver)}>
          {children}
        </NextLink>
      );
    }

    // Otherwise return a normal anchor element
    return <a href={linkUrl}>{children}</a>;
  }
  return null;
}

export default DocLink;
