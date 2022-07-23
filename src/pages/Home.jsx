import Navbar from '../components/Navbar';
import img from '../assets/profile.jpg';

function Home() {
  return (
    <>
      <Navbar />
      <div className="grid h-screen place-items-center">
        <div className="image-portofolio w-96 flex flex-col justify-center text-center">
          <img
            src={img}
            alt="react"
            className="rounded-full w-56 self-center"
          />
          <div className="text-name">
            <h3 className="font-bold text-[2rem] mt-3">Rizqi Bagus Andrean</h3>
            <p className="mt-2">Hi, saya adalah seorang yang gemar dengan IT</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
