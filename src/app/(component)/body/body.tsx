import Featured from "@/app/props/featuredProps.tsx/featured";
import gymfemale from "@/app/images/body background/gymFemale.jpg";
import gymbro from "@/app/images/body background/gymbro.jpg";
import femaleJacket from "@/app/images/body background/femaleJacket.jpg";
import football from "@/app/images/body background/football.jpg";
import hovergymfemale from "@/app/images/body background/hovergymfemale.jpg";
import hovergymmen from "@/app/images/body background/hovergymmen.jpg";
import hoverboot from "@/app/images/body background/hoverboot.jpg";
import "./style.css";

const Body = () => {
  return (
    <div>
      <h1 className="px-10 text-xl py-5">Featured</h1>

      <div className="flex flex-row flex-wrap">
        {/* first one */}
        <div className="parent  hover:cursor-pointer w-[50%] h-[30%]">
          {/* hovered */}

          <div className="div1 w-full">
            <Featured
              textOne="Nike Gym wear for female"
              textTwo="Make an Impression"
              buttonText="Shop LD-1000"
              altText="sport woman in the gym"
              imageStyle="w-[50%] h-[26.35rem]"
              image={hovergymfemale}
            />
          </div>

          {/* unhovered */}
          <div className="div2 w-full">
            <Featured
              textOne="Nike Gym wear for female"
              textTwo="Make an Impression"
              buttonText="Shop LD-1000"
              altText="sport woman in the gym"
              imageStyle="w-[50%] h-[26.35rem]"
              image={gymfemale}
            />
          </div>
        </div>

        {/* second one */}
        <div className="parent  hover:cursor-pointer w-[50%] h-[30%]">
          {/* unhovered */}
          <div className="div1 w-full">
            <Featured
              textOne="Nike Gym wear for men"
              textTwo="Make an Impression"
              buttonText="Shop LD-1000"
              altText="sport woman in the gym"
              imageStyle="w-[50%] h-[26.35rem]"
              image={hovergymmen}
            />
          </div>

          {/* hovered */}
          <div className="div2 w-full">
            <Featured
              textOne="Nike Gym wear"
              textTwo="Make an Impression"
              buttonText="Shop LD-1000"
              altText="sport woman in the gym"
              image={gymbro}
              imageStyle="w-[50%] h-[26.35rem]"
            />
          </div>
        </div>

        {/* second one */}
        <div className="parent  hover:cursor-pointer w-[50%] h-[30%]">
          {/* unhovered */}
          <div className="div1 w-full">
            <Featured
              textOne="Nike Gym wear for men"
              textTwo="Make an Impression"
              buttonText="Shop LD-1000"
              altText="sport woman in the gym"
              imageStyle="w-[50%] h-[26.35rem]"
              image={hoverboot}
            />
          </div>

          {/* hovered */}
          <div className="div2 w-full">
            <Featured
              textOne="Nike Sportwear"
              textTwo="Make an Impression"
              buttonText="Shop LD-1000"
              altText="sport woman in the gym"
              image={football}
              style="w-[50%] h-[26.35rem]"
            />
          </div>
        </div>

        <Featured
          textOne="Nike Sportwear"
          textTwo="Make an Impression"
          buttonText="Shop LD-1000"
          altText="sport woman in the gym"
          image={femaleJacket}
          style="w-[50%] h-[30%]"
        />
      </div>
    </div>
  );
};

export default Body;
