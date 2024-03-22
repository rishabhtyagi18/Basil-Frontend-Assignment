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
    header: () => <div className="text-base text-[#377DFF]"><h1>S.No</h1></div>,
    cell: ({ row }) => {
      const colValue: string = row.getValue("sno");
      return (
        <span className="flex lg:-ml-4 items-center justify-center px-2 text-sm font-normal leading-5">
          {colValue}
        </span>
      );
    },
  },
  {
    accessorKey: "date",
    header: () => <div className="text-base text-[#377DFF]"><h1>Date</h1></div>,
    cell: ({ row }) => {
      const colValue: string = row.getValue("date");
      return (
        <div className="flex w-[100px] lg:-ml-2 items-center justify-center space-x-2 px-2">
          <span className="text-sm font-normal leading-5">{colValue}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "orderid",
    header: () => <div className="text-base text-[#377DFF] w-[50px]"><h1>Order ID</h1></div>,
    cell: ({ row }) => {
      const colValue: string = row.getValue("orderid");
      return (
        <div className="flex w-[50px] items-center justify-center space-x-2 px-2">
          <span className="text-sm font-normal leading-5">{colValue}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "machinename",
    header: () => (
      <div className="text-base text-[#377DFF] w-[100px] text-left">
        <h1>Machine Name</h1>
      </div>
    ),
    cell: ({ row }) => {
      const colValue: string = row.getValue("machinename");
      return (
        <div className="flex w-[100px] lg:-ml-2 items-center justify-center space-x-2 px-2">
          <span className="text-sm font-normal leading-5">{colValue}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "customername",
    header: () => (
      <div className="text-base text-[#377DFF] w-[100px] text-left">
        <h1>Customer Name</h1>
      </div>
    ),
    cell: ({ row }) => {
      const colValue: string = row.getValue("customername");
      return (
        <div className="flex w-[70px] items-center justify-center space-x-2 px-2">
          <span className="text-sm font-normal leading-5">{colValue}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "contact",
    header: () => (
      <div className="text-base text-[#377DFF] w-[100px] text-left">
        <h1>Contact Number</h1>
      </div>
    ),
  },
  {
    accessorKey: "totalamt",
    header: () => (
      <div className="text-base text-[#377DFF] w-[80px] text-left">
        <h1>Total Amount</h1>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: () => <span className="text-base text-[#377DFF]">Status</span>,
    cell: ({row}) => {
      const colValue: string = row.getValue("status");

      let messageColor = "";
      if (colValue === "SUCESS") {
        messageColor = "text-[#53A450] border border-[#53A450] px-6 py-2 rounded-full"
      } else if (colValue === "FAILURE") {
        messageColor = "text-[#FF5630] border border-[#FF5630] px-6 py-2 rounded-full"
      } else if (colValue === "PENDING") {
        messageColor = "text-[#E2D900] border border-[#E2D900] px-6 py-2 rounded-full"
      } else if (colValue === "SENT") {
        messageColor = "text-[#E28800] border border-[#E28800] px-6 py-2 rounded-full"
      } else if (colValue === "REFUND INITIATED") {
        messageColor = "text-[#5053A4] border border-[#5053A4] px-6 py-2 rounded-full"
      } else if (colValue === "REFUND COMPLETED") {
        messageColor = "text-[#9D50A4] border border-[#9D50A4] px-6 py-2 rounded-full"
      }

      return (
        <div className="flex items-center space-x-4">
          <span
            className={`${messageColor} flex items-center justify-center text-sm font-normal leading-5`}
          >
            {colValue}
          </span>
        </div>
      )
    }
  },
];
