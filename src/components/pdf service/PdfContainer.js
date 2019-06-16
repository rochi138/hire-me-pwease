import React from 'react';

export default (props) => {
    const bodyRef = React.createRef();
    const createPdf = () => props.createPdf(bodyRef.current);
    return (
        <section class="pdf-container">
            <section class="pdf-body" ref={bodyRef}>
                {props.children}
            </section>
            <section class="pdf-toolbar">
                <button class="button" onClick={createPdf}>THIS BUTTON DOESN'T WORK WELL.<br />BUT CLICK FOR THE FULL, TERRIBLE EXPERIENCE ANYWAY.<br />¯\_(ツ)_/¯</button>
            </section>
        </section>
    )
}