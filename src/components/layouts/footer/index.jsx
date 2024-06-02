import Container from "../../Container";
import ContactFooter from "./components/ContactFooter";
import FooterCollapse from "./components/FooterCollapse";
import SearchFooter from "./components/SearchFooter";

export default function Footer() {
	return (
		<Container>
			<footer className='flex flex-col gap-[2rem] bg-[#F0F4F8]'>

				<SearchFooter />


				<ContactFooter />
				
				
			</footer>
		</Container>
	);
}
