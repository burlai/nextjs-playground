import Link from "next/link";

export default function Address() {
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
      <h2>Address</h2>
    </>
  );
}
