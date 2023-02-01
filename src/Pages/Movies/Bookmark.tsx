// import React, { useState } from 'react';
// import Bookmark from "../../data.json"

// interface Bookmarked {
//   id: number;
//   title: string;
//   year: number;
// }

// const BookmarkPage: React.FC = () => {
//   const [selectedBookmark, setSelectedBookmark] = useState<Bookmarked | null>(null);
//   const [bookmarks] = useState<Bookmarked[]>([
//     { id: 1, title: 'The Shawshank Redemption', year: 1994 },
//     { id: 2, title: 'The Godfather', year: 1972 },
//     { id: 3, title: 'The Godfather: Part II', year: 1974 },
//   ]);

//   const handleClick = (bookmark: Bookmarked) => {
//     setSelectedBookmark(bookmark);
//   };

//   return (
//     <div>
//       <h1>My Bookmarks</h1>
//       <ul>
//         {bookmarks.map((bookmark) => (
//           <li key={bookmark.id} onClick={() => handleClick(bookmark)}>
//             {bookmark.title}
//           </li>
//         ))}
//       </ul>
//       {selectedBookmark ? (
//         <div>
//           <h2>{selectedBookmark.title}</h2>
//           <p>Released in {selectedBookmark.year}</p>
//         </div>
//       ) : (
//         <p>Click on a bookmark to view details</p>
//       )}
//     </div>
//   );
// };

// export default BookmarkPage;

import React, { useState, useEffect } from 'react';

interface Bookmark {
  id: number;
  title: string;
  year: number;
}

const BookmarkPage: React.FC = () => {
  const [selectedBookmark, setSelectedBookmark] = useState<Bookmark | null>(null);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    fetch('https://your-api.com/bookmarks')
      .then((response) => response.json())
      .then((data) => setBookmarks(data))
      .catch((error) => console.error(error));
  }, []);

  const handleClick = (bookmark: Bookmark) => {
    setSelectedBookmark(bookmark);
  };

  return (
    <div>
      {/* <h1>My Bookmarks</h1> */}
      <ul>
        {bookmarks.map((bookmark) => (
          <li key={bookmark.id} onClick={() => handleClick(bookmark)}>
            {bookmark.title}
          </li>
        ))}
      </ul>
      {selectedBookmark ? (
        <div>
          <h2>{selectedBookmark.title}</h2>
          <p>Released in {selectedBookmark.year}</p>
        </div>
      ) : (
        <p>Click on a bookmark to view details</p>
      )}
    </div>
  );
};

export default BookmarkPage;
