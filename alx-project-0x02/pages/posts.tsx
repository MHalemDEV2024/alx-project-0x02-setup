import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <Header />
      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        {loading && <p>Loading posts...</p>}
        {!loading && posts.length === 0 && <p>No posts available.</p>}
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </main>
    </>
  );
}
