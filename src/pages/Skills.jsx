import Navbar from '../components/Navbar';

const skills = [
  {
    img: 'https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png',
    title: 'HTML 5',
    experience: '3 years experience',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
    title: 'CSS',
    experience: '3 year experince',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
    title: 'Javascript',
    experience: '3 year experience',
  },
  {
    img: 'https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg',
    title: 'MySQL',
    experience: '3 year experience',
  },
  {
    img: 'https://pngimg.com/uploads/php/php_PNG42.png',
    title: 'PHP',
    experience: '3 year experience',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/768px-Bootstrap_logo.svg.png',
    title: 'Bootstrap',
    experience: '2 year experience',
  },
  {
    img: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/jquery_plain_wordmark_logo_icon_146445.png',
    title: 'jQUery',
    experience: '2 years experience',
  },
  {
    img: 'https://blog.desdelinux.net/wp-content/uploads/2022/05/Nginx.jpg',
    title: 'NGINX',
    experience: '2 years experience',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207',
    title: 'React JS',
    experience: '3 months experience',
  },
  {
    img: 'https://www.ruhidesain.com/wp-content/uploads/2017/10/nodejs-logo-e1497443346889.png',
    title: 'Node JS',
    experience: '5 months experience',
  },
  {
    img: 'https://i.pinimg.com/originals/17/06/c9/1706c9f16bd08eb5e03f1df3e0a94a1c.png',
    title: 'Figma',
    experience: '1 years experience',
  },
  {
    img: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/debian_logo_icon_168290.png',
    title: 'Debian',
    experience: '2 years experience',
  },
  {
    img: 'https://www.pngkit.com/png/detail/287-2876717_file-mikrotik-logo-mikrotik-logo-png.png',
    title: 'Mikrotik RouterOS',
    experience: '2 years experince',
  },
  {
    img: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg',
    title: 'Tailwind CSS',
    experience: '2 months experience',
  },
];

function Skills() {
  return (
    <div className="flex flex-row flex-wrap py-4 w-full">
      {skills.map((a, i) => {
        return (
          <div key={i} className="w-1/3 md:w-1/5 p-3">
            <div className="card flex flex-col justify-between shadow-xl p-2 text-center h-48 w-full text-center items-center bg-white rounded-lg">
              <div className="card-image flex h-full items-center">
                <img className="w-24" src={a.img} alt="image" />
              </div>
              <div className="card-body w-full">
                <h3 className="font-bold text-md mt-3">{a.title}</h3>
                <p className="text-sm font-regular">{a.experience}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
