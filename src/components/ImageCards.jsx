

const dummyVideo = [
  {
    id: 1,
    src: "https://fct-sapz.vercel.app/static/media/vid2.e3f385067a049f716806.mp4",
    title: "SAPZ Project Video",
    type: "video/mp4",
  },
  // Add more videos here if needed
];


const dummyImages = [
  {
    id: 1,
    src: ('https://fct-sapz.vercel.app/static/media/e.02f07398e5fd1991d287.jpeg'),
    alt: 'image1',
    title: 'image1'
  },
  {
    id: 2,
    src: ('https://fct-sapz.vercel.app/static/media/e3.41ae857dc71bf03c65f5.jpeg'),
    alt: 'image2',
    title: 'image2'
  },
  {
    id: 3,
    src: ('https://fct-sapz.vercel.app/static/media/e2.4800b4796ceb2fc0b511.jpeg'),
    alt: 'image3',
    title: 'image3'
  }, 
  {
    id: 4,
    src: ('https://fct-sapz.vercel.app/static/media/e5.9e9392dfb94c9dcaef29.jpeg'),
    alt: 'image4',
    title: 'image4'
  },

  {
    id: 5,
    src: ('https://fct-sapz.vercel.app/static/media/e4.9454622364e61c099dee.jpeg'),
    alt: 'image5',
    title: 'image5'
  },
  {
    id: 6,
    src: ('https://fct-sapz.vercel.app/static/media/e6.6767ce15d7bf3987cebf.jpeg'),
    alt: 'image6',
    title: 'image6'
  },
];



function ImageCard({ title = "Default Title", }) {
  return (
  <div>
     <h2 className="  text-lg md:text-xl text-center lg:text-3xl">
      {title}
     </h2>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-10
    px-20 py-8">
      {dummyImages.map((image, index) => (
        <div
          key={image.id}
          className={` overflow-hidden transform transition-transform duration-500 hover:scale-105  rounded-2xl 
            ${index % 3 === 1 ? 'scale-90 py-20' : 'scale-100'} hover:scale-105`}
        >
          <img className=" rounded-2xl shadow-2xl "
            src={image.src}

          />
       
        </div>
      ))}
    </div>
  </div>
  ); 
  
}
export { ImageCard, dummyImages };

function VideoCard() {
  return (
    <div className="py-10 w-3/5 relative ">
      
      <div className=" h-100 flex justify-center">
        {dummyVideo.map((video) => (
          <video
            key={video.id}
            controls
            className="w-full md:w-1/2 lg:w-1/3   "
          >
            <source src={video.src} type={video.type} />
            Your browser does not support the video tag.
          </video>
        ))}
          <div className="py-10 w-4/5 absolute bottom-10 -z-1 h-10 bg-gradient-to-t from-black  to-transparent " ></div>
          </div>
    </div>
  );
}
export { VideoCard, dummyVideo };