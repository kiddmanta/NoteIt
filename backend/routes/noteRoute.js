const router = require("express").Router();
const {addNote , deleteNote, getNotes} = require("../controllers/noteController")

router.post("/add-notes",addNote);


router.get("/get-notes",getNotes);


router.post("/delete-notes",deleteNote);

module.exports = router;