import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileForm } from "./file-form"
import { UrlForm } from "./url-form"

const AnalysisTabs = () => {
  return (
    <Tabs defaultValue="file" className="w-full font-[family-name:var(--font-fira)]">
      <TabsList className="w-full  bg-[#152E3A] ">
        <TabsTrigger value="file">File</TabsTrigger>
        <TabsTrigger value="url">Url</TabsTrigger>
      </TabsList>
      <TabsContent value="file"><FileForm/></TabsContent>
      <TabsContent value="url"><UrlForm/></TabsContent>
    </Tabs>
  )
}

export default AnalysisTabs
