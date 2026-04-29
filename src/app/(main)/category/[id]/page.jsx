import LeftSide from '@/components/homepage/news/LeftSide';
import NewCategoryCard from '@/components/homepage/news/NewCategoryCard';
import RightSide from '@/components/homepage/news/RightSide';
import { getCategory, getNewsCategoryId } from '@/lib/data';



const newCategoryPage = async({params}) => {
     
    const {id} = await params

    // console.log(id)
    const category = await getCategory()

  const news = await getNewsCategoryId(id)

    return (
        <div className="grid grid-cols-12 container mx-auto">

            {/* All Caterogy */}

            <div className=" col-span-3">
                <LeftSide category={category} activId={id}></LeftSide>
            </div>

            {/* Dragon News Home */}

            <div className="col-span-6">
                <h1 className="font-bold p-2">All Caterogy</h1>
                {news.length >0? news.map((n) => {
                //  console.log(n)
                    return <NewCategoryCard key={n._id} news ={n}></NewCategoryCard>


                }): <h1 className='text-center'>Not news found</h1> }
            </div>

            {/* login with */}

            <div className="col-span-3">
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default newCategoryPage;