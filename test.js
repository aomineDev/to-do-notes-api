function one (boom) {
  if (boom) throw new Error('intentional error')

  return 'Hola :D'
}

function two () {
  try {
    const message = one(true)

    console.log(message)
  } catch (error) {
    console.error(error.message)
  }
}
function three () {
  two()
}

three()
