import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
// import CallToAction from "../components/CallToAction";

export default function Home() {
  const [posts, setPosts] = useState([]);

  // ✅ Env variable + fallback
  const API_BASE = import.meta.env.VITE_SERVER_URL || "http://localhost:3000";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("Fetching:", `${API_BASE}/api/post/getposts`);
        const res = await fetch(`${API_BASE}/api/post/getposts`);
        console.log("Response status:", res.status);

        if (!res.ok) {
          throw new Error(`Failed to fetch posts: ${res.status}`);
        }

        const data = await res.json();
        setPosts(data.posts || []);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, [API_BASE]);


  return (
    <div>
      <div className="flex flex-col gap-6 p-10 px-3 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl pt-10">
          Welcome to my Blog
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Welcome to my blog! Here you'll find a wide range of articles,
          tutorials, and resources designed to help you grow as a developer.
          Whether you're interested in web development, software engineering,
          programming languages, or best practices in the tech industry, there's
          something here for everyone. Dive in and explore the content to expand
          your knowledge and skills.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>

      <div className="mx-auto flex justify-center gap-2 py-3">
        {posts.length > 0 && (
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>

            {/* Grid with 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>

            <Link
              to="/search"
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
