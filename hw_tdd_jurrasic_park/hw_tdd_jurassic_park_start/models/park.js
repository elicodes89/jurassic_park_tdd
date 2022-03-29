const Park = function (name, ticketPrice,) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.addDino = function (dino){
    this.dinosaurs.push(dino);
}

// Park.prototype.removeDino = function (dino1){
//     const dinoColl = []
//     for (const collection of this.dinosaurs){
//         if (collection.addDino()){
//             dinoColl.pop(collection)
//         }
//     }
//     this.dinosaurs = dinoColl;
// }

module.exports = Park;