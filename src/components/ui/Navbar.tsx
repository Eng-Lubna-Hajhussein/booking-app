import Image from "next/image";
import lamIcon from "@/assets/icons/lam.svg";
import messageIcon from "@/assets/icons/message.svg";
import bellIcon from "@/assets/icons/bell.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center mb-10 px-1">
      <div className="flex space-x-4">
        <Image src={lamIcon} alt="Lam Icon" className="cursor-pointer" />
        <Image
          src={messageIcon}
          alt="Message Icon"
          className="cursor-pointer"
        />
        <Image src={bellIcon} alt="Bell Icon" className="cursor-pointer" />
      </div>
      <div>
        <h1 className="text-black text-2xl font-extrabold mt-2">المستشار</h1>
      </div>
    </nav>
  );
};

export default Navbar;
