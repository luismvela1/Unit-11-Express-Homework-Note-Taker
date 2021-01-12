//dependencies
const fs=require("fs");
var dbJason = JSON.parse(fs.readFileSync("./db/db.json","utf8"));

//routing
module.exports = function(app) {

    //displaying notes GET request
    app.get("/api/notes",function(req,res){
        res.jason(dbJason);
    });
    app.get("/api/notes/:id", function(req, res) {

        res.json(data[Number(req.params.id)]);

    });

    // creating all new posts POST request
    app.post("/api/notes",function(req,res){
        let newNote= req.body;
        let index = (data.length).toString();
        console.log(index);
        newNote.id = index;
        data.push(newNote);
        fs.writeFileSync("./db/db.jason", JSON.stringify(dbJason));
        res.jason(data);
        });
    
    //deleting a post DELETE request
    app.delete("/api/notes/:id",function(req,res){
        let chosenId =req.params.id;
        let newId = 0;
        console.log(`Erasing note with id ${chosenId}`);
        data = data.filter(currentNote =>{
            return currentNote.id != chosenId;
        });
        for (currentNote of data){
            currentNote.id = newId.toString();
            newId++;
        }
        fs.writeFileSync("./db/db.jason", JSON.stringify(dbJason));
        res.jason(dbJason);
    });
}