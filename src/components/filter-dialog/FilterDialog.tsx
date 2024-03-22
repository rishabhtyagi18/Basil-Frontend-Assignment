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

interface IProps {
  children: ReactNode;
}

export default function FilterDialog(props: IProps) {
  const { children } = props;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="pb-16 pl-16 pr-16 pt-12">
        <form>
          <DialogHeader className="flex items-center">
            <DialogTitle className="font-semibold uppercase">
              Filter
            </DialogTitle>
          </DialogHeader>
          <div>
            <h1>hello</h1>
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
