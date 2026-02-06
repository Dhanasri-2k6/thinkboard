import Note from "../models/Note.js";
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (err) {
    console.log("Error fetching notes", err);
    res.status(500).json({ message: "Error fetching notes" });
  }
};

// as "req" is not used we can use _ in place of req
export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching note by id" });
  }
};

export const createNotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    console.log(title, content);
    const newNote = new Note({ title, content });
    //   since key and value are same we can write like below also
    //   const newNote=new Note({title,content});

    await newNote.save();
    res.status(201).json({ message: "Note created successfully" });
  } catch (err) {
    console.log("Error creating note", err);
    res.status(500).json({ message: "Error creating note" });
  }
};

export const updateNotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    //  it the name is hello insead of id use req.params.hello
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {
      title,
      content,
    });

    // this new:true will return the updated note otherwise it will return the old note (this is completely optional but preferred)

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note updated successfully" });
  } catch (err) {
    console.log("Error updating note", err);
    res.status(500).json({ message: "Error updating note" });
  }
};

export const deleteNotes = async (req, res) => {
  try {
    const detetedNote = await Note.findByIdAndDelete(req.params.id);
    if (!detetedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
    // by default it will be 200 ok status
  } catch (err) {
    console.log("Error deleting note", err);
    res.status(500).json({ message: "Error deleting note" });
  }
};
