import React, { useState } from 'react';

function BookmarkSVG() {
  const [isBookmarked, setIsBookmarked] = useState(true);
  function handleClick() {
    setIsBookmarked(!isBookmarked);
  }
  return (      
    <svg onClick={handleClick} width="12" height="14" xmlns="http://www.w3.org/2000/svg">
    {isBookmarked ? (
        <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" stroke-width="1.5" fill="none"/>
      ) : (
        <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" stroke-width="1.5" fill="#FFF"/>
      )}
    </svg>
  );
}
// const Bookmark = ({ movie, handleAddBookmark, handleRemoveBookmark }) => { 
//   const [isBookmarked, setIsBookmarked] = useState(false); 
//   const handleBookmark = () => { 
//       if (isBookmarked) { 
//       handleRemoveBookmark(movie); 
//       } else { 
//       handleAddBookmark(movie); 
//       } 
//       setIsBookmarked(!isBookmarked); 
//   }; 
//   return ( 
//       <div className="movie"> 
//       <img src={movie.Poster} alt={movie.Title} /> 
//       <div className="movie-info"> 
//           <h3>{movie.Title}</h3> 
//           <span>{movie.Year}</span> 
//       </div> 
//       <div className="movie-overview"> 
//           <h2>Overview:</h2> 
//           <p>{movie.Plot}</p> 
//       </div> 
//       <button className="bookmark-btn" onClick={handleBookmark}> 
//           {isBookmarked ? "Remove from Bookmarks" : "Add to Bookmarks"} 
//       </button> 
//       </div> 
//   );

//   }
export default BookmarkSVG;