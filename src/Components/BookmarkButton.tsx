import { useState } from 'react';

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

export default BookmarkSVG;
