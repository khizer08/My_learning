import { useState } from "react";

function CommentsForms() {
  let [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((formData) => {
      return { ...formData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    setFormData({
      username: "",
      remark: "",
      rating: 5,
    });
  };
  return (
    <div>
      <h2>Give a comment!</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          placeholder="username"
          value={formData.username}
          name="username"
          onChange={handleInputChange}
        ></input>
        <br></br>
        <br></br>
        <label htmlFor="remark">Remark</label>
        <textarea
          id="remark"
          placeholder="Add remark"
          value={formData.remark}
          name="remark"
          onChange={handleInputChange}
        ></textarea>
        <br></br>
        <br></br>
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          placeholder="rating"
          value={formData.rating}
          name="rating"
          onChange={handleInputChange}
        ></input>
        <br></br>
        <br></br>
        <button>Add comment</button>
      </form>
    </div>
  );
}

export default CommentsForms;
