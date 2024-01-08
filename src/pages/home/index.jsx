import { Helmet } from "react-helmet";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import dayjs from "dayjs";
import tr from "dayjs/locale/tr";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import blogs from "../../data/blogs";

dayjs.locale(tr);

export default function Home() {
  const [newBlogs, setNewBlogs] = useState({});

  useEffect(() => {
    const groupedBlogs = {};

    blogs.forEach((blog) => {
      const date =
        blog.blog_date.split(" ")[0].split("-")[0] +
        "-" +
        blog.blog_date.split(" ")[0].split("-")[1];
      if (!groupedBlogs[date]) {
        groupedBlogs[date] = [];
      }
      groupedBlogs[date].push(blog);
    });

    setNewBlogs(groupedBlogs);
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <SignedOut className="w-full">
        <div className="flex items-center justify-end">
          <SignInButton className="hover:bg-indigo-900 transition-all shadow-xl mb-4 p-4 rounded bg-indigo-500 text-white h-9 px-4 flex items-center" />
        </div>
        <p className="p-4 rounded bg-red-200 text-red-700">
          Bu içeriğe erişebilmek için giriş yapmalısınız!
        </p>
      </SignedOut>
      <SignedIn>
        <div className="grid space-y-12">
          {Object.keys(newBlogs).map((date, index) => (
            <div key={index}>
              <h3 className="mb-6">{dayjs(date).format("MMMM YYYY")}</h3>
              <div className="grid md:flex md:items-center md:flex-wrap gap-4">
                {newBlogs[date].map((blog) => (
                  <Link
                    key={blog.blog_id}
                    className="hover:scale-105 hover:bg-white/25 transition-all bg-white/10 border border-white/50 text-white font-bold text-base rounded-md p-4"
                    to={`/blogs/${blog.blog_slug}`}
                  >
                    {blog.blog_title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SignedIn>
    </>
  );
}
