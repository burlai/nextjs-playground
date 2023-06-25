import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link style={{ color: "blue" }} href="/about">
        About page
      </Link>
      <br />
      <Link style={{ color: "blue" }} href="/about/address">
        Address page
      </Link>
      <br />
      <Link style={{ color: "blue" }} href="/about/description">
        Description page
      </Link>
      <br />
      <h1>Main App Page</h1>
    </>
  );
}
