import Author from "./author";
import { storyType } from "./storyType";

type PostType = {
  slug: string;
  title: string;
  date: string;
  index: number;
  type: storyType;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};

export default PostType;
