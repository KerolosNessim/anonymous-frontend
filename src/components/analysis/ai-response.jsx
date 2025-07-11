import React from 'react'
import ProgressCircle from './progress-circle'

const AiResponse = ({ response, name }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "UTC",
    };
    return date.toLocaleString("en-US", options).replace(",", " -");
  };

  return (
    <div className=' grid grid-cols-12 gap-4 font-[family-name:var(--font-fira)] items-center bg-[#152E3A]  overflow-hidden rounded-xl border border-primary'>
      <div className=" p-6 xl:col-span-2 col-span-12 aspect-square space-y-3 ">
        <ProgressCircle percentage={(response?.probability_file * 100).toFixed(2)} strokeWidth={10} color={response?.predictions_file == "Benign" ? "#22c55e" : " #fb2c36"} />
      </div>
      <div className="xl:col-span-10 col-span-12">
        <ul className="p-6 space-y-3 break-words">
          <li className={`text-xl font-bold ${response?.predictions_file =="Benign"? "text-green-500" : "text-red-500"} `}>{response?.predictions_file}</li>
          <li className='break-all'><span className={`font-bold text-primary  text-lg `}>File Id :</span> {response?.fileId}</li>
          <li className='break-all'><span className="font-bold text-primary text-lg">Analysis Time :</span> {formatDate(response?.analysisDate)}</li>
          <li className='break-all'><span className="font-bold text-primary text-lg">Family :&nbsp;
          </span>{response?.predictions_family.length == 0 ? <span className='text-yellow-400'>No Family Found</span> : response?.predictions_family[0] == "Unknown" ? <span className='bg-primary  px-3 py-1,5 rounded-md my-1'>Unknown</span> : response?.predictions_family?.map((family, idx) => <span key={idx} className='bg-primary  px-3 py-1,5 rounded-md'>{family}</span>)}  </li>
          {response?.predictions_family[0] === "Unknown" && <li className='break-all'><span className=" text-yellow-400">Note: possibly fork of {response?.predictions_family[1]}, Highly matches {response?.predictions_family[2]}, {response?.predictions_family[3]} family name</span></li>}
        
        </ul>
      </div>
    </div>
  )
}

export default AiResponse
