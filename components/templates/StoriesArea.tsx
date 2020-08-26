import PostPreview from "../post-preview";
import Post from "../../types/post";
import IndexHeader from "../atoms/IndexHeader";

type Props = {
  posts: Post[];
};

const StoriesArea = ({ posts }: Props) => {
  return (
    <section>
      <IndexHeader margin={"0 0 20px 0"}>Stories</IndexHeader>
      <div className="grid grid-cols-1 md:grid-cols-3 md:col-gap-8 lg:col-gap-8 row-gap-10 md:row-gap-16 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            index={post.index}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default StoriesArea;
