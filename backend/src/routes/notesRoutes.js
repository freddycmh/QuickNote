import express from "express"
import { createNote, deleteNote, getAllNotes, updateNote, getNoteById} from "../controllers/notesController.js";

const router = express.Router()

//get all
router.get("/", getAllNotes);
// get one
router.get("/:id", getNoteById);
//create
router.post("/", createNote);
//update
router.put("/:id", updateNote); 
//delete
router.delete("/:id", deleteNote);

export default router;


