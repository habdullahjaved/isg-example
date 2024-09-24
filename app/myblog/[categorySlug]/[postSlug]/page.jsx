import fs from "fs";
import path from "path";

// Use generateStaticParams instead of getStaticPaths
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const paths = jsonData.posts.map((post) => ({
    categorySlug: jsonData.categories.find((cat) => cat.id === post.category)
      .slug,
    postSlug: post.slug,
  }));

  return paths;
}

// Fetch the post data dynamically in the component
async function fetchPostData(categorySlug, postSlug) {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const post = jsonData.posts.find((p) => p.slug === postSlug);
  return post;
}

// Component to render the blog post
const BlogPostPage = async ({ params }) => {
  const { categorySlug, postSlug } = params;

  // Fetch the post data based on the slug
  const post = await fetchPostData(categorySlug, postSlug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>
        <small>Published on {post.publishedAt}</small>
      </p>
    </div>
  );
};

export default BlogPostPage;
