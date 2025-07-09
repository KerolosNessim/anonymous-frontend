"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { set, useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Button } from "../ui/button"
import { postData } from "@/api/post-data"
import { toast } from "sonner"
import { RiLoader3Fill } from "react-icons/ri"
import { getToken } from "@/lib/cookies"
import { useUserStore } from "@/stores/user"
const FormSchema = z.object({
  file: z.custom((val) => val instanceof File && val.size > 0, {
    message: "File is required.",
  }),
  password: z.string().nonempty("Password is required."),
})
export function CompressedFileForm({ setResponse }) {
  const {user}=useUserStore()
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      file: null,
      password: "",
    },
  })
  const { formState: { isSubmitting } } = form;
  async function onSubmit(data) {
    const token = getToken();
    const formData = new FormData();
    formData.append('file', data.file);
    formData.append('password', data.password);
    if (token) {
      formData.append("userId", user?.user?._id);
      const response = await postData('/upload', formData, { Authorization: `Bearer ${token}` });
      if (response.status === 200) {
        setResponse(response.results[0]);
      }
      else {
        setResponse(null);
        toast.error("Something went wrong");
      }
    }
    else {
      formData.append("userId", 0);
      const response = await postData('/upload', formData);
      if (response.status === 200) {
        setResponse(response.results[0]);
      }
      else {
        setResponse(null);
        toast.error("Something went wrong");
      }
    }
   
    
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full py-12 space-y-6">
        <Image
          src="/analysis/file.svg"
          alt="Virus"
          width={160}
          height={160}
          className="mx-auto"
        />
        <div className=" grid grid-cols-12 gap-4">

        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem className={"col-span-12 xl:col-span-6"}>

                <FormControl>
                  <Input onChange={(e) => field.onChange(e.target.files[0])} type="file" className="border-primary text-primary " />
                </FormControl>

              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className={"col-span-12 xl:col-span-6"}>
              <FormControl>
                <Input placeholder="Password" type="password" className=" border-primary focus-visible:ring-primary focus-visible:outline-0 " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <Button type="submit" className={"px-8 w-full md:w-1/2 xl:w-1/4"}>{isSubmitting ? <RiLoader3Fill className="animate-spin" /> : "Upload File"}</Button>
        <p className="text-center text-xs text-white">
          By submitting data above, you are agreeing to our Terms of Service
          and Privacy Notice, and to the sharing of your Sample submission
          with the security community. Please do not submit any personal
          information; we are not responsible for the contents of your
          submission. Learn more.
        </p>
      </form>
    </Form>
  )
}
