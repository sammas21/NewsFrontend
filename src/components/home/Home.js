import React, {useState,useEffect} from 'react';
import useDataFromURL from "../../services/useDataFromUrl";
import { MediaCard, Pager, SearchBar } from '../ui';
import { getPageCount, getFormattedDate } from '../../utils'
import {PAGE_SIZE, STR_APP_TITLE, ENDPOINT_EVERY, ENDPOINT_INIT, API_URL} from '../../constants'

//Added this variable because free api returns only 100 results
function Home() {
    

    //State Initialization
    const [searchText, setSearchText]= useState(null);
    const [page, setPage] = useState(1);
    const [endPoint, setEndPoint] = useState(ENDPOINT_INIT);
    const [loading, setLoading] = useState(true);
    const query = {
        q:searchText||"*",
        page:page
    };

    const data = useDataFromURL({
        method: 'GET',
        url: `${API_URL}${endPoint}`,
        params: {...query, pageSize:PAGE_SIZE}
    }, [searchText, page]);
    
    const onSearchClicked = (text) => {
        if(text){
            query.q = text||"*";
            setEndPoint(ENDPOINT_EVERY);
        }else{
            setEndPoint(ENDPOINT_INIT);
        }
        setSearchText(text);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        return () => {
            
        }
    }, [page]);

    useEffect(() => {
        window.scrollTo(0, 0)
        setPage(1)
        return () => {
            
        }
    }, [searchText])

    const onPageChange = (e, pageNum) => {
        query.page = pageNum;
        setPage(pageNum);
    }

    return (
        <div>
            <h1 className="app-title">{STR_APP_TITLE}</h1>
            <SearchBar onClick={onSearchClicked}></SearchBar>
             {data && (data.totalResults>=0)? 
                <div className="resultWrapper">
                    
                    {data.articles.map((article, index)=>                        
                        <MediaCard 
                            key={index}
                            title={article.title}
                            imgSrc={article.urlToImage}
                            author={article.author}
                            description={article.description}
                            url={article.url}
                            date={getFormattedDate(article.publishedAt)}
                        ></MediaCard>
                    )}
                    <Pager count={getPageCount(data.totalResults)} onClick={onPageChange}></Pager>
                 
                </div> 
             
            : <div><h3>No Results Found !!</h3></div>}
        </div> 
    )
}

export default Home
