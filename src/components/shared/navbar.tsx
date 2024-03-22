import { Input } from "@/components/ui/input";
import { BellDot } from "lucide-react";
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
            <Input type="text" placeholder="🔍 Search" />
            <BellDot className="w-12" />
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
