import Pin from "../Icons/Pin";
import ArrowR from "../Icons/ArrowR";
import { useState } from "react";
import ChevronL from "../Icons/ChevronL";
import ChevronR from "../Icons/ChevronR";

interface Props {
  className?: string;
  price: number;
}

const CardBuy = ({ className, price }: Props) => {
  const [count, setCount] = useState(1);
  const total = price * count;

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className={className}>
      <div className="w-full p-3">
        <div className="border-b py-3">
          <div className="flex justify-between font-bold">
            Ship to <span className="flex items-center font-normal"><Pin /> Brazil</span>
          </div>
        </div>
        <div className="py-6 border-b">
          <span className="flex gap-2 items-center font-semibold pb-2">Delivery <ArrowR /></span>
          <span className="font-semibold">Free shipping</span>
          <p>delivery by <b>3 days</b></p>
        </div>
        <div className="py-6 border-b">
          <span className="flex gap-2 items-center font-semibold pb-2">Service <ArrowR /></span>
          <p>Buyer protection</p>
        </div>

        <div className="py-6 flex gap-2">
          <span className="font-semibold">Quantity:</span>
          <div className="flex items-center gap-1">
            <button className="border border-black rounded-full" onClick={decrementCount}><ChevronL /></button>
            <span>{count}</span>
            <button className="border border-black rounded-full" onClick={incrementCount}><ChevronR /></button>
          </div>
        </div>
        <div className="font-semibold pb-4">Total Price: $ {total.toFixed(2)}</div>

        <button className="flex items-center justify-center bg-[#ffb803] w-full rounded-lg py-2 font-semibold hover:bg-[#ffb803e0] border mb-4">Buy now</button>
        <button className="flex items-center justify-center bg-[#ffb80385] w-full rounded-lg py-2 font-semibold hover:bg-[#ffb8035e] border">Add to Cart</button>
      </div>
    </div>
  );
};

export default CardBuy;
