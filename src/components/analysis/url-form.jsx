"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { IoSearch } from "react-icons/io5";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image"

const FormSchema = z.object({
  url: z.string().min(2, {
    message: "url must be at least 2 characters.",
  }),
})

export function UrlForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      url: "",
    },
  })

  function onSubmit(data) {

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full py-12 space-y-12">
        <Image
          src="/analysis/url.svg"
          alt="Virus"
          width={160}
          height={160}
          className="mx-auto"
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <IoSearch className="absolute w-6 h-6 text-primary top-3 end-3" />
                  <Input id="url" placeholder="Scan URL" type="text" className="h-12 border-primary focus-visible:ring-primary focus-visible:outline-0 placeholder:text-primary" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
