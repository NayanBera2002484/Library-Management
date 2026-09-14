import axios from "axios";
const BASE_URL = "http://localhost:5000/api/books";
export const addBook = async (data) => {
  try {
    return await axios.post(`${BASE_URL}/add`, data);
  } catch (error) {
    console.error("Error adding book:", error);
  }
};

// Get all books
export const getAllBooks = async () => {
  try {
    return await axios.get(`${BASE_URL}/all`);
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

// Delete book
export const deleteBook = async (id) => {
  try {
    return await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting book:", error);
  }
};

//  Search books
export const searchBooks = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search?query=${query}`);
    console.log("Backend responded with:", response.data);
    return response;
  } catch (error) {
    console.error("Error from backend:", error.response?.data || error.message);
    throw error; // Re-throw so UI can catch it
  }
};

export const getUserProfile = async () => {
  return await axios.get("/api/users/profile");
};

export const updateUserProfile = async (data) => {
  return await axios.put("/api/users/profile", data);
};



// src/service/api.js

export const getNotifications = async () => {
  // Simulated data for testing
  return {
    data: [
      {
        type: "due",
        message: "The book 'Java Fundamentals' is due on July 20, 2025.",
      },
      {
        type: "new",
        message: "New arrival: 'Clean Code by Robert C. Martin' now available.",
      },
    ],
  };
};


// ReadingHistory

export const getReadingHistory = async () => {
  return {
    data: [
      {
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        isbn: "9780262033848",
        borrowedDate: "2025-06-10",
        returnedDate: "2025-06-25",
      },
      {
        title: "Clean Code",
        author: "Robert C. Martin",
        isbn: "9780132350884",
        borrowedDate: "2025-07-01",
        returnedDate: null,
      },
    ],
  };
};
