import { IFilterTableRow  } from "@/components/filter-dialog/FilterTableColDef";
import { getRandomElementFromArray } from "./utils";

export const mockFilterTableData: IFilterTableRow[] = Array.from(
  {
    length: 6,
  },
  (_, index) => ({
    sno: index.toString(),
    machinename: getRandomElementFromArray([
      "Aahaar Stall 23 (MI102)",
      "Aahaar Stall 37 (MI103)",
      "Aahaar Stall 88 (MI104)",
      "Aahaar Stall 88 (MI104)",
    ]),
    address: getRandomElementFromArray(["Aahaar Stall 10, Pragti Madan, New Delhi"]),
  }),
);
