type IUserPhoto = {
  avatar: string;
  className?: string;
}


const UserPhoto = ({ avatar, className }: IUserPhoto) => {
  return (
    <div className={!className ? "w-[40px] h-[40px] md:w-[73px] md:h-[73px] rounded-full shadow-md overflow-hidden" : className}>
      <img
        src={avatar}
        alt="photo of the user"
        className={`object-cover size-full ${className && "rounded-md"}`}
      />
    </div>
  );
};

export default UserPhoto;
