module.exports = async (req, res) => {
  try {
    const { refreshToken, accessToken } = req.cookies;
    
    if (!refreshToken && !accessToken) {
      return res.status(403).json({
        code: '403',
        status: 'error',
        message: 'already logout'
      });
    }
    
    res.clearCookie('refreshToken');
    res.clearCookie('accessToken');
  
    res.status(200).json({
      code: '200',
      status: 'success',
      message: 'logout success'
    });
    
  } catch (error) {
    return res.status(500).json({
      code: '500',
      status: 'error',
      message: 'internal server error'
    });
  }
}