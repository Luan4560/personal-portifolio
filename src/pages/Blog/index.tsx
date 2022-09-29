import { PostCard } from "../../components/PostCard";
import { usePostsQuery } from "../../graphql/generated";
import * as SC from "./styles";

export const Blog = () => {
  const { data } = usePostsQuery();

  return (
    <SC.Container>
      <h1>Blog</h1>
      {data?.posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          url={post.coverImage?.url}
          title={post.title}
          description={post.description || ""}
          previewText={post.previewContent || ""}
          tags={post.tags}
        />
      ))}
    </SC.Container>
  );
};
