// import React from "react";

// const Location = () => {
//   return (
//     <>
//       <section data-aos="fade-up" className="">
//         <div className="container my-4">
//           <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
//             Location to visit
//           </h1>

//           <div className="rounded-xl ">
//             <iframe
//               src="https://maps.google.com/maps?width=1025&amp;height=1479&amp;hl=en&amp;q= bandgladesh&amp;t=&amp;z=3&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//               width="100%"
//               height="360"
//               allowfullscreen=""
//               loading="lazy"
//               referrerpolicy="no-referrer-when-downgrade"
//               style={{ borderRadius: "20px" }}
//             ></iframe>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Location;

import React from "react";

const Location = () => {
  return (
    <>
      <section data-aos="fade-up" className="">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to visit
          </h1>

          <div className="rounded-xl">
            <iframe
              src="https://maps.google.com/maps?width=1025&amp;height=1479&amp;hl=en&amp;q=bandgladesh&amp;t=&amp;z=3&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="360"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
