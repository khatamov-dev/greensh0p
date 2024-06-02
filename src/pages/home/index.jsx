import CarouselComponent from "../../components/carousel";
import Container from "../../components/Container";
import Barchart from "./component/Barchart";
import Diagramm from "./component/Diagramm";
import GridBox from "./component/GridBox";
import SupportCard from "./component/SupportCard";

function HomePage() {
	return (
		<div>
			<div className="bg-[#F0F4F8]">
			<Container>
				<CarouselComponent />
			</Container>
			</div>
			<Container>
				<GridBox />
				<Diagramm />
				<Barchart />
				<SupportCard />
			</Container>
		
		</div>
		
	);
}

export default HomePage
