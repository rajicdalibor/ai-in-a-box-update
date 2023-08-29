import "./layout.css";
import Header from "./Header";
import Navigation from "./Navigation";
import ContentBox from "./ContentBox";
import OverviewBox from "./OverviewBox";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import BackgroundBoxes from "./BackgroundBoxes";
function Layout() {
    return (
        <div className={'layout-wrapper'}>

        <BackgroundBoxes/>

        <div className={"container"}>
            <Navigation />

            <div id={'ai'} className={"content-wrapper"}>
                <section>
                    <Header />
                </section>
                <ContentBox
                    id={'components'}
                    headerData={{title: 'COMPONENTS', subtitle: 'Powering Possibilities', header: 'Explore the key components of AI in the Box® platform'}}
                    contentHeader={'Image Quality Assessment'} contentText={["Ensure optimal document representation with Image Quality Assessment, accurately ", <strong><i>evaluating image quality</i></strong>, " as high or low for further processing."]}
                    image={'image-quality.svg'}
                />
                <ContentBox
                    contentHeader={'OCR Extraction'}
                    contentText={["Unlock the content within documents with OCR Extraction, efficiently ", <strong><i>evaluating image quality</i></strong>, " and analysis."]}
                    image={'ocr-extraction.svg'}
                    imageFirst
                />
                <ContentBox
                    contentHeader={'Image Classification'}
                    contentText={[<strong><i>Simplify image categorization</i></strong>, " with Image Classification, efficiently sorting and organizing images based on their distinct attributes and features."]}
                    image={'image-classification.svg'}
                />
                <ContentBox
                    contentHeader={'Document Tagging'}
                    contentText={["Enhance document organization and retrieval with Document Tagging, an efficient solution to ", <strong><i>categorize and label documents</i></strong>, " based on their content and metadata."]}
                    image={'document-tagging.svg'}
                    imageFirst
                />
                <ContentBox
                    contentHeader={'Data Extraction'}
                    contentText={["Efficiently ", <strong><i>extract specific fields from text</i></strong>, " with our advanced Data Extraction component, providing structured data for better analysis and decision-making."]}
                    image={'data-extraction.svg'}
                />
                <ContentBox
                    contentHeader={'Summarization'}
                    contentText={["Get to the heart of your text with Text Summarization, a powerful service that condenses ", <strong><i>lengthy content into concise, informative summaries.</i></strong>]}
                    image={'summarization.svg'}
                    imageFirst
                />
                <ContentBox
                    contentHeader={'Zero-Shot Classification'}
                    contentText={["Empower your text analysis with Zero-shot Classification, a cutting-edge service that accurately ", <strong><i> classifies text without the need for predefined categories </i></strong>, " or labels."]}
                    image={'zero-shot-classification.svg'}
                />
                <ContentBox
                    contentHeader={'Question Answering'}
                    contentText={["Efficiently ", <strong><i>find answers within text</i></strong>, " with our Question Answering component, providing accurate information retrieval for improved understanding."]}
                    image={'question-answering.svg'}
                    imageFirst
                />

                <section className={"content-box-container"}>
                    <OverviewBox/>
                </section>

                <ContentBox
                    id={'services'}
                    headerData={{title: 'SERVICES', subtitle: 'Elevate Your Experience', header: 'Discover our range of AI in the Box® services'}}
                    contentHeader={'Document Classification'}
                    contentText={["Simplify document management with our Document Classification service, accurately categorizing and organizing your files for easy retrieval and streamline."]}
                    image={'document-classification.svg'}
                    contentLink={'https://www.google.com'}
                />
                <ContentBox
                    contentHeader={'Field Extraction'}
                    contentText={["Empower your data-driven processes with Field Extraction, a powerful combination of OCR and data retrieval, extracting and organizing critical information from documents seamlessly."]}
                    image={'field-extraction.svg'}
                    imageFirst
                    contentLink={'https://www.google.com'}
                />
                <ContentBox
                    contentHeader={'Document Enrichment'}
                    contentText={["Elevate your documents' value with Document Enrichment, featuring Classification, Summarization, and Tagging, to improve organization, understanding, and accessibility."]}
                    image={'document-enrichment.svg'}
                />
                <ContentBox
                    contentHeader={'Claims Processing'}
                    contentText={["Accelerate customers' reimbursement with our efficient Claims Processing service, ensuring swift and accurate handling of claims."]}
                    image={'claims-processing.svg'}
                    imageFirst
                />
                <ContentBox
                    contentHeader={'Empowering Intelligence'}
                    contentText={["3ap is your strategic partner for digitalisation. Together with you, we develop meaningful strategies, MVPs or first-class, scalable digital solution. "]}
                    image={'empowering-intelligence.svg'}
                    buttonText={'ABOUT 3AP'}
                />
                <ContactSection/>
                <Footer/>
            </div>
        </div>
        </div>
    );
}

export default Layout;
