import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

const StaticResponse = ({ response, plots }) => {
  const identification = response?.file_identification;
  const strings = response?.string_analysis;
  const entropy = response?.overall_file_entropy;
  return (
    <Tabs defaultValue="identification" className="w-full font-[family-name:var(--font-fira)]">
      <TabsList className="w-full  bg-[#152E3A] ">
        <TabsTrigger value="identification">identification</TabsTrigger>
        <TabsTrigger value="string">string</TabsTrigger>
        <TabsTrigger value="entropy">entropy</TabsTrigger>
        <TabsTrigger value="plots">plots</TabsTrigger>
      </TabsList>
      <TabsContent value="identification" className={"bg-[#152E3A] rounded-md p-6"}>
        <ul className=" space-y-3 ">
          <li ><span className={`font-bold text-primary   `}>File Name :</span> {identification?.file_name}</li>
          <li ><span className="font-bold text-primary ">File Size:</span> {identification?.file_size}</li>
          <li ><span className="font-bold text-primary ">File Type :</span> {identification?.file_type_magic}  </li>
          <li className="flex items-start gap-2"><span className="font-bold text-primary ">File Hashes :</span>
          </li>
          {identification?.hashes && Object.entries(identification.hashes).map(([key, value]) => (
            <li key={key}>{key}: {value}</li>
          ))}

          <li ><span className="font-bold text-primary  ">Architecture :</span> {identification?.architecture}  </li>

        </ul>
      </TabsContent>
      <TabsContent value="string" className={"bg-[#152E3A] rounded-md p-6"}>
        <ul className=" space-y-3 ">
          <li ><span className={`font-bold text-primary  text-2xl `}>Highlighted :</span> <div className=" flex flex-wrap gap-1"> {strings.highlighted.length == 0 ?<p className="text-xl text-yellow-400"> No Strings Found</p> : strings?.highlighted.map((str, idx) => <span key={idx} className="bg-background px-3 py-1.5 text-sm  rounded-md m-1">{str}</span>)}</div> </li>
          <li ><span className={`font-bold text-primary  text-2xl `}>Unicode :</span> <div className=" flex flex-wrap gap-1"> {strings.unicode.length == 0 ?<p className="text-xl text-yellow-400"> No Strings Found</p> : strings?.unicode.map((str, idx) => <span key={idx} className="bg-background px-3 py-1.5 text-sm  rounded-md m-1">{str}</span>)}</div> </li>
          <li ><span className={`font-bold text-primary  text-2xl `}>Ascii :</span> <div className=" flex flex-wrap gap-1"> {strings.ascii.length == 0 ?<p className="text-xl text-yellow-400"> No Strings Found</p> : strings?.ascii.map((str, idx) => <span key={idx} className="bg-background px-3 py-1.5 text-sm  rounded-md m-1">{str}</span>)}</div> </li>
        </ul>
      </TabsContent>
      <TabsContent value="entropy" className={"bg-[#152E3A] rounded-md p-6"}>
        <ul className=" space-y-3 ">
          <li ><span className={`font-bold text-primary   `}>Value:</span> {entropy?.value}</li>
          <li ><span className="font-bold text-primary ">Remark:</span> {entropy?.remark}</li>
        </ul>
      </TabsContent>
      <TabsContent value="plots" className={"bg-[#152E3A] rounded-md p-6"}>
        <ul className=" space-y-3 ">
          {plots?.map((plot, idx) => (
            <li key={idx} className="relative h-96">
              <Image src={plot} alt="plot" fill className="rounded-md" />
            </li>
          ))}
        </ul>
      </TabsContent>
    </Tabs>
  )
}

export default StaticResponse
