import { ColumnDef } from "@tanstack/react-table";

export interface IFilterTableRow {
  sno: string;
  machinename: string;
  address: string;
}

export const filterTableColumns: ColumnDef<IFilterTableRow>[] = [
  {
    accessorKey: "sno",
    header: () => (
      <div className="text-base text-[#377DFF]">
        <h1>S.No</h1>
      </div>
    ),
    cell: ({ row }) => {
      const colValue: string = row.getValue("sno");
      return (
        <span className="flex items-center justify-center px-2 text-sm font-normal leading-5 lg:-ml-4">
          {colValue}
        </span>
      );
    },
  },
  {
    accessorKey: "machinename",
    header: () => (
      <div className=" text-left text-base text-[#377DFF]">
        <h1>Machine Name</h1>
      </div>
    ),
    cell: ({ row }) => {
      const colValue: string = row.getValue("machinename");
      return (
        <div className="items-center justify-center space-x-2 px-2 lg:-ml-2">
          <span className="text-sm font-normal leading-5">{colValue}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "address",
    header: () => (
      <div className="text-base text-[#377DFF]">
        <h1>Address</h1>
      </div>
    ),
    cell: ({ row }) => {
      const colValue: string = row.getValue("address");
      return (
        <div className="flex items-center justify-center space-x-2 px-2">
          <span className="text-sm font-normal leading-5">{colValue}</span>
        </div>
      );
    },
  }
];
