const { Router } = require('express')

const { validateJwt, validateScheme } = require('../../utils/middleware/validationHandler')
const { createScheme, updateScheme } = require('./schema')
const controller = require('./index')

const router = Router()

router.get('/', validateJwt, list)
router.post('/', validateJwt, validateScheme(createScheme), create)
router.patch('/:taskId', validateJwt, toggleDoneTask)
router.put('/:taskId', validateJwt, validateScheme(updateScheme), updateTask)
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

async function toggleDoneTask (req, res, next) {
  const { params: { taskId } } = req

  try {
    const taskCreatedId = await controller.patch({ taskId })

    res.status(200).json({
      message: 'toggle task done',
      data: taskCreatedId
    })
  } catch (error) {
    next(error)
  }
}

async function updateTask (req, res, next) {
  const { params: { taskId }, body: task } = req

  try {
    const taskCreatedId = await controller.update({ taskId, task })

    res.status(200).json({
      message: 'task updated',
      data: taskCreatedId
    })
  } catch (error) {
    next(error)
  }
}

async function removeTask (req, res, next) {
  const { params: { taskId } } = req

  try {
    const taskRemovedId = await controller.remove({ taskId })

    res.status(200).json({
      message: 'task removed',
      data: taskRemovedId
    })
  } catch (error) {
    next(error)
  }
}

module.exports = router
