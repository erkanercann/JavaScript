import React from "react";

export default function Image(props) {
    const {
        name = "Unknown",
        src = "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg",
    } = props;

    return (
        <div className="photo">
            <p>Photographer: {name}</p>
            <img src={src} alt="" />
        </div>
    );
}
