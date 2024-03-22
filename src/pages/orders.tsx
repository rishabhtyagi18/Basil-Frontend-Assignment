import ExcelExportIcon from "@/components/icons/ExcelExportIcon";
import SaveAsPDFIcon from "@/components/icons/SaveAsPDFIcon";
import Navbar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function OrdersPage() {
  return (
    <div className="space-y-4 p-6">
      <Navbar title="All Orders" subTitle="All Orders" />
      <div className="flex items-center justify-between">
        <Input type="text" placeholder="🔍 Search" className="w-60" />
        <div className="flex items-center space-x-4">
          <div className="rounded-lg border-2 border-[#ADB5BD] p-3 shadow-lg">
            <ExcelExportIcon />
          </div>
          <div className="rounded-lg border-2 border-[#ADB5BD] p-3 shadow-lg">
            <SaveAsPDFIcon />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between space-x-5">
        <div className="flex-grow">
        <div className="rounded-lg bg-white shadow-md">
          <div className="p-5">
            <div className="flex items-center text-[#333333] justify-between">
              <h1>Machines: 6</h1>
              <h1>Orders: 28</h1>
              <h1>Customers: 28</h1>
              <h1>Drinks: 28</h1>
              <h1>Total Amount: ₹ 25999</h1>
              <h1>Refunds Initiated: 3</h1>
            </div>
          </div>
        </div>
        <div className="mt-5 rounded-lg bg-white shadow-md">
          <div className="p-5">
            <div className="flex items-center text-[#333333] justify-between">
              <h1>Table</h1>
            </div>
          </div>
        </div>
        </div>
        <div className="lg:-mt-5">
        <div className="rounded-lg bg-white shadow-md">
          <div className="p-5">
            <div className="flex items-center">
              <div className="space-y-5">
                <h1 className="text-lg text-[#5D6679] text-center uppercase font-bold">Filter</h1>
                <div className="flex items-center space-x-32">
                  <Button variant="outline" className="text-[#5D6679] border-2 rounded-lg">Select Filters</Button>
                  <h1 className="text-[#5D6679] underline underline-offset-4">Clear All</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
