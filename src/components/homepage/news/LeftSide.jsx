import Link from "next/link";


const LeftSide = ({category, activId}) => {
    return (
        <div>
              
      
      <h1 className=" font-bold p-2">All Caterogy</h1>
      <ul className="flex flex-col gap-3 mt-4">

        {category.news_category.map(category =>{

            return(
                 <li className={`${activId ===category.category_id ? "bg-gray-200 ":""} p-2 text-center font-bold`}
                  key={category.category_id}>

                    <Link href={`/category/${category.category_id}`}
                    className=" block p-2"
                    >{category.category_name}</Link>
                  </li>
            )
        })}

      </ul>
        </div>
    );
};

export default LeftSide;