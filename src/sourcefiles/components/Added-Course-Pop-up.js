import React, { useState } from "react";
export default function Submition_Popup() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        //this whole section is done through a tutorial (I wanted to make it a little simpler for and more professional)
        <>
            <button className="about_Btn" onClick={toggleModal}>Add</button>
            {modal && (
                <div className="modal">
                    <div className="overlay">
                        <div className="modal-content">
                            <h1 className="heading">Course added to your cart</h1>
                            <p>Course has been added to your cart for purchase</p>
                            <p>Please Pay for the course before the start date of the course</p>
                            <button className="close-modal" onClick={toggleModal}>X</button>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}