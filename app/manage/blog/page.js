
import { headers } from "next/headers";
import Link from "next/link";

async function getBlogs() {
  const res = await fetch("https://6608d03ea2a5dd477b14c6ca.mockapi.io/blogs");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const headerRequest = headers();
  const user = JSON.parse(headerRequest.get("user"));
  const blogs = await getBlogs();
  return (
    <div>
      Manage Blog <div>{user.email}</div>
      <div>
        Blog List:
        {blogs.map((blog, index) => (
          <div key={index}>
            {blog.id} {blog.name}
            <Link href={`/manage/blog/${blog.id}`} className="px-4 bg-blue-400">
              Go to edit blog ...
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
