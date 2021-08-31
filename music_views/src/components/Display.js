import React , {useEffect,useState} from "react";
export const Display = ()=>{
    const [display , setDisplay] = useState([]);
    const audioStyle = {
        width:'400px'
    }
    const imageStyle = {
        height:'100px',
        width:'100px'
    }
    useEffect(()=>{
        let url = `${process.env.REACT_APP_DISPLAY_URL}`;
        console.log("URL is ",url);
        const promise = fetch(url);
        promise.then(response=>{
            response.json().then(data=>{
                console.log('Data is ', data);
                setDisplay(data);
            }).catch(err=>{
                console.log('JSON Error is ', err);
            })
        }).catch(err=>console.log("Error is ",err));
});
return (<>
    {display.map(song=>{
        return (<div>
            <img src={song.imageurl} style={imageStyle} alt={song.artistName }/>
            <p>{song.name}</p>
            <audio controls style={audioStyle}>
                <source src={song.url} type="audio/mp4"></source>
            </audio>
        </div>)
    })}
    </>
    )
}