import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";

interface IProps {
  children: ReactNode;
}

export default function FilterDialog(props: IProps) {
  const { children } = props;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-screen-md pb-16 pl-16 pr-16 pt-12">
        <form className="space-y-10">
          <DialogHeader className="flex items-center">
            <DialogTitle className="font-semibold uppercase">
              Filter
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value=""
                className="focus:outline-buttonprimary w-full rounded-xl border border-gray-300 px-4 py-3 pl-10"
              />
              <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            </div>
            <div>
              <h1>Machine</h1>
            </div>
            <div>
              <h1>Status</h1>
            </div>
            <div>
              <h1>Date Range</h1>
            </div>
          </div>
          <DialogFooter className="">
            <Button>Clear All</Button>
            <Button>Apply</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
