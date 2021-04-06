import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

export default function Pager({count, onClick}) {
 
    return (
        <div className="root">
        
            <Pagination className="pager" count={count} onChange={onClick} variant="outlined" color="primary" />

        </div>
    );
}