const createUser = (req, res) => {
  res.json({ name: "khalil", message: "user created successfully" });
};

const getUser = (req,res) => {
  res.json({ name: "khalil", message: "user data fetched" });
};
export { createUser, getUser };
