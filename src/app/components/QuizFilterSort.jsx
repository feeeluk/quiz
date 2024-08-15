"use client"

import { useRouter } from "next/navigation"

export function QuizFilterSort({quizzes, categories}){
    
    const router = useRouter()

    const quizNames = JSON.parse(quizzes)
    const categoryNames = JSON.parse(categories)

    function handleFilterByCategory(){
        //outer.push(`/home?filterByCategory='${event.target.value}'`)
        document.getElementById('filterSortForm').requestSubmit()
    }
    
    function handleSortBy(event){
        //router.push(`/home?sortBy='${event.target.value}'`)
        document.getElementById('filterSortForm').requestSubmit()
    }

    function handleOrderBy(event){
        //router.push(`/home?orderBy='${event.target.value}'`)
        document.getElementById('filterSortForm').requestSubmit()
    }

    function handleSubmit(formData){

        const categoryValue = formData.get("filterByCategory")
        const sortValue = formData.get("sortBy")
        const orderValue = formData.get("orderBy")
        router.push(`/home?filterByCategory=${categoryValue}&sortBy=${sortValue}&orderBy=${orderValue}`)

    }

    return(
        <>
            
            <form id="filterSortForm" action={handleSubmit}>

                <label htmlFor="filterByCategory">Category: </label>
                
                <select name="filterByCategory" onChange={handleFilterByCategory}>
                    <option value="all">All</option>

                    {categoryNames.map( (category) => {
                        return(
                        <option key={category.category_name} value={category.category_name}>{category.category_name}</option>
                        )
                    })}                  
                    
                </select>

            &nbsp;

                <label htmlFor="sortBy">Sort: </label>
                
                <select name="sortBy" onChange={handleSortBy}>
                    <option value="quiz_name">Name</option>
                    <option value="category_name">Category</option>
                </select>

            &nbsp;

                <label htmlFor="orderBy">Order: </label>
                
                <select name="orderBy" onChange={handleOrderBy}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>

            </form>
        </>
    )
}