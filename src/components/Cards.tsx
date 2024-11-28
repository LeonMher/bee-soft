type CardProps = {
  avatar?: string;
  full_name?: string;
  position?: string;
  description?: string;
};

export const Cards = ({
  avatar,
  full_name,
  position,
  description,
}: CardProps) => {
  return (
    <>
      <div className="flex justify-center items-center ">
        <img
          src={avatar}
          alt=""
          className="size-40 rounded-full object-cover absolute top-[-1px]"
        />
      </div>
      <div className="bg-[#02003C] h-[350px] md:h-[450px] rounded-xl mt-[100px]">
        <div className="flex flex-col justify-center items-center gap-3 p-5 pt-[100px]">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold text-[16px] md:text-[20px]">
              {full_name}
            </h3>
            <p className="text-gray-400 text-[12px] md:text-[16px]">
              {position}
            </p>
          </div>
          <p className="text-gray-400 text-[12px] md:text-[16px]">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
