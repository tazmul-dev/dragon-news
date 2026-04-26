
const getCategory = async ()=>{
 
  const res = await fetch(" https://openapi.programming-hero.com/api/news/categories")
  const data = await res.json();
 
  return data.data;

}


export default async function Home() {
  
  const category = await getCategory()
  

  // console.log(category.news_category)
  return (
    <div className="grid grid-cols-12 container mx-auto">

     {/* All Caterogy */}

    <div className=" col-span-3">
     
      
      <h1 className=" font-bold p-2">All Caterogy</h1>
      <ul className="flex flex-col gap-3 mt-4">

        {category.news_category.map(category => <li className="bg-gray-200 p-2 text-center font-bold" key={category.category_id}>{category.category_name}</li>)}

      </ul>

    </div>

    {/* Dragon News Home */}

    <div className="col-span-6">
      <h1 className="bg-green-400 text-2xl p-2">All Caterogy</h1>
    </div>

    {/* login with */}

    <div className="col-span-3">
      <h1 className="bg-red-400 text-2xl p-2">All Caterogy</h1>
    </div>
   </div>
    
    
  );
}
