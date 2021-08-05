import { useState } from "react"

const GreenShirt = () => {
    return (
        <div className="h-20 w-20 p-5 bg-green"></div>
    )
}

const YellowShorts = () => {
    return (
        <div className="h-20 w-20 p-5 bg-minion-yellow"></div>
    )
}

export default function Cloth() {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [count, setCount] = useState(1)
    const [count2, setCount2] = useState(1)

    const showBox = () => {
        if (count % 2 !== 0) {
            setCount(count + 1)
            setShow(true)
        } else {
            setCount(count + 1)
            setShow(false)
        }
    }
    const showBox2 = () => {
        if (count2 % 2 !== 0) {
            setCount2(count2 + 1)
            setShow2(true)
        } else {
            setCount2(count2 + 1)
            setShow2(false)
        }
    }

    return (
        <div className="relative flex flex-row">
            <button className="h-20 w-20 rounded-full bg-green sticky text-xs text-black px-5 mx-5" onClick={showBox}>
                Cool shirt click me!
            </button>
            <button className="h-20 w-20 rounded-full bg-minion-yellow sticky text-xs text-black px-5" onClick={showBox2}>
                Cool shorts click me!
            </button>
            <div className="absolute md:left-96 bottom-72">
                { show ? <GreenShirt /> : null }
            </div>
            <div className="absolute md:left-96 bottom-52">
                { show2 ? <YellowShorts /> : null }
            </div>
        </div>
    )
}