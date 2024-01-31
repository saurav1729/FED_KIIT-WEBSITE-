import rectIMG from "../resources/rectangle.png"
import logoImg from "../resources/laptop_image.jpeg"

const About = () => {
  return (
    <div className="relative w-[90rem] h-[64rem] bg-[#0e100f] flex">
      <div
        className="absolute top-0 w-[90.0625rem] h-[41.625rem] "
        style={{
          background:
            "linear-gradient(180deg, #F45725 -356.87%, rgba(244, 87, 37, 0.00) 75.74%)",
        }}
      ></div>
      <div className="absolute top-[6.88rem] left-[31.06rem] text-white font-poppins text-[8.125rem] font-bold tracking-[0.0625rem] z-[2]">
        Dive In
      </div>
      <div className="w-[47.375rem] h-[6.0625] absolute top-[20.31rem] left-[21.44rem] text-white font-poppins text-[3.125rem] font-bold tracking-[0.0625rem] z-[2]">
        to the endless <span className="text-[#f45725]">POSSIBILITIES.</span>
      </div>
      <div
        className=" left w-[68.75rem] h-[64rem] z-[-1] "
        style={{
          background:
            "linear-gradient(180deg, #000 0%, rgba(51, 51, 51, 0.00) 100%)",
        }}
      ></div>
      <div
        className=" right-ellipse absolute w-[17.5rem] h-[17.5rem] rounded-[17.5rem] top-[23.34rem] right-[5.44rem]"
        style={{
          background:
            "linear-gradient(to bottom right, #7717B3 0%, #DF09CA 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #7717B3 0%, #DF09CA 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #7717B3 0%, #DF09CA 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #7717B3 0%, #DF09CA 50%) top right / 50% 50% no-repeat",
        }}
      ></div>
     


      <div
        className="glass absolute w-[15.625rem] h-[21.875rem] transform rotate-[-15deg] rounded-[1rem] mix-blend-overlay top-[15.94rem] right-[14.18rem] z-[1]"
       style={{"background": `url(${rectIMG}), lightgray 0% 0% / 100px 100px repeat`
    }}
      ></div>
      <div
        className="absolute w-[15.625rem] h-[21.875rem] transform rotate-[-15deg] rounded-[1rem]  border border-[#ffffff50] backdrop:filter backdrop-blur-[21px]  mix-blend-overlay top-[15.94rem] right-[14.18rem] z-[1]"
        style={{
          background:
            "linear-gradient(153deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%",
        }}
      ></div>

    
      <div className="left-ellipse absolute top-[14.62rem] right-[26.06rem] w-[7.125rem] h-[7.125rem]] z-[0]">
      <svg xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
  <circle cx="57" cy="57" r="57" fill="url(#paint0_diamond_1_66)"/>
  <defs>
    <radialGradient id="paint0_diamond_1_66" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(79.8 26.505) rotate(104.606) scale(90.4169)">
      <stop stop-color="#17B384"/>
      <stop offset="1" stop-color="#0938DF"/>
    </radialGradient>
  </defs>
</svg>
      </div>
      <div className="absolute top-[30rem] left-[18.63rem] w-[45.28688rem] h-[29.04525rem] ">

      <div className="absolute w-[13.125rem] h-[13.125rem] flex-shrink-0 top-[20rem] left-[25rem] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="211"
            height="211"
            viewBox="0 0 211 211"
            fill="none"
          >
            <circle
              cx="105.59"
              cy="105.62"
              r="105"
              fill="url(#paint0_diamond_1_75)"
            />
            <defs>
              <radialGradient
                id="paint0_diamond_1_75"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(141.965 39.9952) rotate(102.035) scale(174.459)"
              >
                <stop stop-color="#BCEEEB" />
                <stop offset="1" stop-color="#5378D9" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div
          className="rectangle  flex w-[24.19031rem] h-[36.87325rem] transform rotate-[82.071deg] border-[1px] border-[#ffffff50] rounded-[1rem] backdrop-filter backdrop-blur-[21px]"
          style={{
            background:
              "linear-gradient(153deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%)",
          }}
        >
          <img
            className="absolute rotate-[-90.571deg] w-[15.01056rem] h-[20.86563rem] left-[4.45rem] bottom-[-1.2rem] rounded-[1rem]"
            src={logoImg}
          />
          <div className="absolute transform rotate-[-90.571deg] text-white font-poppins text-[2.1875rem] font-[700] leading-normal left-[-0.45rem] top-[12rem]">
            <p>Inspire</p>
          </div>
          <div className="absolute transform rotate-[-90.571deg] text-white w-[16.6875rem] h-[11.7105rem] font-poppins text-[1.45rem] font-[400] leading-[2.1875rem] top-[3rem] left-[4rem]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        
</div>




      <div
        className="right relative w-[68.75rem] h-[64rem] z-[-1] "
        style={{
          background:
            "linear-gradient(180deg, #000 0%, rgba(51, 51, 51, 0.00) 100%)",
        }}
      ></div>
    </div>
  );
};
export default About;
