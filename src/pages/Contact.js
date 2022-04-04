import { React, useState, useEffect } from "react";

import "../styles/Contact.css";

function Contact() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [refnum, setRefnum] = useState("");

  const [books, setBooks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let book = {
      title,
      author,
      refnum,
    };
    setBooks([...books, book]);
    setTitle("");
    setAuthor("");
    setRefnum("");
  };
  const deleteBook = (refnum) => {
    //console.log(refnum);
    const updatedBooks = books.filter((element, index) => {
      return element.refnum !== refnum;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="wrapper">
      <br />

      <h1> Book List App</h1>
      <div className="main">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter the title.."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <br />
            <label>Author</label>
            <input
              type="text"
              placeholder="Enter the Author.."
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            ></input>
            <br />
            <label>Reference no.</label>
            <input
              type="text"
              placeholder="Enter the reference no.."
              value={refnum}
              onChange={(e) => setRefnum(e.target.value)}
            ></input>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="view-container">
          {books.length > 0 && (
            <>
              <div >
                <table className="table">
                  <thead>
                    <tr>
                      <th>Reference no.</th>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.map((books) => {
                      return (
                        <>
                          <tr key={books.refnum}></tr>
                          <td>{books.refnum}</td>
                          <td>{books.title}</td>
                          <td>{books.author}</td>
                          <td>
                            <button onClick={() => deleteBook(books.refnum)}>
                              delete
                            </button>
                          </td>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}
          {books.length < 1 && <div> No books are added yet</div>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
