import { PostCard } from "../../components/PostCard";
import * as SC from "./styles";

export const Blog = () => {
  return (
    <SC.Container>
      <h1>Blog</h1>

      <SC.Content>
        <PostCard />
        <PostCard />
        <PostCard />
      </SC.Content>
    </SC.Container>
  );
};
