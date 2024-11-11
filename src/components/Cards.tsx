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
    <div>
      <div className="w-300px">
        <img src={avatar} alt="" className="w-300px" />
      </div>
      <div>
        <h3>{full_name}</h3>
        <p>{position}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
