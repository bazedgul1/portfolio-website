

function ImagesSection() {
  const images = [
    "https://www.springboard.com/blog/wp-content/uploads/2022/06/full--640x395.png", // Replace with actual image URLs
    "https://th.bing.com/th/id/R.8a63007c50160a32142a595bda7cafe3?rik=UjaD4Sp%2bMVshzA&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.Y_HgwZWMf12NznwWqksV6gHaFj?rs=1&pid=ImgDetMain",
    "https://media.fourdayweek.io/files/2022-the-reality-of-being-a-staff-software-engineer-salary-workload-and-how-to-get-started-eVOcC.jpeg",
    "https://th.bing.com/th/id/OIP.CVCoQFjkLddfELxyrYBQPQHaEi?rs=1&pid=ImgDetMain",
    // "https://via.placeholder.com/200",
  ];

  return (
    <section className="py-16 bg-black">
      <div className="flex justify-evenly space-x-6 overflow-x-scroll scrollbar-hide">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="w-64 h-64 object-cover rounded-xl transform hover:scale-105 transition duration-300 ease-in-out"
          />
        ))}
      </div>
    </section>
  );
}

export default ImagesSection;
