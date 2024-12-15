import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import { Inter } from "next/font/google";

// Importing custom fonts
const InterFont = Inter({ subsets: ["latin"] });
const VibeFont = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

const Categories = () => {
  return (
    // Main container for the section
    <div className="bg-black h-2000px] ">
      {/* Food Category Title */}
      <p
        className={`${VibeFont.className} text-[#FF9F0D] md:ml-[630px] leading-[40px] md:w-[177px] font-normal text-[32px] md:h-[40px]  ml-[10px]`}
      >
        Food Category
      </p>

      {/* Choose Food Item Title */}
      <p className="md:w-[446px] md:h-[56px] font-bold md:text-[48px] text-[30px] ml-[50px] md:mb-[40px]  md:ml-[500px] leading-[56px] text-[#FFFFFF] md:my-0 my-[30px]">
        <span className="text-[#FF9F0D]">Ch</span>oose Food Iteam
      </p>

      {/* Food Categories Images */}
      <div className="grid ml-[35px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white gap-[30px] md:ml-[100px] ">
        {/* Category 1 Image with "Save 30%" Label */}
        <div className="relative">
          <Image src="/categ1.png" width={305} height={328} alt="categ1" />
          <div
            className={` ${InterFont.className} font-bold absolute top-2 left-2 text-[18px] leading-[26px] md:ml-[100px] md:mt-[130px] mt-[140px] ml-[90px] text-[#FF9F0D] bg-[#FFFFFF] text-sm px-2 py-1 rounded-[6px]`}
          >
            save 30%
          </div>
          <div
            className={` ${InterFont.className} font-bold absolute top-2 left-2 text-[18px] leading-[26px]  md:mt-[170px] mt-[180px] text-[#FFFFFF] bg-[#FF9F0D]  text-sm px-14 py-1 rounded-[6px]`}
          >
            save 30%
          </div>
        </div>

        {/* Category 2 Image */}
        <div>
          <Image src="/categ2.png" width={305} height={328} alt="categ1" />
        </div>

        {/* Category 3 Image */}
        <div>
          <Image src="/categ3.png" width={305} height={328} alt="categ1" />
        </div>

        {/* Category 4 Image */}
        <div>
          <Image src="/categ4.png" width={305} height={328} alt="categ1" />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div
        className="w-full bg-cover bg-center relative flex flex-col  md:ml-[100px] justify-cter it-center md:flex-row text-white md:mt-[120px]"
        style={{ backgroundImage: "url('assets/background.svg')" }}
      >
        <div>
          <div className="flex md:mr-[100px] flex-col gap-3">
            <div className="flex flex-col md:flex-row gap-1">
              <div>
                <Image
                  src="/paratha.png"
                  alt="paratha"
                  width={362}
                  height={356}
                  className="p-[20px]"
                />
              </div>
              <div>
                <Image
                  src="/burger.png"
                  alt="burger"
                  width={281}
                  height={231}
                  className="md:mt-[120px]"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <div>
                <Image
                  src="/kabab.png"
                  width={244}
                  height={306}
                  alt="burger"
                  className="md:w-[224px] w-[210px] md:ml-0 ml-[110px]"
                />
              </div>
              <div>
                <Image
                  src="/cheezburger.png"
                  alt="burger2"
                  width={221}
                  height={226}
                  className="md:w-[221px] w-[200px] md:ml-0 ml-[30px]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <Image
                    src="/raita.png"
                    alt="raita-pic"
                    width={161}
                    height={168}
                    className="md:ml-0 ml-[170px]"
                  />
                </div>
                <div>
                  <Image
                    src="/lastpic.png"
                    alt="raita-pic"
                    width={161}
                    height={168}
                    className="md:ml-0 ml-[20px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Text */}
        <div className="flex flex-col md:mt-[70px]">
          <p
            className={`${VibeFont.className} text-[#FF9F0D] text-center md:text-left text-[24px] md:text-[32px] font-normal leading-[30px] md:leading-[40px] mt-[40px] md:mt-0`}
          >
            Why Choose us
          </p>

          <h2 className="font-bold text-center md:text-left text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] mt-4 md:mt-2 text-[#FFFFFF] max-w-[500px] mx-auto md:mx-0">
            <span>Ex</span>traordinary taste And Experienced
          </h2>

          <p
            className={`${InterFont.className} font-normal ml-[30px] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#FFFFFF] max-w-[500px] md:max-w-[526px] mt-4 mx-auto md:mx-0`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          {/* Icons with Titles */}
          <div className="flex my-[20px] md:gap-0 gap-[45px] md:ml-0 ml-[10px] md:mx-0 mx-[10px] md:my-[40px] md:bg-none bg-[#FF9F0D] md:p-0 p-[10px]">
            {/* Fast Food Icon */}
            <div className="flex flex-col ">
              <p className="bg-[#FF9F0D] md:w-[102px] md:h-[100px] rounded-[6px] md:mr-[30px]">
                <Image
                  src="/Hamburger.png"
                  alt="humberger-icon"
                  width={56}
                  height={56}
                  className="md:m-[20px]"
                />
              </p>
              <p
                className={`${InterFont.className} font-normal text-[18px] leading-[26px]  md:ml-2`}
              >
                Fast Food
              </p>
            </div>

            {/* Lunch Icon */}
            <div className="flex flex-col ">
              <p className="bg-[#FF9F0D] md:w-[102px] md:h-[100px] rounded-[6px] md:mr-[30px]">
                <Image
                  src="/Cookie.png"
                  alt="cookie-icon"
                  width={56}
                  height={56}
                  className="md:m-[20px]"
                />
              </p>
              <p
                className={`${InterFont.className} font-normal md:ml-6 text-[18px] leading-[26px]`}
              >
                Lunch
              </p>
            </div>

            {/* Dinner Icon */}
            <div className="flex flex-col">
              <p className="bg-[#FF9F0D] md:w-[102px] md:h-[100px] rounded-[6px] md:mr-[30px]">
                <Image
                  src="/Wine.png"
                  alt="wine-icon"
                  width={56}
                  height={56}
                  className="md:m-[20px]"
                />
              </p>
              <p
                className={`${InterFont.className} font-normal text-[18px] leading-[26px] md:ml-6`}
              >
                Dinner
              </p>
            </div>
          </div>

          {/* Experience Stats Section */}
          <div className="relative w-[374px] md:ml-0 ml-4 h-[92px]">
            <Image
              src="/rect.png"
              alt="rectangle"
              width={374}
              height={92}
              className="border-l-8 border-[#FF9F0D] md:w-[374px] w-[350px] rounded-2xl"
            />
            <div className="absolute inset-0 flex gap-[30px] items-center justify-center">
              <span className="text-[48px] leading-[56px] font-[700] text-[#FF9F0D]">
                30+
              </span>
              <span className="text-black ">
                <span
                  className={` ${InterFont.className} text-[20px] leading-[28px] font-[400]`}
                >
                  Years of
                </span>{" "}
                <br />
                <span className="text-[24px] leading-[32px] font-[700]">
                  Experienced
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Professional Chefs Stats */}
      <div className="text-white flex flex-col md:flex-row md:m-[80px] md:mt-[160px]">
        <div className="flex flex-col">
          <div className="md:ml-[135px] ml-[140px] md:mt-0 mt-[20px]">
            <Image src="/cap.png" alt="cap-pic" height={120} width={120} />
          </div>
          <p className="md:w-[218px] md:h-[32px] font-bold text-[24px] leading-[32px] text-[#FFFFFF] md:ml-[100px] ml-[89px] my-6">
            Professional Chefs
          </p>
          <p className="md:w-[67px] md:h-[48px] font-bold text-[40px] leading-[48px] text-[#FFFFFF] md:ml-[165px] ml-[163px] md:my-0 my-6">
            420
          </p>
        </div>

        {/* Repeat for other items */}
        <div className="flex flex-col">
          <div className="md:ml-[135px] ml-[140px]">
            <Image src="/juice.png" alt="juice-icon" height={120} width={120} />
          </div>
          <p className="md:w-[218px] md:h-[32px] font-bold text-[24px] leading-[32px] text-[#FFFFFF] md:ml-[100px] ml-[89px] my-6">
            Professional Chefs
          </p>
          <p className="md:w-[67px] md:h-[48px] font-bold text-[40px] leading-[48px] text-[#FFFFFF] md:ml-[165px] ml-[163px] md:my-0 my-6">
            320
          </p>
        </div>

        {/* Repeat for the last items */}
        <div className="flex flex-col">
          <div className="md:ml-[135px] ml-[140px]">
            <Image src="/spoon.png" alt="spoon-icon" height={120} width={120} />
          </div>
          <p className="md:w-[218px] md:h-[32px] font-bold text-[24px] leading-[32px] text-[#FFFFFF] md:ml-[100px] ml-[89px] my-6">
            Professional Chefs
          </p>
          <p className="md:w-[67px] md:h-[48px] font-bold text-[40px] leading-[48px] text-[#FFFFFF] md:ml-[165px] ml-[163px] md:my-0 my-6">
            30+
          </p>
        </div>

        <div className="flex flex-col ">
          <div className="md:ml-[135px] ml-[140px]">
            <Image src="/pizza.png" alt="pizza-icon" height={120} width={120} />
          </div>
          <p className="md:w-[218px] md:h-[32px] font-bold text-[24px] leading-[32px] text-[#FFFFFF] md:ml-[100px] ml-[89px] my-6">
            Professional Chefs
          </p>
          <p className="md:w-[67px] md:h-[48px] font-bold text-[40px] leading-[48px] text-[#FFFFFF] md:ml-[165px] ml-[163px] md:my-0 my-6">
            220
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
