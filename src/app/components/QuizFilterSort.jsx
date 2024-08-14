"use client"

import { useRouter } from "next/navigation"

export function QuizFilterSort({quizzes, categories}){
    
    const router = useRouter()

    const quizNames = JSON.parse(quizzes)
    const categoryNames = JSON.parse(categories)

    function handleFilterBy(){
        router.push("/")
    }
    
    function handleSortBy(){}
    function handleOrderBy(){}

    return(
        <>
            {/* {console.log(quizNames)}
            {quizNames.map( (item) => {
                return(
                    <>name: {item.quiz_name}</>
                )
            })} */}


            <form>

                <label htmlFor="filterBy">Filter: </label>
                
                <select name="filterBy" onChange={() => {
                    handleFilterBy()
                }}>
                    <option value="none">None</option>
                    <option value="name">Name</option>
                    <option value="category">Category</option>
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