import Navbar from '../components/Navbar';

function Certificate() {
  let certificate = [
    {
      img: '/assets/images/certificates/Dasar Pemrograman Web Dicoding.png',
      title: 'Dasar Pemrograman Web',
      platform: 'Dicoding Indonesia',
    },
    {
      img: '/assets/images/certificates/Belajar Dasar Pemrograman Javascript Dicoding.png',
      title: 'Belajar Dasar Pemrograman Javascript',
      platform: 'Dicoding Indonesia',
    },
    {
      img: '/assets/images/certificates/Membuat Frontend Web Pemula Dicoding.png',
      title: 'Membuat Frontend Web Pemula',
      platform: 'Dicoding Indonesia',
    },
    {
      img: '/assets/images/certificates/Membuat Aplikasi Web Dengan React.png',
      title: 'Membuat Aplikasi Web Dengan React',
      platform: 'Dicoding Indonesia',
    },
    {
      img: '/assets/images/certificates/Membuat Aplikasi Backen Untuk Pemula.png',
      title: 'Membuat Aplikasi Backend Untuk Pemula',
      platform: 'Dicoding Indonesia',
    },
    {
      img: '/assets/images/certificates/Memulai Pemrograman Dengan Kotlin.png',
      title: 'Memulai Pemrograman Dengan Kotlin',
      platform: 'Dicoding Indonesia',
    },
    {
      img: '/assets/images/certificates/Belajar Fundamental Aplikasi Android.png',
      title: 'Belaja Fundamental Aplikasi Android',
      platform: 'Dicoding Indonesia',
    },
  ];

  return (
    <div className="flex flex-row flex-wrap py-4 w-full">
      {certificate.map((a, i) => {
        return (
          <div key={i} className="w-1/2 md:w-1/4 p-3">
            <div className="card flex flex-col justify-between shadow-xl p-2 h-full w-full text-center items-center bg-white rounded-lg">
              <div className="card-image flex h-full w-full items-center">
                <img className="object-cover" src={a.img} alt="image" />
              </div>
              <div className="card-body flex flex-col justify-between w-full text-start h-full">
                <h3 className="font-bold text-md mt-3">{a.title}</h3>
                <p className="text-white">
                  <span className="badge bg-blue-500 rounded-sm py-0 px-2 text-xs">
                    {a.platform}
                  </span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Certificate;
