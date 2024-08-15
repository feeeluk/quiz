"use client"

import { useRouter } from "next/navigation"

export function QuizFilterSort({quizzes, categories}){
    
    const router = useRouter()

    const quizNames = JSON.parse(quizzes)
    const categoryNames = JSON.parse(categories)

    function handleFilterByCategory(event){
        router.push(`/home?filterByCategory='${event.target.value}'`)
    }
    
    function handleSortBy(){}
    function handleOrderBy(){}

    return(
        <>
            
            <form>

                <label htmlFor="filterByCategory">Category: </label>
                
                <select name="filterByCategory" className="fliterByCategory" onChange={handleFilterByCategory}>
                    <option value="all">All</option>

                    {categoryNames.map( (category) => {
                        return(
                        <option key={category.category_name} value={category.category_name}>{category.category_name}</option>
                        )
                    })}                  
                    
                </select>

            </form>

            &nbsp;

            <form>

                <label htmlFor="sortBy">Sort: </label>
                
                <select name="sortBy">
                    <option value="name">Name</option>
                    <option value="category">Category</option>
                </select>
            </form>

            &nbsp;

            <form>

                <label htmlFor="orderBy">Order: </label>
                
                <select name="orderBy">
                    <option value="asc">Ascending</option>
                    <option value="desc">CDescending</option>
                </select>

            </form>
        </>
    )
}