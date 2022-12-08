export const Error = ({mensaje}) => {
  return (
    <div className="bg-red-600 text-white text-center mb-5 p-3 rounded-md">
      <p>{mensaje}</p>
    </div>
  );
};
