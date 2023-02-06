// import React, { useState } from 'react';

// const Link = ({ movie, handleAddBookmark, handleRemoveBookmark }) => { 
//       const [isBookmarked, setIsBookmarked] = useState(false); 
//       const handleBookmark = () => { 
//           if (isBookmarked) { 
//           handleRemoveBookmark(movie); 
//           } else { 
//           handleAddBookmark(movie); 
//           } 
//           setIsBookmarked(!isBookmarked); 
//       }; 
//       return ( 
//           <div className="movie"> 
//           <img src={movie.Poster} alt={movie.Title} /> 
//           <div className="movie-info"> 
//               <h3>{movie.Title}</h3> 
//               <span>{movie.Year}</span> 
//           </div> 
//           {/* <div className="movie-overview"> 
//               <h2>Overview:</h2> 
//               <p>{movie.Plot}</p> 
//           </div>  */}
//           <button className="bookmark-btn" onClick={handleBookmark}> 
//               {isBookmarked } 
//           </button> 
//           </div> 
//       );

//       }

//       export default Link;