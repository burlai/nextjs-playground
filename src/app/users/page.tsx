import Link from "next/link";

export default async function Users() {
  const usersResponse = await fetch("https://reqres.in/api/users");
  const usersData = await usersResponse.json();

  console.log(usersData.data);
  return (
    <section>
      <h2>Users</h2>
      {usersData.data.map((user: any) => (
        <Link
          className="link d-block m-bottom-5"
          key={user.id}
          href={`/users/${user.id}`}
        >
          <span>{user.first_name}</span>
          <span>{user.last_name}</span>
        </Link>
      ))}
    </section>
  );
}
