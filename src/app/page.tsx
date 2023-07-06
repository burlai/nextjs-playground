import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link style={{ color: "blue" }} href="/blog">
        Blog
      </Link>
      <Link style={{ color: "blue" }} href="/about">
        About
      </Link>
      <br />
      <h1>Main App Page</h1>
    </>
  );
}
