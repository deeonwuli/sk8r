import girl from '../images/girl.png'

export default function Header () {
    return (
        <header className="px-4 relative bg-gradient-to-l from-purple via-blush to-purple h-5/6 flex flex-col justify-between items-center text-xl text-snow tracking-widest">
            <div className="mt-60 lg:mt-28 flex flex-row items-center">
                <div className="flex flex-col justify-between items-center lg:-mr-48 z-30">
                   <p className="text-stroke-2 lg:text-stroke-4 text-stroke-black text-5xl lg:text-9xl">Sk8r</p>
                    <button className="flex flex-row items-center border-2 w-min px-2 lg:px-5 py-2 rounded-3xl bg-blue border-blue shadow-xl hover:bg-blue-green hover:-translate-y-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                        </svg>
                        play
                    </button>
                </div>
                <img src={girl} alt="skating-girl" className="-ml-28 lg:-ml-0 z-20" />
                <div className="flex flex-col justify-between items-center -ml-28 lg:-ml-48 z-30">
                    <p className="text-stroke-2 lg:text-stroke-4 text-stroke-black text-5xl lg:text-9xl">Girl</p>
                    <button className="flex flex-row items-center border-2 w-min px-2 lg:px-5 py-2 rounded-3xl bg-blue border-blue shadow-xl hover:bg-blue-green hover:-translate-y-3">
                        settings
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="w-screen absolute left-0 bottom-0 bg-blue-green">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        </header>
    )
}