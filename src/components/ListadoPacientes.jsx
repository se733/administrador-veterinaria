import { Paciente } from "./Paciente";

export const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen ">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

      <p className="text-xl mt-5 mb-10 text-center">
        Administrar {""}
        <span className="text-indigo-500 font-bold">Pacientes y citas</span>
      </p>

      {pacientes.map( paciente => (
        <Paciente key={paciente.id} paciente={paciente} />
      ))}
    </div>
  );
};
