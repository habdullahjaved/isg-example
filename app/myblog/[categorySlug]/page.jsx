import fs from "fs";
import path from "path";

// Use generateStaticParams to generate paths for dynamic routes
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  // Generate dynamic paths for each category
  const paths = jsonData.categories.map((category) => ({
    categorySlug: category.slug,
  }));

  return paths; // Return an array of parameters for dynamic paths
}

// Page component for blog category
export default async function BlogCategoryPage({ params }) {
  const { categorySlug } = params; // Extract dynamic slug

  // Read JSON data
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  // Find the category based on the slug
  const category = jsonData.categories.find((cat) => cat.slug === categorySlug);

  // Filter posts that belong to the selected category
  const posts = jsonData.posts.filter((post) => post.category === category.id);

  return (
    <div>
      <h1>{category.name} Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/myblog/${category.slug}/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
