export const ImageCard = ({ image }) => {
  return (
    <div className="w-[400px] h-[400px] flex-auto flex items-center justify-center border overflow-hidden mt-0 mb-[15px] mx-[7.5px] border-solid border-[preto] hover:cursor-pointer first:mr-[7.5px] last:ml-[7.5px]">
      <div
        className="w-full h-full bg-cover bg-center hover:transition-transform duration-300 transform scale-110"
        style={{
          backgroundImage: `url(${image.src})`,
        }}
      />
    </div>
  );
};
