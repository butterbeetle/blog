"use client";
import { Post, getAllPosts } from "@/service/posts";
import { useState } from "react";
import PostsGrid from "./PostsGrid";
import Categories from "./Categories";

type Props = {
  posts: Post[];
  categoires: string[];
};
const ALL_POSTS = "All Posts";

export default function FilterablePosts({ posts, categoires }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <section className="flex m-10">
      <PostsGrid posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categoires]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
}
