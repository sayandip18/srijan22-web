import Image from "next/image";

export const PastSponsor = () => {
  const sponsors = [
    {
      name: "Jadavpur University",
      logo: "/logos/juLogo.png",
    },
  ];
  const dummyArray = [...Array(24)];
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-white capitalize font-bold text-6xl">
          Past Sponsors
        </h1>
        <div className="flex space-x-2">
          <div className="h-3 w-3 bg-white"></div>
          <div className="h-3 w-3 bg-gray-500"></div>
          <div className="h-3 w-3 bg-gray-500"></div>
        </div>
      </div>
      <div className="grid grid-cols-5 my-20 gap-20 justify-between">
        {dummyArray.map((i, idx) => {
          return (
            <div
              key={i}
              className="h-40 w-40 border-2 bg-primary-500 relative flex justify-center items-center p-3"
            >
              <div className="h-40 w-40 border-2  ml-3 mt-3 absolute"></div>
              <img
                className="bg-primary-500 max-h-32"
                src={`/images/${idx + 1}.png`}
                alt="Sponsor Logo"
                // height="156"
                // width="156"
              ></img>
            </div>
          );
        })}
      </div>
    </>
  );
};