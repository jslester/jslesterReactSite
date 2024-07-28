import { Helmet } from "react-helmet";
import { useEffect, useRef, useState } from "react";
import SongListGenerator from "./SongListGenerator";
import "./Heardle.css";
import SearchResults from "./SearchResults";
import { FallingLines, Oval } from "react-loader-spinner";
const Heardle = (props) => {
  const timeSettings = [3000, 5000, 10000, 12000, 15000];
  const [currentPlaytime, setCurrentPlaytime] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [wasCorrect, setWasCorrect] = useState(false);
  const [isPending, setIsPending] = useState(true);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const songResponse  = SongListGenerator();
  console.log(songResponse);
  const [searchInput, setSearchInput] = useState('');
  const attemptStyles = {
    width: (currentPlaytime / timeSettings.length) * 100 + "%",
  };
  const player = useRef({});

  useEffect(() => {
    if(songResponse.selectedSong){
      setTimeout(() => {
        var ctrlq = document.getElementById("youtube-audio");
        if(!ctrlq) return;
        ctrlq.innerHTML =
          '<img style="margin: auto;display:block" width="50px" id="youtube-icon" src=""/>';
        ctrlq.style.cssText =
          "width:150px;margin:1em auto;cursor:pointer;cursor:hand;";
        const YT = window.YT;
        player.current = new YT.Player("youtube-player", {
          height: "0",
          width: "0",
          videoId: songResponse.selectedSong.code,
          playerVars: {
            autoplay: ctrlq.dataset.autoplay,
            loop: ctrlq.dataset.loop,
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        });
        setIsPending(false);
      }, 2000);
    }
    
  }, [songResponse.selectedSong]);

  function togglePlayButton(play) {
    if(document.getElementById("youtube-icon")){
        document.getElementById("youtube-icon").src = !play
      ? "https://www.pngall.com/wp-content/uploads/5/Play-Button-PNG-High-Quality-Image.png"
      : "https://www.freeiconspng.com/thumbs/pause-button-png/pause-button-png-24.png";
    }
    
  }

  const inputStyle = {borderRadius:'0px' , paddingLeft:'10px', background:'none', border:'2px inset black',boxShadow: 'none', width:'287px'}

  function playAudio() {
    if (player.current) {
      startVideo();
      setTimeout(() => {
        player.current.pauseVideo();
        togglePlayButton(false);
      }, timeSettings[currentPlaytime]);
    }
  }
  function increaseCounter() {
    setCurrentPlaytime(currentPlaytime + 1);
    if (currentPlaytime + 1 === timeSettings.length) {
      setShowResults(true);
      startVideo();
    }
  }
  const startVideo = () =>{
    player.current.seekTo(0);
    player.current.playVideo();
    togglePlayButton(true);
  }

  function onPlayerReady(event) {
    if (player.current && document.getElementById("youtube-audio")) {
      //player.current.setPlaybackQuality("small");
      console.log('playerready')
      document.getElementById("youtube-audio").style.display = "block";
      togglePlayButton(player.current.getPlayerState() !== 5);
    }
  }

  function onPlayerStateChange(event) {
    if (event.data === 0) {
      togglePlayButton(false);
    }
  }
  function clickSong(songName){
    console.log('click');
    setShowSearchResults(false);
    setSearchInput(songName)
  }
  const skip = () =>{
    setIncorrectGuesses([...incorrectGuesses,'Skip']);
    increaseCounter();
  }
  const searchItems = (searchValue) => {
        if(!showSearchResults) setShowSearchResults(true);
        setSearchInput(searchValue)
    }
    const checkSubmission = ()=>{
        if(searchInput === songResponse.selectedSong.songName){
            startVideo();
            setWasCorrect(true);
            setShowResults(true);
        }else{
            increaseCounter();
            setIncorrectGuesses([...incorrectGuesses,searchInput]);
            setSearchInput('');
        }
    }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin:'auto',
        alignContent:'center'
      }}
    >
        <div id="youtube-player"></div>
      {!showResults ? (
        <div className="HeardleWrapper">
          <h2> Guess that Taylor Swift song!</h2>
          <div>
            <div>
                {incorrectGuesses && incorrectGuesses.map(guess => {
                        return <div key={guess} className="incorrectGuess" style={{display:'flex', borderColor:'#E55451'}}><img alt="red X button" width="20px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/2048px-Red_X.svg.png"></img><p style={{marginLeft:'10px'}}>{guess}</p></div>
                    }
                )}
                {
                Array.from(
                    { length: (timeSettings.length - incorrectGuesses.length) },
                    (_, i) => (
                        <div key={i} className="incorrectGuess" style={{display:'flex', borderColor: i===0? '#4056F4':'black'}}>

                        </div>
                    )
                )}
            </div>
            
            <div
              onClick={playAudio}
              data-autoplay="0"
              data-loop="1"
              id="youtube-audio"
            ></div>
            <div className="loadingDiv">
                {isPending && (
                        <Oval
                        height="80"
                        width="80"
                        ariaLabel="loading"
                        color="red"
                        visible={true}
                        secondaryColor="gray"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                        />
                    )}
                </div>
          </div>
          <div className="outerProgressBar">
            <div className="innerProgressBar" style={attemptStyles}></div>
          </div>
          <div style={{marginBottom:'50px'}}>
            <div style={{display:'flex'}}>   
              <button
              className="summaryButton" style={{marginLeft:'0px'}}
                disabled={currentPlaytime >= timeSettings.length}
                onClick={skip}
              >
                Skip
              </button>
              <button
                className="summaryButton"
                onClick={checkSubmission}
              >
                Submit
              </button>
              </div>
              <p>Song Guess</p>
              <div style={{width: '300px', position: 'relative',display: 'inlineBlock'}}> 
                
                    {showSearchResults && <SearchResults isFocused={isFocused} showSearchResults={showSearchResults} clickSong={clickSong} searchInput={searchInput} songTitles={songResponse.songTitles}/>}
                    <input onTouchCancel={()=> setIsFocused(false)}  onBlur={()=> {
                        setTimeout(() => {
                            setIsFocused(false)
                    }, 200);
                }
                } onFocus={()=> setIsFocused(true)} className="inputBox" style={inputStyle} value={searchInput} onChange={(e) => searchItems(e.target.value)}></input>
                    
                    
                
            </div>
            </div>
        </div>
      ) : (
        <div style={{height:'1000px'}}>
            <h2>{wasCorrect? 'Good Job!' : 'Maybe next time!'}</h2>
            
            <p>The song was {songResponse.selectedSong.songName} by {songResponse.selectedSong.artist}</p>
            <button className="summaryButton" onClick={() => window.location.reload()}>{wasCorrect? 'Play': 'Try'} Again</button>
            
        </div>
        

      )}

      <Helmet>
        <script
          type="text/javascript"
          src="https://www.youtube.com/iframe_api"
        ></script>
      </Helmet>
    </div>
  );
};

export default Heardle;
