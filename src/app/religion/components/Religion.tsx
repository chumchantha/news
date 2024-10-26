import HeaderSection from "@/components/HeaderSection";
import { data } from "@/data";

const Religion = () => {
  return (
    <section className="space-y-4">
      <HeaderSection
        bgColor="bg-yellow-600"
        hoverColor="hover:text-yellow-500"
        title="Religion"
      />

      {/* 3 Rows */}
      <div className="mx-4 grid grid-cols-3 gap-4 h-[25vw] overflow-hidden">
        {data.map((card, index) => (
          <div key={card.id}>
            {index < 3 ? (
              <div className="rounded-md overflow-hidden shadow-2xl">
                <img src={card.imageUrl} />
                <h2 className="p-4 text-base">{card.title}</h2>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      {/* 4 Colum */}
      <div className="h-[16vw] mx-4 grid grid-cols-4 gap-4">
        {data.map((card, index) => (
          <>
            {index > 2 && index <= 10 ? (
              // colum card
              <div className="flex gap-2 shadow-2xl rounded-md overflow-hidden">
                <img
                  className="w-[60vw] object-cover object-center"
                  src={card.imageUrl}
                />
                <h2 className="p-4 text-sm">{card.title}</h2>
              </div>
            ) : null}
          </>
        ))}
      </div>
    </section>
  );
};

export default Religion;
