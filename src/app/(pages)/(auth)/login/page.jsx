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
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Separator } from "@/components/ui/separator"
import { FaGithub, FaGoogle } from "react-icons/fa";
import Link from "next/link"

const formSchema = z.object({

  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
    { message: "Password must be at least 6 characters and include uppercase, lowercase, number, and special character." }
  )
})

const inputs = [

  {
    name: "email",
    type: "email",
    placeholder: "Enter Your Email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter Your Password",
  }
]


const LoginPage = () => {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values) {
  }
  return (
    <section style={{ backgroundImage: "url(/home/services/services-bg.svg)" }} className='w-full py-10 flex items-center justify-center bg-cover '>
      <div className="container">
      <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="xl:w-1/2 xl:mx-auto space-y-6  bg-[#152E3A] border border-primary rounded-xl xl:p-12 p-6">
          <div className="space-y-4">
            <h3 className="xl:text-4xl text-2xl font-bold text-primary">Login Now !</h3>
            <p className=" text-gray-400">Join us today and start your journey.
            Create your account in just a few steps.</p>
          </div>
          {/* inputs */}
          {inputs.map((input, idx) => (
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




          <Button type="submit" className="px-16 h-12 font-[family-name:var(--font-fira)] font-semibold w-full">Login</Button>

              <p className="text-center text-sm font-[family-name:var(--font-fira)]">Don't have an account <Link href="/sign-up" className="text-primary font-semibold">Sign Up</Link></p>
        
          </form>
      </Form>
     </div>
    </section>
  )
}

export default LoginPage
