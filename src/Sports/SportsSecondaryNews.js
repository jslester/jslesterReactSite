const SportsSecondaryNews = (props) =>{

    const {data} = props;
    const convertedDate = new Date(data.created * 1000).toLocaleString();
    console.log(convertedDate);
    return (
        <div style={{paddingLeft: '15px'}}>
            <a target="_blank"  href={data.url} style={{fontWeight:700}}> {data.title}</a>
            <div className="SecondaryNewsDetail">
                <p >{'r/' +data.subreddit}</p>
                <p>{convertedDate}</p>
            </div>
        </div>
    )
}
export default SportsSecondaryNews;