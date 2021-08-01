import { useState } from "react"

const YellowBox = () => {
    return (
        <div className="h-30 w-30 p-10 bg-green"></div>
    )
}
 
export default function Cloth() {
    const [show, setShow] = useState(false)
    const [count, setCount] = useState(1)
    const showBox = () => {
        if (count % 2 !== 0) {
            setCount(count + 1)
            setShow(true)
        } else {
            setCount(count + 1)
            setShow(false)
        }
    }

    return (
        <div className="relative">
            <button className="h-24 w-24 bg-minion-yellow sticky text-sm text-black p-5" onClick={showBox}>
                Cool shirt click me!
            </button>
            <div className="absolute right-96 bottom-5">
                { show ? <YellowBox /> : null }
            </div>
        </div>
    )
}