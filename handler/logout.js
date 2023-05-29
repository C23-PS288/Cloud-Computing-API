module.exports = async (req, res) => {
  const { refreshToken, accessToken } = req.cookies;
  
  if (!refreshToken && !accessToken) {
    return res.status(403).json({
      status: 'error',
      message: 'already logout'
    });
  }
  
  res.clearCookie('refreshToken');
  res.clearCookie('accessToken');

  res.json({
    status: 'success',
    message: 'logout success'
  });
}