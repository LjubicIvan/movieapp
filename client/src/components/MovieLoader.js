import React from "react";

export default function MovieLoader() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const skeleton = array.map((item) => {
    return (
      <div key={item.id} className="movie_card animate-pulse">
        <img alt="" className="skeleton profile-circle" />
        <h3 className="skeleton title"> </h3>
        <h6 className="skeleton title"></h6>
        <p className="skeleton text"></p>
      </div>
    );
  });

  return <div className="movies">{skeleton}</div>;
}
