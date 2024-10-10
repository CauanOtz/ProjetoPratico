import './List.css'


function List({task}){
    
    return(
        <>
            <span className="list">
                <p>{`Search:  ${task}`}</p>
                <button>Deletar</button>
            </span>
        </>
    )
}

export default List;