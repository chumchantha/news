const ColumCard = ({
  imageUrl,
  title,
}: {
  imageUrl: string;
  title: string;
}) => {
  return (
    <div className="flex gap-2 shadow-2xl rounded-md overflow-hidden">
      <img className="w-[70%] object-cover object-center" src={card.imageUrl} />
      <h2 className="p-4">{card.title}</h2>
    </div>
  );
};

export default ColumCard;
