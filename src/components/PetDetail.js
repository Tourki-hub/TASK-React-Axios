import React from "react";
import petsData from "../petsData";
import { Link, Navigate, useParams } from "react-router-dom";

const PetDetail = () => {
  const { petId } = useParams();
  const petFinder = petsData.find((pet) => pet.id == petId);
  console.log(`${petId} : ${petFinder}`);
  if (!petFinder) {
    return <Navigate to="/" />;
  }

  const pet = petsData[0];
  return (
    <div className="bg-[#F9E3BE] w-screen h-[100vh] flex justify-center items-center">
      <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
        <div className="h-full w-full md:w-[35%]">
          <img
            src={petFinder.image}
            alt={petFinder.name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
          <h1>Name: {petFinder.name}</h1>
          <h1>Type: {petFinder.type}</h1>
          <h1>adopted: {petFinder.adopted}</h1>

          <button className="w-[70px] border border-black rounded-md  hover:bg-green-400 mb-5">
            Adobt
          </button>

          <button className="w-[70px] border border-black rounded-md  hover:bg-red-400">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
