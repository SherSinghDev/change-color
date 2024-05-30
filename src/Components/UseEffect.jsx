import { useEffect, useState } from "react"

export default function UseEffect(){
    const [data, setData] = useState("hello")
    const [datas, setDatas] = useState("hellos")
    function clickHandler(){
        setData("Hello World")
    }
    function clickHandler2(){
        setDatas("Hello World from me")
    }
    useEffect(()=>{
        console.log("hello")
    },[datas])
    return(
        <>
        <h1 style={{color:"hotpink"}}>{data}</h1>
        <h1 style={{color:"aqua"}}>{datas}</h1>
        <button onClick={clickHandler}> Click Me </button>
        <button onClick={clickHandler2}> Click Me 2 </button>
        </>
    )
}