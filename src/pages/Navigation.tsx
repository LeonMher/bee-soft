const Navigation = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/" },
    { name: "Portfolio", path: "/" },
    { name: "Blog", path: "/" },
    { name: "Contact", path: "/" },
  ];
  return (
    <div className="w-full fixed top-0 left-0 text-black ">
      <div className="md:flex items-center justify-between gap-[20px] p-[20px] bg-white py-4">
        <div>Logo</div>
        <ul className="md:flex md:items-center md:gap-[20px]">
          {links.map((link) => (
            <a href={link.path}>
              <li>{link.name}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
