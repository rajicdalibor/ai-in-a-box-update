import "./Layout.css";
import Navigation from "./Navigation";
import BackgroundDecoration from "./BackgroundDecoration";
import ContentSection from "./ContentSection";
import {useEffect} from "react";
function Layout() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
        script.async = true;
        script.onload = () => {
            const elementsCollection = document.getElementsByClassName('call-button');

            Array.from(elementsCollection).forEach(function (element) {
                // eslint-disable-next-line no-undef
                calendar.schedulingButton.load({
                    url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2PusKAdhs14cJjaOcj2T6yN-IK3rVNRM7Y0mH5JNZY7GKiRZZYvOTFLIk4oRmdZP4XTXJ92zyQ?gv=true',
                    color: '#039BE5',
                    label: 'Schedule a call',
                    className: 'teeest',
                    target: element
                });
            });
        };
        document.body.appendChild(script);
    }, []);

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
