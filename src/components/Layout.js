import "./Layout.css";
import Navigation from "./Navigation";
import BackgroundDecoration from "./BackgroundDecoration";
import ContentSection from "./ContentSection";
function Layout() {
    return (
        <div className={'layout-wrapper'}>

        <BackgroundDecoration/>

        <div className={"container"}>
            <Navigation />
            <ContentSection />
        </div>
        </div>
    );
}

export default Layout;
