const bcrypt = require('bcrypt')
const auth = require('../../auth')
const wrapErrors = require('../../utils/wrapError')
const Model = require('./model')

function controller (injectedStore) {
  const store = injectedStore

  async function signIn ({ credentials }) {
    const { username, password } = credentials
    const user = await Model.findOne({ username })

    if (!user) throw wrapErrors('incorrect credentials.', 400)

    const verify = await bcrypt.compare(password, user.password)
    delete user._doc.password

    if (!verify) throw wrapErrors('incorrect credentials.', 400)

    const { _id: sub } = user

    const accessToken = auth.sign({ sub, username })

    return { user, accessToken }
  }

  async function signUp ({ user }) {
    const { email, username, password } = user

    const isEmailExist = await Model.findOne({ email })
    if (isEmailExist) throw wrapErrors('this email is already in use.', 400)

    const isUsernameExist = await Model.findOne({ username })
    if (isUsernameExist) throw wrapErrors('this username is already in use.', 400)

    const hashedPassword = await bcrypt.hash(password, 4)

    const payload = {
      ...user,
      password: hashedPassword
    }

    const createdUser = await store.create(Model, payload)
    delete createdUser._doc.password

    const { _id: sub } = createdUser

    const accessToken = auth.sign({ sub, username })

    return { user: createdUser, accessToken }
  }

  return {
    signIn,
    signUp
  }
}

module.exports = controller
