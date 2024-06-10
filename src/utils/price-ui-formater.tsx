import { priceFormater } from "./formater";

const PriceUiFormater = ({ price }: { price: number }) => {
  const frmtdPrice = priceFormater(price, 2);
  return (
    <>
      <span className="text-base">{frmtdPrice.slice(0, -2)}</span>
      <span className="text-[10px] absolute right-[-14px] top-0">.{frmtdPrice.slice(-2)}</span>
    </>
  );
};

export default PriceUiFormater;
