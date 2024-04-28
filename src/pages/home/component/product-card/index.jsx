import PropTypes from "prop-types";

export default function ProductCard({img, title, price, id}) {
    return(
        <div className="p-2 flex flex-col gap-6">
            <img className="w-max-full max-h-[250px] object-cover" src="" alt="" />
            <div className="flex flex-col gap-1">
                <p className="font-normal text-[1rem] leading-[1rem] text-[#3d3d3d]">{title}</p>
                <p className="font-semibold text-[1.2rem] leading-[1rem] text-[#46a358]">{price}</p>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number,
}