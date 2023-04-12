import React from "react";

const Moreabout = () => {
  // const list=[
  //     {
  //         heading: 'About Us',

  //     },

  //     {  items:'Mercedes-Benz Group Ag'

  //     },

  //     {  items:'Mercedes-Benz Group Ag'

  //     },

  //     {  items:'Mercedes-Benz Group Ag'

  //     },

  //     {  items:'Mercedes-Benz Group Ag'

  //     },
  //     {
  //         items:'Mercedes-Benz Group Ag',
  //     }
  // ]

  // const list2 =[
  //     {
  //         heading:'Careers',
  //     },

  //         {items: 'Job Search',
  //         }
  //         ,

  //         {items: 'Job Search',
  //         }

  //         ,

  //         {items: 'Job Search',
  //         }

  //         ,

  //         {items: 'Job Search',
  //         }

  //         ,

  //         {items: 'Job Search',
  //         }
  // ]

  // const list3=[

  //     {
  //         heading: 'Knowleadge Center'
  //     },
  //     {
  //         items:'Consumption & Emissions'
  //     }
  //     ,
  //     {
  //         items:'Consumption & Emissions'
  //     },
  //     {
  //         items:'Consumption & Emissions'
  //     },
  //     {
  //         items:'Consumption & Emissions'
  //     },
  //     {
  //         items:'Consumption & Emissions'
  //     },
  //     {
  //         items:'Consumption & Emissions'
  //     }
  // ]

  // const list4=[
  //     {
  //         heading:'Services'
  //     },
  //     {
  //         items:'Fleet Sales'
  //     },
  //     {
  //         items:'Fleet Sales'
  //     },
  //     {
  //         items:'Fleet Sales'
  //     }
  // ]

  return (
    <div className="h-[450px] bg-black p-28  ">

    <div className="border-t p-10 mt-10">
      <div className="flex gap-10 justify-around items-center bg-black text-white ">
        <h1 className="font-semibold text-2xl ">More</h1>

        <div className=" grid grid-cols-3 gap-10 text-start justify-center font-sans-serif text-sm leading-6">
          <ul>
            <li className="font-bold"> About Us</li>
            <li className="text-gray-400 hover:text-white delay-200 ">
              Mercedes-Benz Group AG
            </li>
            <li className="text-gray-400 hover:text-white delay-200">
              Business Units
            </li>
            <li className="text-gray-400 hover:text-white delay-200">
              Investors
            </li>
            <li className="text-gray-400 hover:text-white delay-200">Press</li>
          </ul>

          <ul>
            <li className="font-bold">Careers</li>
            <li className="text-gray-400 hover:text-white delay-200">
              Job Search
            </li>
            <li className="text-gray-400 hover:text-white delay-200">
              Professionals
            </li>
            <li className="text-gray-400 hover:text-white delay-200">
              Graduates
            </li>
            <li className="text-gray-400 hover:text-white delay-200">
              Students
            </li>
            <li className="text-gray-400 hover:text-white delay-200">
              Talent Programs
            </li>
          </ul>

          <ul>
            <li className="font-bold">Knwledge Center </li>
            <li className="text-gray-400 hover:text-white delay-200">
              Consumption & Emissions
            </li>
            <li className="text-gray-400 hover:text-white delay-200">
              Mercedes -Benz Energy Storage
            </li>
            <li className="text-gray-400 hover:text-white delay-200">
              Real Driving Emissions
            </li>
            <li className="text-gray-400 hover:text-white delay-200">
              Semiconductor Availability{" "}
            </li>
            <li className="text-gray-400 hover:text-white delay-200">
              {" "}
              UN 38.3 Test
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-black text-white py-10  justify-center flex -ml-[70px]">
        <ul className="text-start font-sans-serif text-sm">
          <li className="font-bold">Business Services</li>
          <li className="text-gray-400 hover:text-white delay-200">
            {" "}
            Fleet Sales
          </li>
          <li className="text-gray-400 hover:text-white delay-200">
            International Diplomatic Sales
          </li>
          <li className="text-gray-400 hover:text-white delay-200">
            Training for Authorized Dealers
          </li>
        </ul>
      </div>
</div>
      {/* use map */}

      {/* <div>
    <h1>More</h1>
</div>

<div className='flex'>


{ list.map((object)=>(
    <div >
    { object.heading}
   { object.items} 
   </div>
))}



{ list2.map((object)=>(
    <div>
    <p>{ object.heading}</p>
   <p> { object.items}</p>
  
    </div>
))}


{ list3.map((object)=>(
    <div>
    <p>{ object.heading}</p>
   <p> { object.items}</p>
  
    </div>
))}

</div>

{ list4.map((object)=>(
    <div>
    <p>{ object.heading}</p>
   <p> { object.items}</p>
  
    </div>
))}
 */}
    </div>
  );
};

export default Moreabout;
