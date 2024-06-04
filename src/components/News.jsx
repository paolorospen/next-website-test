// import getNews from "../utils";

// export default function News({ news }) {
//   console.log(news);

//   return (
//     <div className="px-10 py-24 bg-white">
//       <h2 className="font-bold text-4xl mb-8">News</h2>
//       <ul className="flex flex-col gap-10 max-w-4xl">
//         {news.map((item, index) => (
//           <li key={index}>
//             <a href="/">
//               <h3 className="font-medium text-2xl mb-4">
//                 {item.fields.newsTitle}
//               </h3>
//               <p>{item.fields.newsDate}</p>
//               <p className=" text-sm font-normal">{item.fields.newsText}</p>
//               <img
//                 src={item.fields.newsImg.fields.file.url}
//                 className="w-1/2 h-auto mt-5"
//                 // width={400}
//                 // height={200}
//               />
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // export default function News({ news }) {
// //   console.log(news);
// //   return (
// //     <div className="px-10 py-24">
// //       <h2 className="font-bold text-4xl mb-8">News</h2>
// //       <ul className="flex flex-col gap-10 max-w-4xl">
// //         {/* {news.map((item) => ( */}
// //         <li>
// //           <a href="/">
// //             <h3 className="font-medium text-2xl mb-4">
// //               {/* {item.fields.newsTitle} */}
// //             </h3>
// //             {/* <p>{item.fields.newsDate}</p> */}
// //             {/* <p className=" text-sm font-normal">{item.fields.newsText}</p> */}
// //           </a>
// //         </li>
// //         // {/* <Image src={props.image} width={400} height={200} /> */}
// //         {/* ))} */}
// //       </ul>
// //     </div>
// //   );
// // }

// import getNews from "../utils/contentful";

export default function News({ news }) {
  console.log(news);

  return (
    // <div className="px-10 py-24 bg-white">
    //   <h2 className="font-bold text-4xl mb-8">News</h2>
    //   <ul className="flex flex-col gap-10 max-w-4xl">
    //     {news.map((item, index) => (
    //       <li key={index}>
    //         <a href="/">
    //           <h3 className="font-medium text-2xl mb-4">
    //             {item.fields.newsTitle}
    //           </h3>
    //           <p>{item.fields.newsDate}</p>
    //           <p className=" text-sm font-normal">{item.fields.newsText}</p>
    //           <img
    //             src={item.fields.newsImg.fields.file.url}
    //             className="w-1/2 h-auto mt-5"
    //             // width={400}
    //             // height={200}
    //           />
    //         </a>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <section className="py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
            Latest blog posts
          </h1>
          {/* <p className="text-gray-600">
            Blogs that are loved by the community. Updated every hour.
          </p> */}
          {/* <form onSubmit={(e) => e.preventDefault()} className="items-center justify-center gap-3 sm:flex">
                          <div className="relative">
                              <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                              </svg>
                              <input
                                  type="text"
                                  placeholder="Enter your email"
                                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg sm:max-w-xs"
                              />
                          </div>
                          <button className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow sm:mt-0 sm:w-auto">
                              Subscribe
                          </button>
                      </form> */}
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, key) => (
            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
              <a href={item.href}>
                <img
                  src={item.fields.newsImg.fields.file.url}
                  loading="lazy"
                  alt={item.fields.newsTitle}
                  className="w-full rounded-lg"
                />
                <div className="mt-3 space-y-2">
                  <span className="block text-indigo-600 text-sm">
                    {item.date}
                  </span>
                  <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                    {item.fields.newsTitle}
                  </h3>
                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                    {" "}
                    {item.fields.newsText}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// export default function News({ news }) {
//   console.log(news);
//   return (
//     <div className="px-10 py-24">
//       <h2 className="font-bold text-4xl mb-8">News</h2>
//       <ul className="flex flex-col gap-10 max-w-4xl">
//         {/* {news.map((item) => ( */}
//         <li>
//           <a href="/">
//             <h3 className="font-medium text-2xl mb-4">
//               {/* {item.fields.newsTitle} */}
//             </h3>
//             {/* <p>{item.fields.newsDate}</p> */}
//             {/* <p className=" text-sm font-normal">{item.fields.newsText}</p> */}
//           </a>
//         </li>
//         // {/* <Image src={props.image} width={400} height={200} /> */}
//         {/* ))} */}
//       </ul>
//     </div>
//   );
// }
