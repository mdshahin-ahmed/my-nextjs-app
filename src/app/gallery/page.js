import Image from "next/image";
import React from "react";
// import nextImage from "../../assets/next-js-image.png";
import nextImage from "@/assets/next-js-image.png";

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Image optimization</h1>
      <h2 className="text-center text-2xl">Regular image</h2>
      <img
        className="mx-auto"
        src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
        alt="Next Image"
        width={500}
        height={500}
      />
      <h2 className="text-center text-2xl">Next js image component</h2>
      <Image
        className="mx-auto"
        src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
        alt="Next Image"
        width={500}
        height={500}
        // fill
      />
      <h2 className="text-center text-2xl">Next js local image component</h2>
      <Image
        className="mx-auto"
        src={nextImage}
        alt="Next Image"
        width={500}
        height={500}
        // fill
      />
    </div>
  );
};

export default GalleryPage;
