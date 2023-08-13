const SportsSecondaryNews = (props) =>{

    const {data} = props;
    const convertedDate = new Date(data.created * 1000).toLocaleString();
    console.log(convertedDate);
    return (
        <div>
            <a href={data.url} target="_blank"> {data.title}</a>
            <div>
                <p>{data.subreddit}</p>
                <p>{convertedDate}</p>
            </div>
        </div>
    )
}
export default SportsSecondaryNews;