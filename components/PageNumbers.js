import _ from 'lodash';

export const PageNumbers = ({items, pageSize, currentPage, onPageChange}) => {
    const pageCount = items/pageSize;
    if(Math.ceil(pageCount) === 1 ) return null ;
    const pages = _.range(1, pageCount + 1);

  return (
    <div className="flex items-center justify-center  px-4 py-3 sm:px-6 transition-all ease-in duration-200">
        <nav className="flex flex-wrap justify-center rounded-md shadow-sm gap-3 text-xs sm:text-sm md:text-base" >
        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", 
        Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
        {/* Page section here */}
        {
            pages.map(page => (
                <div
                    key={page}
                    onClick={()=> onPageChange(page)}
                    // aria-current="page"
                    className={`relative cursor-pointer rounded transition-all ease-in  inline-flex items-center  px-4 py-2  font-semibold  focus:z-20  ${page === currentPage? 'z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'bg-gray-300  text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'}
                    `}
                >
                    {page}
                </div>
            ))
        }
        </nav>
    </div>
  )
}
