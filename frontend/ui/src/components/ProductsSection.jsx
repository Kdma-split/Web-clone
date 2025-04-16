import { motion } from "framer-motion";
import { AnimatedSection, AdvancedTiltCard, MovingBlobBackground } from "./Animatiion.jsx";
import { useLightDarkMode } from "../contexts/LightDarkMode.context.jsx";

function ProductsSection() {
  const { aptTheme } = useLightDarkMode();  
  const products = [
    {
      id: 1,
      name: "Smart Watch",
      description: "Track your fitness goals with our cutting-edge smart watch. Features heart rate monitoring, step tracking, and smartphone notifications.",
      image: "/api/placeholder/300/300"
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      description: "Immerse yourself in crystal-clear sound with our noise-cancelling wireless earbuds. Perfect for workouts, commuting, or relaxing.",
      image: "/api/placeholder/300/300"
    },
    {
      id: 3,
      name: "Portable Charger",
      description: "Never run out of battery again with our high-capacity portable charger. Fast charging technology keeps all your devices powered up.",
      image: "/api/placeholder/300/300"
    },
    {
      id: 4,
      name: "Smart Speaker",
      description: "Control your smart home with voice commands using our AI-powered smart speaker. Rich sound quality for music playback.",
      image: "/api/placeholder/300/300"
    }
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Moving blob background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <MovingBlobBackground />
      </div>

      {/* Content section */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <AnimatedSection>
          <h1 className="text-5xl font-bold text-center mb-16">
            <span className={`${aptTheme.headingText} px-1.5 py-2`}>Our</span>
            <span className="text-blue-600 px-1.5 py-2">Products</span>
          </h1>
        </AnimatedSection>

       <div className="px-6">
          {/* Grid Layout */}
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2">
            {products.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.2}>
                <AdvancedTiltCard className="bg-blue-600 rounded-xl shadow-xl p-4 text-white h-full">
                  <div className="flex gap-4 items-center">
                    {/* Image Section */}
                    <div className="flex flex-col items-center w-1/3">
                      <div className="w-28 h-28 rounded-full overflow-hidden bg-white mb-2">
                        <motion.img 
                          src={product.image} 
                          alt={product.name}
                          className="object-cover w-full h-full"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <h2 className="text-md font-medium text-center">{product.name}</h2>
                    </div>

                    {/* Description Section */}
                    <div className="w-2/3">
                      <p className="text-sm text-blue-100">{product.description}</p>
                    </div>
                  </div>
                </AdvancedTiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;





// import { useState } from "react";
// import { motion } from "framer-motion";
// import { 
//   AnimatedSection, 
//   TiltCard, 
//   MovingBlobBackground,
//   AdvancedTiltCard
// } from "./Animatiion.jsx";

// function ProductsSection() {
//   const products = [
//     {
//       id: 1,
//       name: "Smart Watch",
//       description: "Track your fitness goals with our cutting-edge smart watch. Features heart rate monitoring, step tracking, and smartphone notifications.",
//       image: "/api/placeholder/300/300"
//     },
//     {
//       id: 2,
//       name: "Wireless Earbuds",
//       description: "Immerse yourself in crystal-clear sound with our noise-cancelling wireless earbuds. Perfect for workouts, commuting, or relaxing.",
//       image: "/api/placeholder/300/300"
//     },
//     {
//       id: 3,
//       name: "Portable Charger",
//       description: "Never run out of battery again with our high-capacity portable charger. Fast charging technology keeps all your devices powered up.",
//       image: "/api/placeholder/300/300"
//     },
//     {
//       id: 4,
//       name: "Smart Speaker",
//       description: "Control your smart home with voice commands using our AI-powered smart speaker. Rich sound quality for music playback.",
//       image: "/api/placeholder/300/300"
//     }
//   ];

//   return (
//     <div className="relative min-h-screen bg-white overflow-hidden">
//       {/* Moving blob background contained within this page only */}
//       <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
//         <MovingBlobBackground />
//       </div>
      
//       {/* Page content */}
//       <div className="relative z-10 container mx-auto px-4 py-16">
//         {/* Animated heading */}
//         <AnimatedSection>
//           <h1 className="text-5xl font-bold text-center mb-16">
//             <span className="text-white bg-blue-600 px-4 py-2 rounded-l-lg">Our</span>
//             <span className="text-blue-600 bg-white px-4 py-2 rounded-r-lg border-2 border-blue-600">Products</span>
//           </h1>
//         </AnimatedSection>

//         {/* Products column */}
//         <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
//           {products.map((product, index) => (
//             <AnimatedSection key={product.id} delay={index * 0.2}>
//               <AdvancedTiltCard className="w-full bg-blue-600 rounded-xl shadow-xl p-6 text-white">
//                 <div className="flex flex-col items-center">
//                   {/* Circular image frame */}
//                   <div className="w-40 h-40 rounded-full overflow-hidden bg-white mb-4 flex items-center justify-center">
//                     <motion.img 
//                       src={product.image} 
//                       alt={product.name}
//                       className="object-cover"
//                       whileHover={{ scale: 1.1 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   </div>
                  
//                   {/* Product name */}
//                   <h2 className="text-xl font-semibold mb-3">{product.name}</h2>
                  
//                   {/* Product description */}
//                   <p className="text-sm text-center text-blue-100">{product.description}</p>
//                 </div>
//               </AdvancedTiltCard>
//             </AnimatedSection>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductsSection;



// import { useState } from "react";
// import { motion } from "framer-motion";
// import { 
//   AnimatedSection, 
//   TiltCard, 
//   MovingBlobBackground,
//   AdvancedTiltCard
// } from "./Animatiion.jsx";

// function ProductsSection() {
//   const products = [
//     {
//       id: 1,
//       name: "Smart Watch",
//       description: "Track your fitness goals with our cutting-edge smart watch. Features heart rate monitoring, step tracking, and smartphone notifications.",
//       image: "/api/placeholder/300/300"
//     },
//     {
//       id: 2,
//       name: "Wireless Earbuds",
//       description: "Immerse yourself in crystal-clear sound with our noise-cancelling wireless earbuds. Perfect for workouts, commuting, or relaxing.",
//       image: "/api/placeholder/300/300"
//     },
//     {
//       id: 3,
//       name: "Portable Charger",
//       description: "Never run out of battery again with our high-capacity portable charger. Fast charging technology keeps all your devices powered up.",
//       image: "/api/placeholder/300/300"
//     },
//     {
//       id: 4,
//       name: "Smart Speaker",
//       description: "Control your smart home with voice commands using our AI-powered smart speaker. Rich sound quality for music playback.",
//       image: "/api/placeholder/300/300"
//     },
//     {
//       id: 5,
//       name: "Fitness Tracker",
//       description: "Monitor your daily activity, sleep patterns, and workouts with our lightweight fitness tracker. Waterproof design for all conditions.",
//       image: "/api/placeholder/300/300"
//     },
//     {
//       id: 6,
//       name: "Bluetooth Headphones",
//       description: "Experience premium sound quality with our over-ear Bluetooth headphones. Active noise cancellation for immersive listening.",
//       image: "/api/placeholder/300/300"
//     }
//   ];

//   return (
//     <div className="fixed inset-0 bg-white overflow-hidden">
//       {/* Fixed animated background */}
//       <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
//         <MovingBlobBackground />
//       </div>
      
//       {/* Scrollable content container */}
//       <div className="absolute inset-0 z-10 overflow-y-auto">
//         <div className="container mx-auto px-4 py-16 min-h-screen">
//           {/* Animated heading */}
//           <AnimatedSection>
//             <h1 className="text-5xl font-bold text-center mb-16">
//               <span className="text-white bg-blue-600 px-4 py-2 rounded-l-lg">Our</span>
//               <span className="text-blue-600 bg-white px-4 py-2 rounded-r-lg border-2 border-blue-600">Products</span>
//             </h1>
//           </AnimatedSection>

//           {/* Products column */}
//           <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto pb-16">
//             {products.map((product, index) => (
//               <AnimatedSection key={product.id} delay={index * 0.2}>
//                 <AdvancedTiltCard className="w-full bg-blue-600 rounded-xl shadow-xl p-6 text-white">
//                   <div className="flex flex-col items-center">
//                     {/* Circular image frame */}
//                     <div className="w-40 h-40 rounded-full overflow-hidden bg-white mb-4 flex items-center justify-center">
//                       <motion.img 
//                         src={product.image} 
//                         alt={product.name}
//                         className="object-cover"
//                         whileHover={{ scale: 1.1 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     </div>
                    
//                     {/* Product name */}
//                     <h2 className="text-xl font-semibold mb-3">{product.name}</h2>
                    
//                     {/* Product description */}
//                     <p className="text-sm text-center text-blue-100">{product.description}</p>
//                   </div>
//                 </AdvancedTiltCard>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductsSection;






// import { useState } from "react";
// import { motion } from "framer-motion";
// import { 
//   AnimatedSection, 
//   TiltCard, 
//   MovingBlobBackground,
//   AdvancedTiltCard
// } from "./Animatiion.jsx";

// export default function ProductsSection() {
//   const products = [
//     {
//       id: 1,
//       name: "Smart Watch",
//       description: "Track your fitness goals with our cutting-edge smart watch. Features heart rate monitoring, step tracking, and smartphone notifications.",
//       image: "/api/placeholder/300/300"
//     },
//     {
//       id: 1,
//       name: "Smart Watch",
//       description: "Track your fitness goals with our cutting-edge smart watch. Features heart rate monitoring, step tracking, and smartphone notifications.",
//       image: "/api/placeholder/300/300"
//     },
//     {
//       id: 1,
//       name: "Smart Watch",
//       description: "Track your fitness goals with our cutting-edge smart watch. Features heart rate monitoring, step tracking, and smartphone notifications.",
//       image: "/api/placeholder/300/300"
//     },
//     {
//       id: 1,
//       name: "Smart Watch",
//       description: "Track your fitness goals with our cutting-edge smart watch. Features heart rate monitoring, step tracking, and smartphone notifications.",
//       image: "/api/placeholder/300/300"
//     },
//     {
//       id: 1,
//       name: "Smart Watch",
//       description: "Track your fitness goals with our cutting-edge smart watch. Features heart rate monitoring, step tracking, and smartphone notifications.",
//       image: "/api/placeholder/300/300"
//     },
//     {
//       id: 1,
//       name: "Smart Watch",
//       description: "Track your fitness goals with our cutting-edge smart watch. Features heart rate monitoring, step tracking, and smartphone notifications.",
//       image: "/api/placeholder/300/300"
//     },
//     {
//       id: 2,
//       name: "Wireless Earbuds",
//       description: "Immerse yourself in crystal-clear sound with our noise-cancelling wireless earbuds. Perfect for workouts, commuting, or relaxing.",
//       image: "/api/placeholder/300/300"
//     },
//     {
//       id: 3,
//       name: "Portable Charger",
//       description: "Never run out of battery again with our high-capacity portable charger. Fast charging technology keeps all your devices powered up.",
//       image: "/api/placeholder/300/300"
//     },
//     {
//       id: 4,
//       name: "Smart Speaker",
//       description: "Control your smart home with voice commands using our AI-powered smart speaker. Rich sound quality for music playback.",
//       image: "/api/placeholder/300/300"
//     }
//   ];

//   return (
//     <section id="products" className="relative bg-white py-16 min-h-screen">
//       {/* Container with relative positioning to contain the background */}
//       <div className="relative overflow-hidden">
//         {/* Background that's fixed only within this section */}
//         <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
//           <MovingBlobBackground />
//         </div>
        
//         {/* Product content */}
//         <div className="relative z-10 container mx-auto px-4">
//           {/* Animated heading */}
//           <AnimatedSection>
//             <h1 className="text-5xl font-bold text-center mb-16">
//               <span className="text-white bg-blue-600 px-4 py-2 rounded-l-lg">Our</span>
//               <span className="text-blue-600 bg-white px-4 py-2 rounded-r-lg border-2 border-blue-600">Products</span>
//             </h1>
//           </AnimatedSection>

//           {/* Products column */}
//           <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
//             {products.map((product, index) => (
//               <AnimatedSection key={product.id} delay={index * 0.2}>
//                 <AdvancedTiltCard className="w-full bg-blue-600 rounded-xl shadow-xl p-6 text-white">
//                   <div className="flex flex-row items-center gap-6">
//                     {/* Circular image frame - left side */}
//                     <div className="flex-shrink-0">
//                       <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-white flex items-center justify-center">
//                         <motion.img 
//                           src={product.image} 
//                           alt={product.name}
//                           className="object-cover"
//                           whileHover={{ scale: 1.1 }}
//                           transition={{ duration: 0.3 }}
//                         />
//                       </div>
//                     </div>
                    
//                     {/* Text content - right side */}
//                     <div className="flex-grow">
//                       {/* Product name */}
//                       <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                      
//                       {/* Product description */}
//                       <p className="text-sm text-blue-100">{product.description}</p>
//                     </div>
//                   </div>
//                 </AdvancedTiltCard>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }