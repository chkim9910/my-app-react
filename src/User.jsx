const User = ({ user }) => {
  return (
    <>
      <img
        src={user.img}
        alt={user.alt}
        style={{ width: "50px", height: "50px" }}
      />
      <strong>{user.name}</strong>
    </>
  );
};

export default User;
