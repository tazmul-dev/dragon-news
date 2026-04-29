import Image from "next/image";
import Link from "next/link";
import { CiShare2 } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";


const NewCategoryCard = ({news}) => {
    return (
        <div className="card bg-base-100 p-3 shadow-sm">
            <div className="card-body">
                 {/* author section */}
                <div className="flex justify-between items-center bg-gray-200 p-3">
                   
                    {/* right side */}

                    <div className="flex gap-4">
                        <Image 
                        className=" rounded-full"
                        height={40} 
                        width={40}
                         src={news.author.img}
                         alt={news.author.name}></Image>
                         <div>
                            <h2 className="font-bold text-lg">{news.author.name}</h2>
                            <p>{news.author.published_date}</p>
                         </div>


                    </div>
                    {/* left side */}
                    <div className="flex gap-3">
                        <FaRegBookmark className="text-xl" />
                        <CiShare2  className="text-xl" />
                    </div>
                </div>

                <h2 className="card-title">{news.title}</h2>
               
            </div>
            <figure>
                <Image src={news.image_url}
                 alt="news image" width={300}
                  height={300}
                  className="w-full"
                  ></Image>
            </figure>
            <div>
                <p className=" line-clamp-3">{news.details}</p>
                <Link href={`/news/${news._id}`}>Details news</Link>
            </div>
        </div>
    );
};

export default NewCategoryCard;