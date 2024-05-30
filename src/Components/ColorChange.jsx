import { useState } from "react"

export default function () {
    const [color, setColor] = useState("black");
    document.querySelector("body").style.backgroundColor = `${color}`

    return (
        <>
            <div className="btn-box">
                <button className="violet" onClick={() => setColor("violet")}>Violet</button>
                <button className="indigo" onClick={() => setColor("indigo")}>Indigo</button>
                <button className="blue" onClick={() => setColor("blue")}>Blue</button>
                <button className="green" onClick={() => setColor("green")}>Green</button>
                <button className="yellow" onClick={() => setColor("yellow")}>Yellow</button>
                <button className="orange" onClick={() => setColor("orange")}>Orange</button>
                <button className="red" onClick={() => setColor("red")}>Red</button>
            </div>
        </>
    )
}