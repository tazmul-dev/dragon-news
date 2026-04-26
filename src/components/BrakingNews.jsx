import Marquee from "react-fast-marquee";

const newses = [
  { id: 1, title: "Massive Earthquake Shakes Coastal Region" },
  { id: 2, title: "Tech Giant Announces New AI Model" },
  { id: 3, title: "Stock Market Hits Record High" },
  { id: 4, title: "Major Football Club Wins Championship" },
  
];

const BrakingNews = () => {
    return (
        <div className="flex justify-between items-center bg-gray-200 py-4 my-4 px-2 container mx-auto">
            <button className="brn bg-red-400 text-white py-2 px-4 font-medium">Latest</button>
            <Marquee pauseOnHover={true}>
               {newses.map(news => <span key={news.id}>{news.title}</span>)}
            </Marquee>
        </div>
    );
};

export default BrakingNews;