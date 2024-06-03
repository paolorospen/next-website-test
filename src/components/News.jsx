import getNews from "../utils";

export default function News({ news }) {
  console.log(news);

  return (
    <div className="px-10 py-24 bg-white">
      <h2 className="font-bold text-4xl mb-8">News</h2>
      <ul className="flex flex-col gap-10 max-w-4xl">
        {news.map((item, index) => (
          <li key={index}>
            <a href="/">
              <h3 className="font-medium text-2xl mb-4">
                {item.fields.newsTitle}
              </h3>
              <p>{item.fields.newsDate}</p>
              <p className=" text-sm font-normal">{item.fields.newsText}</p>
              <img
                src={item.fields.newsImg.fields.file.url}
                className="w-1/2 h-auto mt-5"
                // width={400}
                // height={200}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
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
