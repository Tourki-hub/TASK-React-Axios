import { instance } from ".";

const getAllPets = async () => {
  const response = await instance.get("/pets");
  return response;
};

export { getAllPets };
