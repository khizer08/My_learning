import { useState } from "react";

function Liker() {
  let [like, setLike] = useState(false);
  let styles = { color: "red" };

  let isLike = () => {
    setLike(!like);
  };
  return (
    <p>
      Like:
      <a onClick={isLike}>
        {like ? (
          <i className="fa-regular fa-heart" style={styles}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </a>
    </p>
  );
}

export default Liker;
