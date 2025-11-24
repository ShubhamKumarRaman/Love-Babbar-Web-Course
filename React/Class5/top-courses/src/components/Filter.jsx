import React from 'react'

const Filter = (props) => {
    const filterData = props.filterData || [];
    const category = props.category;
    const setCategory = props.setCategory;

    function filterHandler(title) {
        setCategory(title);
    }

    return (
        <div className='w-11/12 flex flex-wrap gap-3 mx-auto py-4 justify-center'>
            {
                filterData.map((data) => {
                    const isActive = data.title === category;
                    return (
                        <button
                            key={data.id}
                            onClick={() => filterHandler(data.title)}  // FIX: wrap in arrow
                            className={`text-lg px-3 py-1 rounded-md font-medium border-2 transition-all duration-300
                                ${isActive
                                    ? 'bg-white text-black border-white'
                                    : 'bg-black text-white border-white hover:bg-black/50'}
                            `}
                        >
                            {data.title}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Filter
