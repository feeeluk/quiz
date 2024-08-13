"use client"

export function QuizFilterSort(){
    return(
        <>
            <form>

                <label htmlFor="filter">Filter by: </label>
                
                <select name="filter">
                    <option value="none">None</option>
                    <option value="name">Name</option>
                    <option value="category">Category</option>
                    <option value="author">Author</option>
                    <option value="dateCreated">Date created</option>
                </select>

                &nbsp;

                <label htmlFor="sort">Sort by: </label>
                
                <select name="sort">
                    <option value="name">Name</option>
                    <option value="category">Category</option>
                    <option value="author">Author</option>
                    <option value="dateCreated">Date created</option>
                </select>

                &nbsp;

                <label htmlFor="sortBy">Sort order: </label>
                
                <select name="sortBy">
                    <option value="asc">Ascending</option>
                    <option value="desc">CDescending</option>
                </select>

            </form>
        </>
    )
}