import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import universityApi from '../../api/universityApi';
import Loading from '../../components/Loading/Loading';
import SearchForm from './components/SearchForm';
import UniversityItem from './components/UniversityItem';
import getCurrentPosts from './hooks/getCurrentPosts';
import getPageNumbersLength from './hooks/getPageNumbersLength';
import './Search.scss';
const Search = () => {
    const [universityList, setUniversityList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState('');

    const [filterList, setFilterList] = useState({
        name: ''
    });

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

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    // Get current posts
    let currentPosts = getCurrentPosts(currentPage, postsPerPage, universityList);


    // Change page
    const handlePageClick = e => {
        setCurrentPage(e.selected + 1);
    };


    return (
        <>
            <section id="search" className="pt-5 pb-5">
                <div className="container">
                    <SearchForm onSubmit={handleTodoSubmit} />
                    {
                        filterList.name !== '' && (<p>Showing results for {searchResult} </p>)
                    }
                    <div className="row">
                        {
                            loading && (<Loading />)
                        }
                        {
                            (!currentPosts.length && filterList.name !== '') && (<h3 className="text-center mt-4 mb-4">{searchResult} not found</h3>)
                        }
                        <ul className="university-list">
                            {currentPosts.map((item, idx) => (
                                <UniversityItem
                                    key={idx}
                                    idx={idx}
                                    name={item.name}
                                    country={item.country}
                                    web_pages={item.web_pages}
                                />
                            ))}
                        </ul>
                    </div>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        breakLabel={'...'}
                        pageCount={getPageNumbersLength(universityList, postsPerPage)}
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
                    />
                </div>
            </section>
        </>
    )
}


export default Search
