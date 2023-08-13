import { useEffect, useState } from "react";
import useFetch from "../Utility/useFetch";
import SportsSecondaryNews from "./SportsSecondaryNews";
const SportsNewsSection = (props) =>{
    const {team,league} = props;
    const [teamStyle, setTeamStyle] = useState('');
    const {data, isPending, isError } = useFetch({url: 'https://www.reddit.com/r/'+team+'+'+league+'.json?limit=5&raw_json=1'});
    //const data = {};
    console.log(data);
    const [newsObj, setNewsObj]= useState({});
    useEffect( () =>{

        if(team == 'Razorbacks'){
            setTeamStyle('RazorbackGame');
        }else if(team == 'Lakers'){
            setTeamStyle('LakerGame');//LakerGame
        }else{
            setTeamStyle('CowboyGame');
        }
        

    }, [team]);
    useEffect( () =>{
        let obj = {};

        if(data && data.data && data.data.children && data.data.children.length > 1){
            const filteredData = data.data.children.filter((child) =>{
                return (!child.data.stickied)
            })//stickied
            console.log(filteredData);
            obj.primaryNews = filteredData[0];
            obj.secondaryNews = filteredData.splice(1, (filteredData.length -1));
            setNewsObj(obj);
            console.log(obj);
        }
    }, [data]);
    return (
        <div className="NewsDiv">
            <div className={"NewsHeader " + teamStyle}>{team} - {league}</div>
            <div className="NewsSection">
                <div className="MainNewsSports">
                    {newsObj && newsObj.primaryNews && 
                        <div>
                            <p>{newsObj.primaryNews.data.title} </p>
                            <div className="SportsImgWrapper">
                                {newsObj.primaryNews.data.preview && newsObj.primaryNews.data.preview.images.length > 0 && <img src={newsObj.primaryNews.data.preview.images[0].source.url} width="400px" />  }
                                
                            </div>
                        </div>
                    }
                </div>
                <div className="SecondaryNewsSports">
                    {newsObj && newsObj.secondaryNews && newsObj.secondaryNews.map((news) =>{
                        return(<SportsSecondaryNews key={news.data.title} data={news.data}></SportsSecondaryNews>)
                    })}
                    
                </div>
            </div>
            
        </div>
    )
}
export default SportsNewsSection;