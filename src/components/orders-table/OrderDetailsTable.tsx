import * as React from "react";

interface DrinkItemProps {
  id: string;
  name: string;
  image: string;
  customization: string;
  amount: number;
  status: string;
  onRefund: () => void;
}

const DrinkItem: React.FC<DrinkItemProps> = ({
  id,
  name,
  image,
  customization,
  amount,
  status,
  onRefund,
}) => {
  const getStatusStyle = () => {
    switch (status) {
      case "SUCCESS":
        return "text-green-500 border-green-500";
      case "REFUND INITIATED":
        return "text-indigo-800 border-indigo-800";
      case "REFUND COMPLETED":
        return "text-fuchsia-700 border-fuchsia-700";
      default:
        return "";
    }
  };

  const isRefundDisabled = status !== "SUCCESS";

  return (
    <tr className="">
      <td className="whitespace-nowrap py-5 text-zinc-800">{id}</td>
      <td className="pr-2 pt-5 text-zinc-800">
        <div className="flex gap-4 py-3.5">
          <img src={image} alt={`${name} drink`} className="w-[38px]" />
          <div className="my-auto">{name}</div>
        </div>
      </td>
      <td className="py-6 text-zinc-800">{customization}</td>
      <td className="whitespace-nowrap px-2.5 py-5 text-zinc-800">
        <div className="flex justify-center gap-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/49c884da773050f52b8c1c98e84322d30b9e6c2a81d25169d9308ac9ef4e0f19?apiKey=ff29eb85e7464976a6d2464dcda446db&"
            alt="Rupee icon"
            className="my-auto aspect-square w-4 shrink-0"
          />
          <div>{amount}</div>
        </div>
      </td>
      <td className="px-2.5 py-5 text-xs font-bold leading-5 tracking-wide">
        <div
          className={`justify-center whitespace-nowrap rounded-[32px] border border-solid px-3 py-1.5 uppercase ${getStatusStyle()}`}
        >
          {status}
        </div>
      </td>
      <td className="whitespace-nowrap px-2.5 pb-3.5 pt-5 font-medium leading-9 text-white">
        <button
          className={`justify-center rounded-lg px-5 py-px ${
            isRefundDisabled ? "bg-zinc-400" : "bg-blue-500"
          }`}
          disabled={isRefundDisabled}
          onClick={onRefund}
        >
          Refund
        </button>
      </td>
    </tr>
  );
};

const drinks = [
  {
    id: "C101",
    name: "Mix Berry Smoothie",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b037597b48d10c2a43d7394d3607926ed4b4a9aa15cf996f7b44b3f6ce55e6fd?apiKey=ff29eb85e7464976a6d2464dcda446db&",
    customization: "Low Honey",
    amount: 199,
    status: "SUCCESS",
  },
  {
    id: "C010",
    name: "Blueberry Fruit Punch",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/82eb1bc08909ce229d9624daea33e1b2a98692c09e23cf1f41efb801ceadf772?apiKey=ff29eb85e7464976a6d2464dcda446db&",
    customization: "Low Honey",
    amount: 199,
    status: "REFUND INITIATED",
  },
  {
    id: "C101",
    name: "Pineapple Mojito",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4f23ae006ca660259b15583e25ebcc155f4e77d63c2dcc94e4ab22b51a082304?apiKey=ff29eb85e7464976a6d2464dcda446db&",
    customization: "Low Honey",
    amount: 199,
    status: "REFUND COMPLETED",
  },
  {
    id: "C101",
    name: "Mint Lemonade",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8e20e253927752c40f4b32fc75f5c0932b097fe677004edc50af5a422451b201?apiKey=ff29eb85e7464976a6d2464dcda446db&",
    customization: "Low Honey",
    amount: 199,
    status: "SUCCESS",
  },
];

const OrderDetailsTable: React.FC = () => {
  const handleRefund = (index: number) => {
    // Handle refund logic for the drink at the given index
    console.log(`Refund initiated for drink at index ${index}`);
  };

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="text-xs font-bold leading-6 tracking-wider text-blue-500">
              ID
            </th>
            <th className="text-xs font-bold leading-6 tracking-wider text-blue-500">
              DRINK NAME
            </th>
            <th className="text-xs font-bold leading-6 tracking-wider text-blue-500">
              CUSTOMISATION
            </th>
            <th className="text-xs font-bold leading-6 tracking-wider text-blue-500">
              AMOUNT
            </th>
            <th className="text-xs font-bold leading-6 tracking-wider text-blue-500">
              DRINK STATUS
            </th>
            <th className="text-xs font-bold leading-6 tracking-wider text-blue-500">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          {drinks.map((drink, index) => (
            <DrinkItem
              key={drink.id}
              {...drink}
              onRefund={() => handleRefund(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetailsTable;
