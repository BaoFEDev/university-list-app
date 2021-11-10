import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import SearchForm from './components/SearchForm'
import universityApi from '../../api/universityApi';
import queryString from "query-string";
import UniversityItem from './components/UniversityItem';
import Loading from '../../components/Loading/Loading';
import './Search.scss';
const Search = props => {
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
                </div>
            </section>
        </>
    )
}

Search.propTypes = {

}

export default Search
