import React, { useEffect, useState } from 'react';
import universityApi from '../../api/universityApi';
import Loading from '../../components/Loading/Loading';
import SearchForm from './components/SearchForm';
import UniversityItem from './components/UniversityItem';
import ReactPaginate from 'react-paginate';
import './Search.scss';
const Search = props => {
    const [universityList, setUniversityList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState('');
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    const [filterList, setFilterList] = useState({
        name: ''
    });

    const itemsPerPage = 10;
    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const list = await universityApi.getAll(filterList.name);
                setUniversityList(list.map(x => ({
                    name: x.name,
                    country: x.country,
                    web_pages: x.web_pages
                })));
                setLoading(false);
            } catch (error) {
                console.log('Failed to fetch university list', error);
            }
        })()
    }, [filterList]);
    const handleTodoSubmit = (value) => {
        setFilterList({
            name: value
        });
        setSearchResult(value.name);
    };

    // useEffect(() => {
    //     // Fetch items from another resources.
    //     const endOffset = itemOffset + itemsPerPage;
    //     setCurrentItems(universityList.slice(itemOffset, endOffset));
    //     setPageCount(Math.ceil(universityList.length / itemsPerPage));
    // }, [itemOffset, itemsPerPage]);



    // const handlePageClick = (event) => {
    //     const newOffset = (event.selected * itemsPerPage) % universityList.length;
    //     setItemOffset(newOffset);
    // };
    return (
        <>
            <section id="search" className="pt-5">
                <div className="container">
                    <SearchForm onSubmit={handleTodoSubmit} />
                    {
                        filterList.name !== '' && (<p>Showing results for {searchResult} </p>)
                    }
                    <div className="row">
                        {
                            loading && (<Loading />)
                        }
                        <ul className="university-list">
                            {universityList.map((item, idx) => (
                                <UniversityItem
                                    key={idx}
                                    name={item.name}
                                    country={item.country}
                                    web_pages={item.web_pages}
                                />
                            ))}
                        </ul>
                    </div>
                    {/* <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        breakLabel={'...'}
                        pageCount={pageCount}
                        marginPagesDisplayed={3}
                        pageRangeDisplayed={6}
                        previousLabel="< previous"
                        containerClassName={'pagination justify-content-center'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        nextClassName={'page-item'}
                        nextLinkClassName={'page-link'}
                        breakClassName={'page-item'}
                        breakLinkClassName={'page-link'}
                        activeClassName={'active'}
                        onPageChange={handlePageClick}
                    /> */}
                </div>
            </section>
        </>
    )
}

Search.propTypes = {

}

export default Search
