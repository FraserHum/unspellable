// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = 'https://unspellable.cdn.prismic.io/api/v2';

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = '';

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'episode') {
    return `/episodes/${doc.uid}`;
  }
  if (doc.uid === 'episodes') {
    return '/episodes';
  }
  if (doc.uid === 'blog') {
    return '/blog';
  }
  if (doc.type === 'blog_post') {
    return `/blog/${doc.uid}`;
  }
  if (doc.uid === 'art') {
    return '/art';
  }
  if (doc.uid === 'world') {
    return '/world';
  }
  if (doc.uid === 'about') {
    return '/about';
  }

  return '/';
};

// Additional helper function for Next/Link component
export const hrefResolver = (doc) => {
  if (doc.type === 'episode') {
    return '/episodes/[uid]';
  }
  if (doc.uid === 'episodes') {
    return '/episodes';
  }
  if (doc.type === 'blog_post') {
    return '/blog/[uid]';
  }
  if (doc.uid === 'blog') {
    return '/blog';
  }
  if (doc.uid === 'art') {
    return '/art';
  }
  if (doc.uid === 'world') {
    return '/world';
  }
  if (doc.uid === 'about') {
    return '/about';
  }
  return '/';
};
