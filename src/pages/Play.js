import Footer from '../components/Footer'
import body from '../images/body.png'
import { Link } from 'react-router-dom'
import AssetSelector from '../components/AssetSelector'

export default function Play () {
    return (
        <>
            <div className="h-screen p-4 flex flex-row justify-center items-center tracking-widest text-snow bg-snow">
                <div className="flex flex-col relative items-center justify-between rounded-lg h-5/6 w-5/6 p-5 mx-5 bg-gradient-to-l from-purple via-blush to-purple">
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 absolute left-5 hover:-translate-y-2 hover:scale-125" viewBox="0 0 20 20" fill="#FDE74C">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                        </svg>
                    </Link>
                    <img src={body} alt="girl" className="h-72" />
                    <AssetSelector />
                </div> 
            </div>
            <Footer />
        </>
    )
}
