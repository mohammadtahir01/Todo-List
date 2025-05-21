import './index.css'
import userImage from './Tahir.jpg';

export default function First(prop){
    return(
        <div className="user">
            <p>{prop.name}</p>
            <img src={userImage} alt="tahir"  className="photo"/>
            <p>Description:{prop.des}</p>
        </div>
    )
}