import { Flex } from "@chakra-ui/react";
import ProductFour from "./ProductFour";
import ProductOne from "./ProductOne";
import ProductThree from "./ProductThree";
import ProductTwo from "./ProductTwo";

function AllProduct(){

return (
    <Flex bgColor="rgb(245,247,250)" margin="10px" paddingTop="50px" paddingBottom="50px">
        <ProductThree />
        <ProductTwo />
        <ProductOne />
        <ProductFour />
        <ProductOne />
        <ProductTwo />
    </Flex>
)

}
export default AllProduct