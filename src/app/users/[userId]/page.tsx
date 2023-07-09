export default async function User({ params }: any) {
  const userResponse = await fetch(
    `https://reqres.in/api/users/${params.userId}`
  );
  const userData = await userResponse.json();

  console.log(userData.data);
  return (
    <section>
      <h2>Single user with id of: {userData.data.id}</h2>
      <p>
        <img src={userData.data.avatar} alt={userData.data.first_name} />
        <span className="d-block">{userData.data.first_name}</span>
        <span className="d-block">{userData.data.last_name}</span>
        <span className="d-block">{userData.data.email}</span>
      </p>
    </section>
  );
}
