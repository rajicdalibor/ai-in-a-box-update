import ContentHeader from "./ContentHeader";
import './ContactSection.css';
import CallButton from "./CallButton";
function ContactSection() {
    return (
        <div className={'contact-wrapper'}>
            <ContentHeader headerData={{title: 'SCHEDULE A CALL', subtitle: 'Let’s Talk!'}} dark/>
            <div className={'contact-text'}>We're excited to hear from you!</div>
            <div className={'contact-text'}>Discover the possibility of AI in a Box® platform for your business. Get started with our 15-minute discovery call.</div>
            <CallButton light />
        </div>
    )
}

export default ContactSection;
