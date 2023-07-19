import FilterablePosts from "@/components/FilterablePost";
import { getAllPosts } from "@/service/posts";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "All Posts",
    template: "관련 글",
  },
};
export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categoires={categories} />;
}
