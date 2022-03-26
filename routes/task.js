const {createTasks, readTasks, updateTasks, deleteTasks} = require('../Controllers/task.js');
const router = express.Router();

router.get('/', readTasks);
router.post('/', createTasks);
router.put('/:id', updateTasks);
router.delete('/:id', deleteTasks);

module.exports = router;