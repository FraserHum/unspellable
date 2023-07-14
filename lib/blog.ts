import { predicateQuery } from '../utils/queries';

export async function getSortedBlogData() {
  const response = await predicateQuery('document.type', 'blog_post');
  // response is the response object, response.results holds the documents
  const allBlogsData = response.results.map((blog) => {
    const id = blog.uid;
    const date = blog.first_publication_date;

    const title = blog.data.title[0].text;
    const subject = blog.data.subject[0].text;

    // Combine the data with the id
    return {
      id,
      date,
      title,
      subject,
    };
  });

  // Sort posts by date
  return allBlogsData.sort((a, b) => {
    if (a.date > b.date) {
      return 1;
    }
    return -1;
  });

  // response is the response object, response.results holds the documents
}

export async function getAllBlogIds() {
  const blogs = predicateQuery('document.type', 'blog').then((blogsData) => blogsData.results.map((blog) => ({
    params: {
      id: blog.uid,
    },
  })));

  return blogs;
}

export async function getBlogData(id) {
  const blog = await predicateQuery('my.blog.uid', id);

  return {
    id,
    ...blog.results,
  };
}
