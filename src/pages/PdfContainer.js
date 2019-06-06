import React from 'react';

export default (props) => {
    const bodyRef = React.createRef();
    const createPdf = () => props.createPdf(bodyRef.current);
    return (
        <section className="pdf-container">
            <section className="pdf-body" ref={bodyRef}>
                {props.children}
            </section>
            <section>
                <span style={{ backgroundColor: "white" }}>This button doesn't work well.<br />But click for the full, terrible experience anyway.</span>
            </section>
            <section className="pdf-toolbar">
                <button onClick={createPdf}>¯\_(ツ)_/¯</button>
            </section>
        </section>
    )
}