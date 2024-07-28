import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import tSwiftJson from './SongFolders/TaylorSwift.json';
const SongListGenerator = () =>{
  let [searchParams, setSearchParams] = useSearchParams();
  const [selectedSong, setSelectedSong] = useState(null);
  const [songTitles, setSongTitles] = useState();
    useEffect(()=>{
        const game = searchParams.get('game');

        let songList;
        if(game==='TaylorSwift'){
            songList = tSwiftJson;
        }
        let songTitlesArr = [];
        songList.map(song => songTitlesArr = [...songTitlesArr, song.songName] );
        const index = Math.floor(Math.random() * songList.length);
        console.log(songList[index]);
        setSelectedSong(songList[index]);
        setSongTitles(songTitlesArr)
    }, [])

    return  {selectedSong, songTitles:songTitles};
    
}

export default SongListGenerator;