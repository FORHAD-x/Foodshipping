import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const App = () => {
  const settings = {
    // className: "slider variable-width",
    dots: false,
    infinite: true,
    // centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
 
  
  return (
    <>
    {/* ================== navbar start ========== */}

    <section className='navbar container flex justify-between pt-[163px] pb-[119px]'>
      <div className='nav1 flex items-center gap-1'>
        <button className='px-[21px] py-2.5 bg-[#D9D9D9] rounded-[30px] font-bold font-Inter text-black'>Foodshipping</button>
        <button className='w-[38px] h-[38px] bg-[#D9D9D9] rounded-full font-medium font-Inter text-[#00000080]'>UK</button>
      </div>
      <div className='nav2 flex gap-2'>
        <button className='px-[21px] py-2.5 bg-[#D9D9D9] rounded-[30px] font-bold font-Inter text-black'>About Us</button>
        <button className='px-[21px] py-2.5 bg-[#D9D9D9] rounded-[30px] font-bold font-Inter text-black'>Shop Now</button>
      </div>
    </section>
    {/* ================== navbar end ========== */}

    {/* ================== hero start ========== */}
    <section className='hero container'>
      <div className='text pb-[28px] flex justify-between'>
        <h1 className='w-[512px] font-Inter font-bold text-[70px] line-clamp-[78px] leading-[78px]'>Unlock your Potential</h1>
        <p className='pt-[100px] w-[205px] font-Inter font-medium text-[18px] text-black text-end'>Fuel Your Journey <br/>with <span className='font-bold'>Premium nutrition</span></p>
      </div>
      <div className="image pb-[121px]">
        <img src="public/Mask group.png" alt="" width={"100%"} />
      </div>
      <h2 className='w-[879px] h-[240px] font-Inter font-normal text-[40px]'>
        At foodspring,we’re revilutionzing nuteition
        and fitness. Founded in Berlin in 2013, we’ve
        quickly become a leading brand in sports
        nutrition and functional foods across europe.  
      </h2>
    </section>
    {/* ================== hero end ========== */}

    {/* ================== Our Advantages start ========== */}
    <section className='Advantages container '>
      <h2 className='font-Inter font-medium text-[45px] pt-[112px] pb-[36px]'>Our Advantages</h2>

      <div className="main flex gap-6">
          {/*============ Quality1 ======== */}
          <div className="Quality1">
            <img src="public/Mask group (1).png" alt="" />
            <div className='text flex relative pt-[22px] gap-[px]'>
                <h3 className='w-[199px] h-[58px] text-[25px] font-Inter font-semibold text-black'>Premium Quality Ingredients</h3>
                <p className='w-[262px]  absolute top-[24px] left-[277px] text-[15px] font-Inter font-normal text-black'>Lorem Ipsum is simply dummy text of the printing 
                  and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since 
                </p>
            </div>
          </div>
          {/*============ Quality2 ======== */}
          <div className="Quality2">
            <img src="public/Mask group (2).png" alt="" />
            <div className='text flex pt-[22px] gap-[65px]'>
                <h3 className='w-[199px] h-[58px] text-[25px] font-Inter font-semibold text-black'>Premium Quality Ingredients</h3>
                <p className='w-[262px] text-[15px] font-Inter font-normal text-black'>Lorem Ipsum is simply dummy text of the printing 
                  and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since 
                </p>
            </div>
          </div>
          {/*============ Quality3 ======== */}
          <div className="Quality3">
            <img src="public/unsplash_V.png" alt="" />
            <div className='text flex pt-[22px] gap-[76px]'>
                <h3 className='w-[199px] h-[58px] text-[25px] font-Inter font-semibold text-black'>Premium Quality Ingredients</h3>
            </div>
          </div>

      </div>

    </section>
    {/* ================== Our Advantages end ========== */}


{/*==================== Essential Packs start ============= */}
    <section className='Essential  mb-[134px]'>

      <h2 className='font-Inter font-medium text-[45px] pt-[212px] pb-[39px]'>Essential Packs</h2>

{/*================= slider ==============  */}
<div className="slider-container pl-[36px] overflow-hidden">
      <Slider {...settings}>
        <div className=''>
          <h3 className="Packs1 w-[384px]  shadow-xl ">
            <img src="public/Mask group (3).png" alt="" />
            <div className='flex justify-between pt-[20px] px-2'>
          <div>
            <h4 className='font-Inter font-medium text-black text-[20px]'>muscle pack basic</h4>
            <p className='font-Inter font-medium text-black text-[15px]'>3 products</p>
            <button className='px-3.5 py-1.5 bg-[#D9D9D9] rounded-[30px] font-Inter font-medium text-black text-[15px] mt-[15px] mb-[28px]'>Add To Cart</button>
          </div>
          <h4 className='font-Inter font-medium text-black text-[20px]'>$69.99</h4>
        </div>
            <p className=' w-[372px] px-2 pb-5 font-Inter font-normal text-black text-[15px]'>Lorem Ipsum is simply dummy text
              of the printing and typesetting 
              industry. Lorem Ipsum has been the
              industry's standard dummy text ever since 
            </p>

          </h3>
        </div>
         <div className='mx-6'>
          <h3 className="Packs1 w-[690px] mb-3   shadow">
             <img src="public/Mask group (4).png" alt="" width={"100%"} />

        <div className='flex justify-between pt-[20px] px-2'>
          <div>
            <h4 className='font-Inter font-medium text-black text-[20px]'>muscle pack basic</h4>
            <p className='font-Inter font-medium text-black text-[15px]'>3 products</p>
            <button className='px-3.5 py-1.5 bg-[#D9D9D9] rounded-[30px] font-Inter font-medium text-black text-[15px] mt-[15px] mb-[28px]'>Add To Cart</button>
          </div>
          <h3 className='font-Inter font-medium text-black text-[20px]'>$69.99</h3>
        </div>
            <p className=' w-[372px] px-2 pb-5 font-Inter font-normal text-black text-[15px]'>Lorem Ipsum is simply dummy text
              of the printing and typesetting 
              industry. Lorem Ipsum has been the
              industry's standard dummy text ever since 
            </p>

          </h3>
        </div>
        <div className='mr-6'>
          <h3 className="Packs1 w-[464px]  shadow-xl">
            <img src="public/unsplash_R23MqZKCBcM.png" alt="" />

        <div className='flex justify-between pt-[20px] px-2'>
          <div>
            <h4 className='font-Inter font-medium text-black text-[20px]'>muscle pack basic</h4>
            <p className='font-Inter font-medium text-black text-[15px]'>3 products</p>
            <button className='px-3.5 py-1.5 bg-[#D9D9D9] rounded-[30px] font-Inter font-medium text-black text-[15px] mt-[15px] mb-[28px]'>Add To Cart</button>
          </div>
          <h3 className='font-Inter font-medium text-black text-[20px]'>$69.99</h3>
        </div>
            <p className=' w-[372px] px-2 pb-5 font-Inter font-normal text-black text-[15px]'>Lorem Ipsum is simply dummy text
              of the printing and typesetting 
              industry. Lorem Ipsum has been the
              industry's standard dummy text ever since 
            </p>
          </h3>
        </div>
        
        


        
      </Slider>
    </div>

    </section>
    {/*==================== Essential Packs end ============= */}

    {/*==================== transform start ============= */}
    <section className='transform container flex justify-between pb-[134px]'>
      <div>
          <h2 className='w-[291px] leading-[50px] font-Inter font-medium text-[45px] text-black'>Ready <br/> to transform your health?</h2>
          <p className='w-[498px] font-Inter font-normal text-[15px] text-black pb-[64px] pt-[42px]'>Lorem Ipsum is simply dummy text
             of the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard
             dummy text ever since 
          </p>
          <button className='font-Inter font-medium text-[15px] text-white bg-black rounded-[30px] px-[20px] py-[10px]'>Shop now</button>

      </div>
      <img src="public/Rectangle 13.png" alt="" />

    </section>
    {/*==================== transform end ============= */}

    {/*========= FaQ start=============*/}
<section className='faq container flex justify-between pb-[120px]'>
      <h2 className='w-[291px] leading-[50px] font-Inter font-medium text-[45px] text-black'>Frequently Asked Questions</h2>
      <div>
         <Accordion className='w-[588px]'>
      <AccordionItem  header="Lorem Ipsum is simply dummy text of the printing?" buttonProps={alert}  className={"border-y-2  py-5.5 pl-[25px] pr-[125px] border-[rgba(0,0,0,0.5)]"}>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
      </AccordionItem>
      <AccordionItem  header="Lorem Ipsum is simply dummy text of the printing?" className={"border-b-2  py-5.5 pl-[25px] pr-[125px] border-[rgba(0,0,0,0.5)]"}>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
      </AccordionItem>
      <AccordionItem  header="Lorem Ipsum is simply dummy text of the printing?" className={"border-b-2  py-5.5 pl-[25px] pr-[125px] border-[rgba(0,0,0,0.5)]"}>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
      </AccordionItem>
      <AccordionItem  header="Lorem Ipsum is simply dummy text of the printing?" className={"border-b-2  py-5.5 pl-[25px] pr-[125px] border-[rgba(0,0,0,0.5)]"}>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
      </AccordionItem>
      <AccordionItem  header="Lorem Ipsum is simply dummy text of the printing?" className={"border-b-2  py-5.5 pl-[25px] pr-[125px] border-[rgba(0,0,0,0.5)]"}>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
      </AccordionItem>
      <AccordionItem  header="Lorem Ipsum is simply dummy text of the printing?" className={"border-b-2  py-5.5 pl-[25px] pr-[125px] border-[rgba(0,0,0,0.5)]"}>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
      </AccordionItem>

      
    </Accordion>
      
      </div>


</section>
    {/*========= FaQ end =============*/}

{/* Footer start */}
    <section className='Footer bg-[#F6F6F6] pt-[43px] pb-[115px]'>
      <div className="main container flex  gap-[345px]">
        <div className="social">
          <h3 className='font-Inter font-bold text-black text-[15px]'>Foodshipping</h3>
          <div className='flex gap-2 pt-2 pb-[55px]'>
            <img src="public/instagram.png" alt="" />
            <img src="public/new-twitter.png" alt="" />
          </div>
        <p className='font-Inter font-normal text-black text-[15px]'> © 2025 foodshiping all right reserved</p>
        </div>

        <div className="about font-Inter font-medium text-[rgba(0,0,0,0.5)] text-[15px]">
          <p>About us</p>
          <p>online shop</p>
          <p>Blog</p>
        </div>

        <div className="about font-Inter font-medium text-[rgba(0,0,0,0.5)] text-[15px] ">
          <p>About us</p>
          <p>online shop</p>
          <p>Blog</p>
        </div>

      </div>

    </section>
{/* Footer end */}

    </>
  )
}

export default App