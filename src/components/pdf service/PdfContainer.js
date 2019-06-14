import React from 'react';

export default (props) => {
    const bodyRef = React.createRef();
    const createPdf = () => props.createPdf(bodyRef.current);
    return (
        <section class="pdf-container">
            <section class="pdf-body" ref={bodyRef}>
                {props.children}
            </section>
            <section>
                <span style={{ backgroundColor: "white" }}>This button doesn't work well.<br />But click for the full, terrible experience anyway.</span>
            </section>
            <section class="pdf-toolbar">
                <button onClick={createPdf}>¯\_(ツ)_/¯</button>
            </section>
        </section>
    )
}