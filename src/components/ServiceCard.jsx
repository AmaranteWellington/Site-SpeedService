const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg border hover:shadow-xl transition w-full sm:w-[300px]">
      <h3 className="text-xl font-semibold text-blue-700 mb-2"> {title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;
