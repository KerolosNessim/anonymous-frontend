"use client"

import { postData } from "@/api/post-data"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { getToken } from "@/lib/cookies"
import { useUserStore } from "@/stores/user"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { RiLoader3Fill } from "react-icons/ri"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "../ui/button"
import { getData } from "@/api/get-data"
const allowedExtensions = ['exe', 'dll', 'bat', 'msi'];
const FormSchema = z.object({
  file: z.custom((val) => {
    if (!(val instanceof File)) return false;

    const fileName = val.name.toLowerCase();
    const fileExt = fileName.split('.').pop();

    return val.size > 0 && allowedExtensions.includes(fileExt);
  }, {
    message: `Only the following file types are supported: ${allowedExtensions.join(', ')}`,
  }),
});

export function FileForm({ setResponse }) {
  const { user,setUser } = useUserStore()
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      file: null,
    },
  })
  const { formState: { isSubmitting } } = form;
  async function onSubmit(data) {
    if (data.file.size > 1024 * 1024) {
      toast.warning("Files larger than 1MB may result in reduce accuracy in family classification");
    }
    const token = getToken();
    const formData = new FormData();
    formData.append('file', data.file);
    if (token) {
      formData.append("userId", user?.user?._id);
      const response = await postData('/upload', formData, { Authorization: `Bearer ${token}` });
      if (response.status === 200) {
        setResponse(response.results[0]);
        const userresponse = await getData("/profile", { Authorization: `Bearer ${token}` });
        if (userresponse.status === 200) {
          const { status, ...userData } = userresponse;
          setUser(userData);
        }
        else {
          setUser(null);
        }
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
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem >
              <div className={"flex items-center gap-2 "}>

                <FormControl>
                  <Input onChange={(e) => field.onChange(e.target.files[0])} type="file" className="border-primary text-primary " />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className={"px-8 w-full md:w-1/2 xl:w-1/4"}>{isSubmitting ? <RiLoader3Fill className="animate-spin" /> : "Upload File"}</Button>
        <p className="text-center text-xs text-gray-400">
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
