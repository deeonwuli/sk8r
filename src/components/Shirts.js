import { useState } from "react"

export default function Shirts() {
    const [show, setShow] = useState(false)
    const [shirtColor, setColor] = useState("")
    const [lastButtonId, setLastButtonId] = useState(undefined)

    const showBox = (buttonId) => {
        if (lastButtonId === undefined){
            setShow(true)
        }
        else{
            if (lastButtonId === buttonId){
                setShow(!show)
            }else{
                setShow(true)
            }
        }
        setLastButtonId(buttonId)
    }

    const shirts = [
        {
            id: 0,
            name: 'red',
            colour: '#ff0000'
        },
        {
            id: 1,
            name: 'pink',
            colour: '#ffd1df'
        },
        {
            id: 2,
            name: 'green',
            colour: '#4B4ED0'
        },
        {
            id: 3,
            name: 'yellow',
            colour: '#FDE74C'
        }
    ]

    return (
        <>
            <div className="relative flex flex-row p-10 bg-gray-400 rounded-full w-full md:w-min overflow-scroll">
                {shirts.map((shirt) => (
                    <div key={shirt.id}>
                        <button className="mx-5 px-5 text-black" style={{ backgroundColor: shirt.colour }} onClick={() => {
                            showBox(shirt.id);
                            setColor(shirt.colour);
                        }}>
                            {shirt.name}
                        </button>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-96 right-">
                { show ? (
                    <div className="h-16 w-16 p-5" style={{ backgroundColor: `${shirtColor}` }}></div> 
                ) : (
                    null
                )}
            </div>
        </>
    )
}