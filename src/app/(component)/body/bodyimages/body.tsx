import Featured from "@/app/props/featuredProps.tsx/featured";
import gymfemale from "@/app/images/body background/gymFemale.jpg";
import gymbro from "@/app/images/body background/gymbro.jpg";
import femaleJacket from "@/app/images/body background/femaleJacket.jpg";
import football from "@/app/images/body background/football.jpg";
import gymhover from "@/app/images/body background/gymhover.jpg";
import hovergymmen from "@/app/images/body background/hovergymmen.jpg";
import hoverboot from "@/app/images/body background/hoverboot.jpg";
import jackethover from "@/app/images/body background/jackethover.jpg";
import "./style.css";
import ButtonWhite from "@/app/props/buttons/buttonWhite";

const Body = () => {
  return (
    <div>
      <h1 className="px-10 text-xl py-5">Featured</h1>

      <div className="parentGrid ">
        {/* first one */}
        <div
          className="div1Grid hover:cursor-pointer relative 
        "
        >
          {/* background image */}
          <div className="parent ">
            {/* hovered */}

            <div className="div1 w-full">
              <Featured
                altText="sport woman in the gym"
                imageStyle="h-[26.35rem] w-[50%]"
                image={gymhover}
              />
            </div>

            {/* unhovered */}
            <div className="div2 w-full">
              <Featured
                altText="sport woman in the gym"
                imageStyle="h-[26.35rem] w-[50%]"
                image={gymfemale}
              />
            </div>
          </div>

          {/* text */}
          <div
            className="absolute bottom-5 left-5 text-white
            flex flex-col gap-1"
          >
            <p>Nike Gym wear for female</p>
            <h1>Make an Impression</h1>
            <ButtonWhite text="Shop for gym wear" />
          </div>
        </div>

        {/* second one */}
        <div className="div2Grid hover:cursor-pointer relative">
          {/* background image */}
          <div className="parent ">
            {/* unhovered */}
            <div className="div1 w-full">
              <Featured
                altText="sport men in the gym"
                imageStyle="w-[50%] h-[26.35rem]"
                image={hovergymmen}
              />
            </div>

            {/* hovered */}
            <div className="div2 w-full">
              <Featured
                altText="sport men in the gym"
                image={gymbro}
                imageStyle="w-[50%] 
                 h-[26.35rem]"
              />
            </div>
          </div>

          {/* text */}
          <div
            className="absolute bottom-5 left-5 text-white
            flex flex-col gap-1"
          >
            <p>Nike gym wear for male</p>
            <h1>Make an Impression</h1>
            <ButtonWhite text="Shop for gym wear" />
          </div>
        </div>

        {/* third one */}
        <div
          className="div3Grid hover:cursor-pointer relative
        "
        >
          {/* background image */}
          <div className="parent ">
            {/* unhovered */}
            <div className="div1 w-full">
              <Featured
                altText="soccer boot"
                imageStyle="w-[50%]
                 h-[26.35rem]"
                image={hoverboot}
              />
            </div>

            {/* hovered */}
            <div className="div2 w-full">
              <Featured
                altText="soccer boot"
                image={football}
                imageStyle="w-[50%]  
                 h-[26.35rem]"
              />
            </div>
          </div>

          {/* text */}
          <div
            className="absolute bottom-5 left-5 text-white
            flex flex-col gap-1"
          >
            <p>Nike gym wear for male</p>
            <h1>Make an Impression</h1>
            <ButtonWhite text="Order your soccer boot" />
          </div>
        </div>

        {/* fourth one */}
        <div
          className="div4Grid hover:cursor-pointer relative
        "
        >
          {/* background image */}
          <div className="parent w-full">
            {/* hovered */}
            <div className="div1 ">
              <Featured
                altText="jacket"
                image={jackethover}
                imageStyle="w-[50%] 
                 h-[26.35rem]"
              />
            </div>

            {/* unhovered */}
            <div className="div2 ">
              <Featured
                altText="jacket"
                imageStyle="w-[50%] 
                 h-[26.35rem]"
                image={femaleJacket}
              />
            </div>
          </div>

          {/* text */}
          <div
            className="absolute bottom-5 left-5 text-white
            flex flex-col gap-1"
          >
            <p>Nike Sportwear</p>
            <h1>Make an Impression</h1>
            <ButtonWhite text="Order your jacket" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
