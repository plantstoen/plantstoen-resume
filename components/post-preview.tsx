import CoverImage from "./cover-image";
import Link from "next/link";
import { useEffect } from "react";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  index: number;
  excerpt: string;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  index,
  excerpt,
  slug,
}: Props) => {
  useEffect(() => {
    //console.log(index);
  }, []);

  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug" style={{ fontWeight: "bold" }}>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">{date}</div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
