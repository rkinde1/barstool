import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [info, setInfo] = useState([{}]);
  const [author, setAuthor] = useState([]);
    //article thumbnail/image
  useEffect(() => {

    axios.get('https://www.jalirani.com/files/barstool.json')
      .then(response => {
        setInfo(response.data.map((events) => {
          return {           
            url: events.url,
            title: events.title,
            authorName: events.author.name,
            authorAvatar: events.author.avatar,
            comment_count: events.comment_count,
            thumbnailImage: events.thumbnail.location + events.thumbnail.images.small
            
            }
        }))
       }
      )
      .catch(err => console.log(err))
    }, [])

  return (
    <div>
      <header className="App-header">
        <h1>Barstool</h1>

        {info.map((events) => {
          return (
            <div className="container">
              <div className="left">
                <a href={events.url}>{events.title}</a>
                <img src={events.thumbnailImage} alt=""></img>
              </div>
              <div className="right">
                <div className='author'>
                  <p>{events.authorName}</p>
                  <img className="borderCircle" src={events.authorAvatar} alt=""></img> 
                </div>
                <p>Number of comments: {events.comment_count} </p> 
              </div>
            </div>
          );
        })}

      </header>
    </div>
  );
}

export default App;
