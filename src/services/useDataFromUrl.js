import {useState, useEffect} from 'react';
import axios from 'axios';

//usage code for custom hook
/*
    useDataFromURL({
        *method: 'GET',
        *url: 'https://......',
        params: {
            //...................
        },
        headers: {
            //...............
    });

    // Properties marked with * are mandatory
*/


function useDataFromURL(options, values){
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log("Called");
        let source = axios.CancelToken.source();
        
        const loadData = async () =>{
            try {
                const response = await axios.request(options,{
                    cancelToken: source.token
                });
                setData(response.data);
            } catch (error) {
               if(axios.isCancel(error)){
                    console.log('Error: useDataFromURL +', error)
               } else {
                   throw error;
               }
            }
                
        }
        loadData();
        return () => {
            source.cancel();
        }
    }, [...values])

    return data;
}

export default useDataFromURL;