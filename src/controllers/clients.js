import ClientRepository from "../models/clientsModel.js";

async function findAll(req, res) {
  const clients = await ClientRepository.findAll();
  res.json(clients);
}

export default { findAll };