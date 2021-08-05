import Footer from '../components/Footer'
import body from '../images/body.png'
import ButtonContainer from '../components/ButtonContainer'

export default function Play () {
    return (
        <>
            <div className="h-screen p-4 flex flex-row justify-center items-center tracking-widest text-snow bg-snow">
                <div className="flex flex-col items-center justify-between rounded-lg h-5/6 w-5/6 p-5 mx-5 bg-gradient-to-l from-purple via-blush to-purple">
                    <img src={body} alt="girl" className="h-72" />
                    <ButtonContainer />
                </div> 
            </div>
            <Footer />
        </>
    )
}
