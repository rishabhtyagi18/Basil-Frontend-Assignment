import { BellDot, SearchIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavbarProps {
  title: string;
  subTitle: string;
}

const Navbar: React.FC<NavbarProps> = ({ title, subTitle }) => {
  return (
    <div className="h-30 rounded-b-lg bg-white shadow-md">
      <div className="-mt-5 p-5">
        <div className="flex justify-between">
          <div className="space-y-2">
            <h1 className="text-lg">{title}</h1>
            <p className="text-sm text-[#377DFF]">{subTitle}</p>
          </div>
          <div className="flex items-center justify-between space-x-5">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value=""
                className="focus:outline-buttonprimary rounded-xl border border-gray-300 lg:px-4 py-3 lg:py-4 lg:w-60 pl-10 lg:pl-10"
              />
              <SearchIcon className="absolute left-3 lg:left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            </div>
            <BellDot className="w-12" />
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
