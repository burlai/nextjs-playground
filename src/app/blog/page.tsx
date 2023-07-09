import Link from "next/link";

export default async function Blog() {
  const response = await fetch("https://www.reddit.com/.json");
  const postsData = (await response.json())?.data?.children?.map(
    (item: any, index: number) => ({
      title: item?.data?.title,
      slug: `reddit-post-${index}`,
    })
  );

  return (
    <section>
      <h2>Blog</h2>
      <h3 className="m-top-20">Reddit posts</h3>
      <br />
      <div>
        {postsData?.map((post: any) => {
          return (
            <div key={post.title} className="m-bottom-5">
              <Link className="link " href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
