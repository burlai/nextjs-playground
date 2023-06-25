import Link from "next/link";

export default function Description() {
  return (
    <>
      <Link style={{ color: "blue" }} href="/">
        Main page
      </Link>
      <br />
      <Link style={{ color: "blue" }} href="/about">
        About page
      </Link>
      <br />
      <h2>Description</h2>
    </>
  );
}
