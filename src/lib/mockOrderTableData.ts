import { IOrderTableRow } from "@/components/orders-table/OrderTableColDef";
import { getRandomElementFromArray } from "./utils";

export const mockOrderTableData: IOrderTableRow[] = Array.from(
  {
    length: 20,
  },
  (_, index) => ({
    sno: index.toString(),
    date: getRandomElementFromArray([
      "21 /03/2023 13 :58 : 21",
      "21 /03/2023 13 :57 : 12",
    ]),
    orderid: getRandomElementFromArray([
      "OD101",
      "OD100",
      "OD099",
      "OD098",
      "OD097",
      "OD096",
      "OD095",
      "OD094",
      "OD093",
      "OD092",
    ]),
    machinename: getRandomElementFromArray([
      "Aahaar Stall 23 (MI102)",
      "Aahaar Stall 37 (MI103)",
      "Aahaar Stall 88 (MI104)",
      "Aahaar Stall 88 (MI104)",
    ]),
    customername: getRandomElementFromArray(["Simranjeet Kaur"]),
    contact: getRandomElementFromArray(["9999999999"]),
    totalamt: getRandomElementFromArray([
      "₹ 199",
      "₹ 99",
      "₹ 298",
      "₹ 345",
      "₹ 666",
      "₹ 765",
      "₹ 328",
      "₹ 199",
      "₹ 199",
      "₹ 499",
    ]),
    status: getRandomElementFromArray([
      "SUCESS",
      "FAILURE",
      "PENDING",
      "SENT",
      "REFUND INITIATED",
      "REFUND COMPLETED",
    ]),
  }),
);
