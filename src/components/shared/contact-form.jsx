"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z
    .string()
    .email({
      message: "Invalid email address",
    }),
  subject: z.string().min(2, {
    message: "subject must be at least 2 characters.",
  }),
  message: z.string().min(2, {
    message: "message must be at least 2 characters.",
  }).max(500, {
    message: "message must be less than 500 characters.",
  })
})

const inputs = [
  {
    name: "name",
    type: "text",
    placeholder: "Your Name",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Your Email",
  },
  {
    name: "subject",
    type: "text",
    placeholder: "Your Subject",
  },
]
const ContactForm = () => {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values) {

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 col-span-12 md:col-span-6 bg-[#152E3A] border border-primary rounded-xl xl:p-12 p-6">
        <div className="space-y-4">

        <h3 className="xl:text-4xl text-2xl font-bold text-primary">You Have Question?</h3>
        <p className=" text-gray-500">Maecenas eros dui, tempus sit amet quam ac, ultrices vehicula elit.</p>
        </div>
        {/* name */}
        {inputs.map((input ,idx) => (
          <FormField 
          key={idx}
          control={form.control}
          name={input.name}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder={input.placeholder} type={input.type} className="h-12 border-primary focus-visible:ring-primary focus-visible:outline-0 " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        ))}
        {/* message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Your Message"
                  className="resize-none h-24 border-primary focus-visible:ring-primary focus-visible:outline-0 "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="px-16 h-12 font-[family-name:var(--font-fira)] font-semibold">send messages</Button>
      </form>
    </Form>
  )
}

export default ContactForm
