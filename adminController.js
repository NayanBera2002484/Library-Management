const User = require("../schema/user-schema"); // Assuming userModel exists
const Book = require("../schema/book-schema"); // For reports or statistics if needed

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "user" }).select("-password"); // exclude password
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err.message });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user", error: err.message });
  }
};

// Change user role (e.g., promote to admin)
const updateUserRole = async (req, res) => {
  try {
    const { role } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { role }, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Error updating user role", error: err.message });
  }
};

// View basic reports (placeholder logic)
const getReports = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: "user" });
    const totalBooks = await Book.countDocuments();
    res.status(200).json({
      totalUsers,
      totalBooks,
      message: "Admin report data",
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to get reports", error: err.message });
  }
};

module.exports = {
  getAllUsers,
  deleteUser,
  updateUserRole,
  getReports,
};
