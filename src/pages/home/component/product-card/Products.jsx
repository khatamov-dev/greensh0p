import { Container } from "postcss";
import ProductFilter from "./ProductFilter";
import ProductSale from "../ProductSale";

export default function Products() {
    return(
        <Container>
            <div className="w-full h-full">
                <div>

                    <ProductFilter />
                    <ProductSale />

                </div>

                <div>

                    <div>Tabs</div>
                    <div>Products</div>

                </div>
                
            </div>
        </Container>
    )
}