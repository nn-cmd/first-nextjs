import Link from "next/link";

async function getBlogs() {
  const res = await fetch("https://6608d03ea2a5dd477b14c6ca.mockapi.io/blogs");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const blogs = await getBlogs();

  return (
    <div>
      Blog List:
      {blogs.map((blog, index) => (
        <div key={index}>
          {blog.id} {blog.name}
          <Link href={`blog/${blog.id}`} className="px-4 bg-blue-400">
            Go to read blog ...
          </Link>
        </div>
      ))}
    </div>
  );
}
