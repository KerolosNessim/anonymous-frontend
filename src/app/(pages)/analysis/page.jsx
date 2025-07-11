"use client"
import AiResponse from "@/components/analysis/ai-response"
import { CompressedFileForm } from "@/components/analysis/compressed-file-form"
import { FileForm } from "@/components/analysis/file-form"
import StaticResponse from "@/components/analysis/static-response"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

const AnalysisPage = () => {
  const [response, setResponse] = useState(null);
  const handleReanalysis = () => {
    setResponse(null)
  }

  return (
    <>
      {response ?
        <section className='container space-y-2 mt-12'>
          {response?.dbReport && <AiResponse response={response?.dbReport} name={response?.filename} />}
          <StaticResponse response={response?.analysis} plots={response?.plots} />
          <div className="flex justify-center mt-6">
            <Button onClick={handleReanalysis} className="px-6">
              Reanalysis
            </Button>
          </div>
        </section>
        :
        <section className='container  mt-12'>
          {/* content */}
          <Tabs defaultValue="file" className="w-full font-[family-name:var(--font-fira)] ">
            <TabsList className="w-full  bg-[#152E3A] border border-primary">
              <TabsTrigger className={"xl:text-xl cursor-pointer"} value="file">File</TabsTrigger>
              <TabsTrigger className={"xl:text-xl cursor-pointer"} value="url">Compressed file</TabsTrigger>
            </TabsList>
            <TabsContent className="bg-[#152E3A] border border-primary rounded-md p-6" value="file"><FileForm setResponse={setResponse} /></TabsContent>
            <TabsContent className="bg-[#152E3A] border border-primary rounded-md p-6" value="url"><CompressedFileForm setResponse={setResponse} /></TabsContent>
          </Tabs>
        </section>}
    </>
  )
}

export default AnalysisPage
