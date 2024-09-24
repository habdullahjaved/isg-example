import fs from "fs";
import path from "path";
import Link from "next/link";

// Function to fetch blog data from blogs.json
async function fetchBlogData() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return jsonData;
}

const MyBlogPage = async () => {
  // Fetch the blog data
  const blogData = await fetchBlogData();

  const { categories, posts } = blogData;

  return (
    <div>
      <h1>My Blogs</h1>

      {/* Display Categories */}
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <h3>{category.name}</h3>

            {/* Filter and display posts under each category */}
            <ul>
              {posts
                .filter((post) => post.category === category.id)
                .map((post) => (
                  <li key={post.id}>
                    <Link href={`/myblog/${category.slug}/${post.slug}`}>
                      {post.title}
                    </Link>
                    <p>Published on: {post.publishedAt}</p>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBlogPage;
