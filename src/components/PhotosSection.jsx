import { ImageCard } from "./ImageCard";

export const PhotosSection = ({ images }) => {
  return (
    <div className="w-screen sm:w-full flex flex-wrap justify-between ">
      {images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
      })}
    </div>
  );
};
