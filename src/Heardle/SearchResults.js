import { useEffect, useState } from "react";

const SearchResults = (props) =>{
    console.log(props.searchInput);
    const [parsedValues, SetParsedValues] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const [floatingSuggestion, setFloatingSuggestion] = useState({
        position: 'fixed',
        zIndex: '10',
        background: '#D3D3D3',
        //margin: '-100px 0px',
        bottom:'212px',
        width:'307px'
    });

    useEffect(()=>{
        if(props.searchInput){
            const parsed = (props.songTitles.filter( song => {           
                return song.toLowerCase().includes(props.searchInput.toLowerCase())
            }));
            SetParsedValues(parsed.slice(0,5))
            const marginVal = -1 * (20) * (parsed.slice(0,5).length)
            let newSuggestion = {...floatingSuggestion};
            //newSuggestion.margin = marginVal+'px 0px';
            setFloatingSuggestion(newSuggestion);
        }else{
            if(parsedValues && parsedValues.length > 0){
                SetParsedValues([]);
            }
            
        }
        setIsFocused(props.isFocused);
        console.log(parsedValues);
        console.log(props.isFocused);
    }, [props])
    return (
        <div className='SearchResult'>
            {isFocused && parsedValues.map(value => {
                return <div value={value} key={value} onClick={(event)=> {console.log('click'); props.clickSong(value)}}>
                    {value} 
                    </div>
                
            })}
        </div>
    )
}

export default SearchResults;