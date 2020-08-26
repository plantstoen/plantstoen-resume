import Author from "./author";
import { storyType } from "./storyType";

type PostType = {
  slug: string;
  title: string;
  index: string;
  date: string;
  type: storyType;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};

export default PostType;
