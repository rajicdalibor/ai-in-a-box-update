import './CallButton.css';

function CallButton({light}) {
    return (
        <div className={`button-wrapper ${light ? "light-button" : ""}`}>
            <div className={'call-button'}/>
        </div>
    );
}

export default CallButton;