const { Router } = require('express')

const { validateJwt, validateScheme } = require('../../utils/middleware/validationHandler')
const { createScheme } = require('./schema')
const controller = require('./index')

const router = Router()

router.get('/', validateJwt, list)
router.post('/', validateJwt, validateScheme(createScheme), create)
router.patch('/:taskId', validateJwt, doneTask)
router.put('/:taskId', validateJwt, updateTask)
router.delete('/:taskId', validateJwt, removeTask)

async function list (req, res, next) {
  const { user: { sub: userId } } = req

  try {
    const tasksListed = await controller.list({ userId })

    res.status(200).json({
      message: 'tasks listed',
      data: tasksListed
    })
  } catch (error) {
    next(error)
  }
}

async function create (req, res, next) {
  const { body, user: { sub: userId } } = req

  const task = { ...body, userId }

  try {
    const taskCreated = await controller.create({ task })

    res.status(201).json({
      message: 'task created',
      data: taskCreated
    })
  } catch (error) {
    next(error)
  }
}

async function doneTask (req, res, next) {
  try {
    res.status(200).json({
      message: 'task check'
    })
  } catch (error) {
    next(error)
  }
}

async function updateTask (req, res, next) {
  try {
    res.status(200).json({
      message: 'task updated'
    })
  } catch (error) {
    next(error)
  }
}

async function removeTask (req, res, next) {
  try {
    res.status(200).json({
      message: 'task removed'
    })
  } catch (error) {
    next(error)
  }
}

module.exports = router
