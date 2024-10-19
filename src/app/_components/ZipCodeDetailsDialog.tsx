import React, { Suspense } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { Button } from "@/app/_components/ui/button";
import ViewSvg from "@/assets/svg/ViewSvg";
import ZipCodeData from "./ZipCodeData";
import TableSkeleton from "./TableSkeleton";

interface ZipCodeDetailsDialogProps {
  zipCode: number;
}
const ZipCodeDetailsDialog: React.FC<ZipCodeDetailsDialogProps> = (props) => {
  const { zipCode } = props;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="lg:hidden lg:group-hover:block right-4 top-4 absolute p-2 rounded-full h-auto w-auto">
          <ViewSvg className="w-4 h-3.5 stroke-current" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm md:max-w-screen-md max-h-[85vh] overflow-auto rounded-lg flex">
        <Suspense
          fallback={
            <div className="w-full ">
              <TableSkeleton />
            </div>
          }
        >
          <ZipCodeData zipCode={zipCode} />
        </Suspense>
      </DialogContent>
    </Dialog>
  );
};

export default ZipCodeDetailsDialog;
