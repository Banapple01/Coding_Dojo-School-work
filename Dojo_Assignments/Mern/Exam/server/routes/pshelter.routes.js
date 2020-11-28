const pshelterController = require('../controllers/pshelter.controller');

module.exports = app => {
    app.get("/api/pets/", pshelterController.findAllPets);
    app.get("/api/pets/:id", pshelterController.findOnePet);
    app.put("/api/pets/update/:id", pshelterController.updatePet);
    app.post("/api/pets/new", pshelterController.createNewPet);
    app.delete("/api/pets/delete/:id", pshelterController.deletePet);
}