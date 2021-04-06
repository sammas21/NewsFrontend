import React, {useState} from 'react';

import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';



export default function SerachBar({onClick}) {

  const [text, setText] = useState("");

  return (
    <div component="form" className="root">
      <InputBase
        className={"input"}
        placeholder="Search News"
        inputProps={{ 'aria-label': 'Search News' }}
        onChange={(e)=>{
          let temp = e.target.value.toString()
          setText(temp)
        }}
      />
      <IconButton type="submit" className="iconButton" onClick={()=>{onClick(text)}} aria-label="search">
        <SearchIcon />
      </IconButton>
    
    </div>
  );
}