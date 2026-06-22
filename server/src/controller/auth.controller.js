const signup = async (req, res) => {
  res.json({
    message: 'signup',
  })
}
const login = async (req, res) => {
  res.json({
    message: 'Login',
  })
}
const logout = async (req, res) => {
  res.json({
    message: 'logout',
  })
}

module.exports = { signup, login, logout }
