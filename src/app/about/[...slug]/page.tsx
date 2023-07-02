import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link style={{ color: "blue" }} href="/">
        Main page
      </Link>
      <h2>Slug</h2>
    </>
  );
}
