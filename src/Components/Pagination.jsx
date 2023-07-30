import ReactPaginate from "react-paginate"

const Pagination = ({setPageNumber,pageNumber,info}) => {
    return ( 
        <ReactPaginate 
        className="pagination" 
        forcePage={pageNumber===1?0:pageNumber - 1}
        nextLabel={'След'}
        previousLabel={'Прев'}
        marginPagesDisplayed={1}
        pageClassName="pagination__item"
        nextClassName="pagination__btn"
        previousClassName="pagination__btn"
        pageLinkClassName="pagination__btn pagination__num"
        activeClassName="active"
        onPageChange={(data)=>{setPageNumber(data.selected + 1)}}
        pageCount={info?.pages}/>
     )
}
 
export default Pagination;