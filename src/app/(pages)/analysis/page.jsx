"use client"
import AiResponse from "@/components/analysis/ai-response"
import { CompressedFileForm } from "@/components/analysis/compressed-file-form"
import { FileForm } from "@/components/analysis/file-form"
import StaticResponse from "@/components/analysis/static-response"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

const AnalysisPage = () => {
  const [response, setResponse] = useState(null);
  return (
    <>
      {response ?
        <section className='container space-y-6 mt-16'>
          {response?.dbReport && <AiResponse response={response?.dbReport} name={response?.filename} />}
          <StaticResponse response={response?.analysis} plots={response?.plots} />
        </section>
        :
        <section className='container space-y-6 mt-16'>
          {/* content */}
          <Tabs defaultValue="file" className="w-full font-[family-name:var(--font-fira)]">
            <TabsList className="w-full  bg-[#152E3A] ">
              <TabsTrigger className={"xl:text-xl"} value="file">File</TabsTrigger>
              <TabsTrigger className={"xl:text-xl"} value="url">Compressed file</TabsTrigger>
            </TabsList>
            <TabsContent value="file"><FileForm setResponse={setResponse} /></TabsContent>
            <TabsContent value="url"><CompressedFileForm setResponse={setResponse} /></TabsContent>
          </Tabs>
        </section>}
    </>
  )
}

export default AnalysisPage
