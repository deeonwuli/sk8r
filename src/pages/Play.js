import Footer from '../components/Footer'
import body from '../images/body.png'
import Cloth from '../components/Cloth'

export default function Play () {
    return (
        <>
            <div className="h-5/6 m-4 flex flex-row justify-center items-center tracking-widest text-snow bg-snow">
                <div className="flex flex-row items-center justify-between rounded-lg h-5/6 w-5/6 px-5 mx-5 bg-gradient-to-l from-purple via-blush to-purple">
                    <img src={body} alt="girl" className="h-96" />
                    <Cloth />
                </div> 
            </div>
            <Footer />
        </>
    )
}
