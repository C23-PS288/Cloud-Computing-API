const bcrypt = require('bcrypt');
const Validator = require('fastest-validator');
const { User } = require('../../models');
const { generateAccessToken, generateRefreshToken } = require('../../config/token');
const validation = new Validator();

async function register(req, res) {
  const { name, email, password, confirmPassword } = req.body;
  const schema = {
    name: 'string|empty:false',
    email: 'email|empty:false',
    password: 'string|min:8',
    confirmPassword: 'string|min:8',
  }
  const validate = validation.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      code: '400',
      status: 'error',
      message: validate,
    });
  }

  const user = await User.findOne({
    where: { 
      email: email
    },
  });

  if (user) {
    return res.status(409).json({
      code: '409',
      status: 'error',
      message: 'email already used',
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      code: '400',
      status: 'error',
      message: "password doesn't match",
    });
  }
  
  const saltPassword = 10;
  const hashPassword = await bcrypt.hash(password, saltPassword);

  const dataUser = {
    name: name,
    email: email,
    password: hashPassword,
  }

  try {
    const createdUser = await User.create(dataUser);
    return res.status(200).json({
      code: '200',
      status: 'success',
      data: createdUser,
    });

  } catch (error) {
    return res.status(500).json({
      code: '500',
      status: 'error',
      message: 'internal server error',
    });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  const schema = {
    email: 'email|empty:false',
    password: 'string|min:8',
  }

  const validate = validation.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      code: '400',
      status: 'error',
      message: validate,
    });
  }

  try {
    const user = await User.findOne({
      where: { 
        email: email
      },
    });
  
    if (!user) {
      return res.status(404).json({
        code: '404',
        status: 'error',
        message: 'account not found',
      });
    }
  
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(404).json({
        code: '404',
        status: 'error',
        message: 'wrong password',
      });
    }
  
    const accessToken = generateAccessToken(user.id, user.email);
    const refreshToken = generateRefreshToken(user.id, user.email);
  
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      code: '200',
      status: 'success',
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        accessToken,
        refreshToken,
      },
    });

  } catch (error) {
    return res.status(500).json({
      code: '500',
      status: 'error',
      message: 'internal server error'
    });
  }
}

async function getUser(req, res) {
  const id = req.params.id;
  try {
    const user = await User.findByPk(id, {
      attributes: ['id', 'name', 'email']
    });

    if (!user) {
      return res.status(404).json({
        code: '404',
        status: 'error',
        message: 'account not found'
      });
    }

    return res.status(200).json({
      code: '200',
      status: 'success',
      data: user,
    });

  } catch (error) {
    return res.status(500).json({
      code: '500',
      status: 'error',
      message: 'internal server error'
    });
  }
}


async function getAllUser(req, res) {
  try {
    const user = await User.findAll({
      attributes: ['id', 'name', 'email']
    });

    return res.status(200).json({
      code: '200',
      status: 'success',
      data: user
    });

  } catch (error) {
    return res.status(500).json({
      code: '500',
      status: 'error',
      message: 'internal server error'
    });
  }
}

async function updateUser(req, res) {
  const id = req.params.id;
  const { name } = req.body;
  const schema = {
    name: 'string|empty:false',
    email: 'email|empty:false',
  }

  const validate = validation.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      code: '400',
      status: 'error',
      message: validate,
    });
  }

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        code: '404',
        status: 'error',
        message: 'account not found'
      });
    }
  
    const email = req.body.email;
    if (email) {
      const checkEmail = await User.findOne({
        where: { email }
      }); 
  
      if (checkEmail && email !== user.email) {
        return res.status(409).json({
          code: '409',
          status: 'error',
          message: 'email already used'
        });
      }
    }
  
    await user.update({
      name,
      email,
    });
  
    return res.status(200).json({
      code: '200',
      status: 'success',
      data: {
        id: user.id,
        name,
        email,
      }
    });

  } catch (error) {
    return res.status(500).json({
      code: '500',
      status: 'error',
      message: 'internal server error'
    });
  }
}

function logoutUser (req, res) {
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
}

module.exports = {
  register,
  login,
  getUser,
  getAllUser,
  updateUser,
  logoutUser
};