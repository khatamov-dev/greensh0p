import PropTypes from "prop-types"
import Range from "./Range";

export default function ProductFilter() {
    return(
            <div className="p-2 flex flex-col gap-8 w-[310px] bg-[#fbfbfb] text-[#3d3d3d]">
                <div className="flex flex-col gap-4">
                    <FilterSectionTitle title="Categories" />
                    <ul>
                        <ListItem label={"House plants"} count={10} />
                        <ListItem label={"Potter plants"} count={5} />
                        <ListItem label={"Potter plants"} count={5} />
                        <ListItem label={"Potter plants"} count={5} />
                        <ListItem label={"Potter plants"} count={5} />
                        <ListItem label={"Potter plants"} count={5} />
                        <ListItem label={"Potter plants"} count={5} />
                        <ListItem label={"Potter plants"} count={5} />
                        <ListItem label={"Potter plants"} count={5} />
                        <ListItem label={"Potter plants"} count={5} />
                        <ListItem label={"Potter plants"} count={5} />
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <FilterSectionTitle title="Pricw Range" />
                    <Range />
                    <Button size className="bg-[#46a358] text-[16px] leading-[20px] text-white font-semibold hover:bg-[green]" >
                        Filter
                    </Button>
                </div>
                <div className="flex flex-col gap-4">
                    <FilterSectionTitle title="Size" />
                    <ul>
                        <ListItem label={"Small"} count={15} />
                        <ListItem label={"Medium"} count={10} />
                        <ListItem label={"Large"} count={11} />
                    </ul>
                </div>
            </div>
    )
}

function FilterSectionTitle({title}) {
    return <h1 className="leading-[16px] text-[18px] font-[700]">{title}</h1>
}
FilterSectionTitle.propTypes = {
    title: PropTypes.string,
};

function ListItem({label, count = 0}) {
    return(
        <li className="flex items-center cursor-pointer justify-between font-normal text-[15px] text-[#3d3d3d] hover:text-[#46a358] hover:font-semibold leading-[40px]">
            <span>{label}</span>
            <span>{{count}}</span>
        </li>
    )
}

ListItem.propTypes = {
    label: PropTypes.string,
    count: PropTypes.number,
};