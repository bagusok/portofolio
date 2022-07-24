import Navbar from '../components/Navbar';
import img from '../assets/profile.jpg';

function Home() {
  return (
    <div className="w-full h-screen image-portofolio flex flex-col justify-center text-center">
      <img src={img} alt="react" className="rounded-full w-56 self-center" />
      <div className="text-name">
        <h3 className="font-bold text-[2rem] mt-3">Rizqi Bagus Andrean</h3>
        <p className="mt-2">Hi, saya adalah seorang yang gemar dengan IT</p>
      </div>
    </div>
  );
}

export default Home;
