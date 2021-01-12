//dependencies
const fs = require("fs");
var dbJason = require("../db/db.json");

//routing
module.exports = function (app) {

    //displaying notes GET request
    app.get("/api/notes", function (req, res) {
        res.json(dbJason);
    });
    // creating all new posts POST request
    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        let index = (dbJason.length).toString();
        console.log(index);
        newNote.id = index;
        dbJason.push(newNote);
        fs.writeFileSync("./db/db.jason", JSON.stringify(dbJason));
        res.json(dbJason);
    });

    //deleting a post DELETE request
    app.delete("/api/notes/:id", function (req, res) {
        let chosenId = req.params.id;
        let newId = 0;
        console.log(`Erasing note with id ${chosenId}`);
        dbJason = dbJason.filter(currentNote => {
            return currentNote.id != chosenId;
        });
        for (currentNote of dbJason) {
            currentNote.id = newId.toString();
            newId++;
        }
        fs.writeFileSync("./db/db.jason", JSON.stringify(dbJason));
        res.json(dbJason);
    });
}