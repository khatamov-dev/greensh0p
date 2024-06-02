import { RangeSlider } from "flowbite-react";

export default function Range() {
    return (
        <div className="flex flex-col gap-2 w-[90%]">
            <p className="flex justify-between items-center font-normal text-[15px] leading-[16px]">
                <span>Сумма вклада</span>
                <span className="text-[#000] font-[700] ">1 000 000 ₽</span>
            </p>
            <RangeSlider max={200} min={5} step={5} />
            
        </div>
    )
}