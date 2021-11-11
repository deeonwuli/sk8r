import Footer from "../components/Footer";

export default function Play() {
  return (
    <div className="h-screen w-screen">
      <div className="w-full h-5/6 bg-gradient-to-l from-purple via-blush to-purple relative flex flex-col justify-center items-center">
        <div className="container">
          <img src="/images/body.png" alt="fashion girl" style={{height: "32rem"}} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
