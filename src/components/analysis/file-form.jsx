"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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

const FormSchema = z.object({
  file: z.string().min(2, {
    message: "file must be at least 2 characters.",
  }),
})

export function FileForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      file: "",
    },
  })

  function onSubmit(data) {

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full py-12 space-y-12">
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
            <FormItem>
              <FormLabel htmlFor="file" className="block w-fit mx-auto cursor-pointer px-10 py-4 border-[3px] rounded-md border-primary hover:bg-primary transition-all duration-300 ">Choose File</FormLabel>
              <FormControl>
                <Input id="file" placeholder="shadcn" type="file" className="hidden" {...field} />
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
