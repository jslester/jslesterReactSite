import  myJson from './SongFolders/TaylorSwift.json';
import { Link } from 'react-router-dom';
const HeardleHome = () =>{
    return (
        <div>
            <h2>Heardle Home Page</h2>
            <div>
            <Link
            to={"/heardle/play?game=TaylorSwift"}
            className="summaryButton"
          >
            Taylor Swift Heardle
          </Link>
            </div>
        </div>
    )

}

export default HeardleHome;