import NavBar from "../NavBar/NavBar";
import Brand from "./Brand";
import "./BrandHeader.css"
function BrandHeader ({ children }) {
    return (
        <header>
            <Brand title="Mi App Con React"></Brand>
            <NavBar></NavBar>
        </header>
    );
}

export default BrandHeader;