// import React from 'react';
// import { GoogleGenerativeAI } from "@google/generative-ai";
// const apikey = import.meta.env.VITE_GEMINI_KEY;

// function Search({ text, onTextChange, setAnswer, setLoader }) {
//   const searchfunc = async () => {
//     const genAI = new GoogleGenerativeAI({ apiKey: apikey });
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//     const inputbyUser = text;
//     console.log(inputbyUser);

//     try {
//       setLoader(true);
//       const prompt = `You are a mental health assistant. The user will explain problems he/she is facing in life and you need to give advice based on the problem faced by the user. 
//       Always provide descriptive answers in paragraphs but strictly not in points.
//       User's input:
//       ${inputbyUser}
//       `;

//       const result = await model.generateContent({ prompt: prompt });
//       const text = result.generations[0].text;
//       console.log('Gemini Response:', text);
//       setLoader(false);
//       setAnswer(text);
//     } catch (error) {
//       console.error('Error:', error);
//       setLoader(false);
//     }
//   };

//   return (
//     <div className="w-2/3">
//       <form>
//         <label
//           htmlFor="default-search"
//           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//         >
//           Search
//         </label>
//         <div className="relative">
//           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//             <svg
//               className="w-4 h-4 text-gray-500 dark:text-gray-400"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//               />
//             </svg>
//           </div>
//           <input
//             type="search"
//             id="default-search"
//             value={text}
//             onChange={(e) => onTextChange && onTextChange(e.target.value)}
//             className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="What problems are you facing in life?"
//             required
//           />
//           <button
//             type="submit"
//             className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             onClick={(e) => {
//               e.preventDefault();
//               searchfunc();
//             }}
//           >
//             Ask!
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Search;
