import React from "react";

export const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añadir paciente y {""}
        <span className="text-indigo-500 font-bold ">Administralos </span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="nombre de la mascota"
            className="border-2 w-full p-2 mt-3 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="nombre del propietario"
            className="border-2 w-full p-2 mt-3 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="email de contacto"
            className="border-2 w-full p-2 mt-3 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-3 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="describe los sintomas"
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-500 w-full p-3 text-white uppercase font-bold hover:bg-indigo-600 cursor-pointer transition-all"
          value="Agregar paciente"
        />
      </form>
    </div>
  );
};
