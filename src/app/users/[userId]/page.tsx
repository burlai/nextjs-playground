"use client";

export default async function User({ params }: any) {
  const userResponse = await fetch(
    `https://reqres.in/api/users/${params.userId}`
  );
  const userData = await userResponse.json();

  const changeUserHandler = async () => {
    const changeUser = await fetch(
      `https://reqres.in/api/users/${params.userId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: params.userId,
          first_name: "Changed first name",
          last_name: "Changed last name",
        }),
      }
    );

    const responseData = await changeUser.json();

    console.log(responseData.updatedAt);
  };

  return (
    <section>
      <h2 className="m-bottom-5">Single user with id: {userData.data.id}</h2>
      <p>
        <img src={userData.data.avatar} alt={userData.data.first_name} />
        <span className="d-block">{userData.data.first_name}</span>
        <span className="d-block">{userData.data.last_name}</span>
        <span className="d-block">{userData.data.email}</span>
      </p>
      <div className="m-top-20 m-bottom-20">
        <h3 className="m-bottom-5">Edit user: </h3>

        <button className="paddings-10" onClick={changeUserHandler}>
          Change user details!
        </button>
      </div>
    </section>
  );
}
