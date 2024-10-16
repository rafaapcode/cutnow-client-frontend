type IUserPhoto = {
  avatar: string;
}


const UserPhoto = ({ avatar }: IUserPhoto) => {
  return (
    <div className="w-[40px] h-[40px] md:w-[73px] md:h-[73px] rounded-full shadow-md overflow-hidden">
      <img
        src={avatar}
        alt="photo of the user"
        className="object-cover size-full"
      />
    </div>
  );
};

export default UserPhoto;
