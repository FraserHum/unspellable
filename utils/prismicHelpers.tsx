import * as prismic from '@prismicio/client';
import Link from 'next/link';
import React from 'react';
import {
  apiEndpoint,
  accessToken,
  linkResolver,
  hrefResolver,
} from '../prismic-configuration';

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (type, element, content, children, index) => (
  <Link
    key={element.data.id}
    href={hrefResolver(element.data)}
    as={linkResolver(element.data)}
    legacyBehavior
  >
    {content}
  </Link>
);
const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};
// Client method to query documents from the Prismic repo
const client = (req = null) => prismic.createClient(
  apiEndpoint,
  createClientOptions(req, accessToken || null),
);

export default client();
