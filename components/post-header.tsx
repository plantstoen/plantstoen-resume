import Avatar from "./avatar";
import DateFormater from "./date-formater";
import CoverImage from "./cover-image";
import PostTitle from "./atoms/PostTitleHeader";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">ss</div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">ss</div>
        <div className="mb-6 text-lg">{date}</div>
      </div>
    </>
  );
};

export default PostHeader;
