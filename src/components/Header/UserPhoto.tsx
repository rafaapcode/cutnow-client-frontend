import useAuth from "../../hooks/useAuth";

const UserPhoto = () => {
  const { user } = useAuth();

  return (
    <div className="w-[73px] h-[73px] rounded-full shadow-md overflow-hidden">
      <img
        src={user.avatar}
        alt="photo of the user"
        className="object-cover size-full"
      />
    </div>
  );
};

export default UserPhoto;
