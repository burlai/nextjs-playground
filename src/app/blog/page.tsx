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
    <>
      <h2>Blog page</h2>
      <br />
      <div>
        {postsData?.map((post: any) => {
          return (
            <div key={post.title}>
              <Link className="link" href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </div>
          );
        })}
      </div>
      <br />
      <Link style={{ color: "blue" }} href="/">
        Main page
      </Link>
    </>
  );
}
