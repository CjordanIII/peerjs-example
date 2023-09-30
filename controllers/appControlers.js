const { v4: uuidV4 } = require("uuid");

function root(req, res) {
  res.redirect(`/${uuidV4()}`);
}

function newRoom(req, res) {
  res.render("Room", { roomId: req.params.room });
}

module.exports = {
  root,
  newRoom,
};
