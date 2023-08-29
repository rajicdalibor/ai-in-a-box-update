import './callButton.css';
import { PopupButton } from "react-calendly";

function CallButton({light}) {
    return (
            <PopupButton
                url="https://calendly.com/raphael-3ap/ai-in-a-box-discovery-call"
                text="Schedule a call"
                rootElement={document.getElementById("root")}
                className={`call-button ${light ? "light-button" : ""}`}
            />
    );
}

export default CallButton;