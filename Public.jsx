import React, { useState, useEffect } from "react";

function Public() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ id: "", title: "", author: "" , isbn:"", genre:"", published:""});
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("Books")) || [];
    setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("Books", JSON.stringify(items));
  }, [items]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  console.log(editIndex);
  

  const handleAddOrUpdate = () => {
    const { id, title,author,isbn,genre,published } = formData;

    if (!id.trim() || !title.trim() || !author.trim() || !isbn.trim() || !genre.trim() || !published.trim()) return;

    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = { id, title,author,isbn,genre,published };
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, { id, title,author,isbn,genre,published }]);
    }

    setFormData({ id: "", title: "", author: "" , isbn:"", genre:"", published:"" });
  };

  const handleEdit = (index) => {
    setFormData(items[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    if (editIndex === index) {
      setEditIndex(null);
      setFormData({ id: "", title: "", author: "" , isbn:"", genre:"", published:""});
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <input
        type="text"
        className="form-control mb-2"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="Enter ID"
      />
      <input
        type="title"
        className="form-control mb-2"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Enter title"
      />
      <input
        type="author"
        className="form-control mb-2"
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Enter author"
      />
      <input
        type="isbn"
        className="form-control mb-2"
        name="isbn"
        value={formData.isbn}
        onChange={handleChange}
        placeholder="Enter isbn"
      />
      <input
        type="genre"
        className="form-control mb-2"
        name="genre"
        value={formData.genre}
        onChange={handleChange}
        placeholder="Enter genre"
      />
      <input
        type="published"
        className="form-control mb-2"
        name="published"
        value={formData.published}
        onChange={handleChange}
        placeholder="Enter published"
      />
      <button
        type="button"
        className="btn btn-success mt-2"
        onClick={handleAddOrUpdate}
      >
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">ISBN</th>
            <th scope="col">Genre</th>
            <th scope="col">Published</th>
            <th scope="col">Button</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.isbn}</td>
              <td>{item.genre}</td>
              <td>{item.published}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-success me-2"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Public;