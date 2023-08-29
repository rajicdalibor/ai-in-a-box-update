import "./contentBox.css";
function ContentSection({id, child}) {
    return (
        <section id={id}>
            {child}
        </section>
    )
}
export default ContentSection;
