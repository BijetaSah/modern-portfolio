import { GoDotFill } from "react-icons/go";

export const statusDots = [
  {
    id: 1,
    color: "text-red-500",
  },
  {
    id: 2,
    color: "text-yellow-400",
  },
  {
    id: 3,
    color: "text-green-500",
  },
];

function Dots() {
  return (
    <div className="flex">
      {statusDots.map((item) => (
        <GoDotFill className={` text-[20px]  ${item.color}`} key={item.id} />
      ))}
    </div>
  );
}
export default Dots;
