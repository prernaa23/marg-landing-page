import React from "react";
import Card from "./Card";
import img4 from "./image 4.png";
import img5 from "./image 5.png";
import img6 from "./image 6.png";

function Last() {
  return (
    <div className="bg-[#BDC7C9] font-['Open_Sans'] h-screen w-full px-[4vw] flex flex-col justify-center place-content-center justify-items-center items-center">
      <div className="grid grid-cols-3 gap-[6vw]">
          <Card
            url={img4}
            topLeft="LANDSCAPE"
            title="MEADOWS"
            text="The core objective of our project is to promote and preserve the cultural and heritage roots of the Indian Subcontinent."
          ></Card>
          <Card
            url={img5}
            topLeft="NODAL INSTITUTION"
            title="CIVIC DESIGN LAB"
            text="The core objective of our project is to promote and preserve the cultural and heritage roots of the Indian Subcontinent."
          ></Card>
          <Card
            url={img6}
            topLeft="INTANGIBLE HERITAGE"
            title="CULTURAL GATHERINGS"
            text="The core objective of our project is to promote and preserve the cultural and heritage roots of the Indian Subcontinent."
          ></Card>
      </div>
    </div>
  );
}

export default Last;
