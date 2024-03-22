import { ColumnDef } from "@tanstack/react-table";

export interface IOrderTableRow {
  sno: string;
  date: string;
  orderid: string;
  machinename: string;
  customername: string;
  contact: string;
  totalamt: string;
  status: string;
}

export const orderTableColumns: ColumnDef<IOrderTableRow>[] = [
  {
    accessorKey: "sno",
    header: () => <span className="text-base text-[#377DFF]">S.No</span>,
    cell: ({ row }) => {
      const colValue: string = row.getValue("sno");
      return (
        <span className="flex  items-center justify-center px-2 text-sm font-normal leading-5">
          {colValue}
        </span>
      );
    },
  },
  {
    accessorKey: "date",
    header: () => <span className="text-base text-[#377DFF]">Date</span>,
    cell: ({ row }) => {
      const colValue: string = row.getValue("date");
      return (
        <div className="flex w-[100px] items-center justify-center space-x-2 px-2">
          <span className="text-sm font-normal leading-5">{colValue}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "orderid",
    header: () => <span className="text-base text-[#377DFF]">Order ID</span>,
  },
  {
    accessorKey: "machinename",
    header: () => (
      <span className="text-base text-[#377DFF]">Machine Name</span>
    ),
  },
  {
    accessorKey: "customername",
    header: () => (
      <span className="text-base text-[#377DFF]">Customer Name</span>
    ),
  },
  {
    accessorKey: "contact",
    header: () => (
      <span className="text-base text-[#377DFF]">Contact Number</span>
    ),
  },
  {
    accessorKey: "totalamt",
    header: () => (
      <span className="text-base text-[#377DFF]">Total Amount</span>
    ),
  },
  {
    accessorKey: "status",
    header: () => <span className="text-base text-[#377DFF]">Status</span>,
  },
];
