import React, {useState, useEffect} from 'react';
import useDataFromURL from "../../services/useDataFromUrl";
import { MediaCard, Pager, SearchBar } from '../ui';
import axios from 'axios';

function Home() {
    
    //State Initialization
    const [searchText, setSearchText]= useState(null);
    const [page, setPage] = useState(1);
    const query = {
        q:searchText||"*",
        page:page
    };

    const data = useDataFromURL({
        method: 'GET',
        url: `http://localhost:3000/everything`,
        params: query
    }, [searchText, page]);

    
    
    
    const onSearchClicked = (text) => {
       
        query.q = text||"*";
        setSearchText(text);
    }

    const onPageChange = (e, pageNum) => {
        query.page = pageNum;
        setPage(pageNum);
    }

    return (
        <div>
             {data && (data.totalResults>=0)? 
                <div>
                    <SearchBar onClick={onSearchClicked}></SearchBar>
                    {data.articles.map((article, index)=>                        
                        <MediaCard 
                            key={index}
                            title={article.title}
                            imgSrc={article.urlToImage}
                            author={article.author}
                            description={article.description}
                            url={article.title}
                            date={article.publishedAt}
                            ></MediaCard>
                    )}
                    <Pager count={Math.round(data.totalResults/20)} onClick={onPageChange}></Pager>
                 
                </div> 
             
            : <div></div>}
        </div> 
    )
}

export default Home
