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
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  phone: z.string().nonempty({
    message: "phone number is required",
  }),
  company: z.string().min(2, {
    message: "company must be at least 2 characters.",
  }),
  jobTitle: z.string().min(2, {
    message: "job title must be at least 2 characters.",
  }),
  yearsOfExperience: z.string().min(1, {
    message: "years of experience must be at least 1 characters.",
  }),
  password: z.string().regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
    { message: "Password must be at least 6 characters and include uppercase, lowercase, number, and special character." }
  )
})

const inputs = [
  {
    name: "name",
    type: "text",
    placeholder: "Enter Your Name",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Enter Your Email",
  },
]

const inputs2 = [
  {
    name: "company",
    type: "text",
    placeholder: "Enter Your Company",
  },
  {
    name: "jobTitle",
    type: "text",
    placeholder: "Enter Your Job Title",
  },
  {
    name: "yearsOfExperience",
    type: "number",
    placeholder: "Enter Your Years Of Experience",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter Your Password",
  }
]
const SignUpPage = () => {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      jobTitle: "",
      yearsOfExperience: "",
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
            <h3 className="xl:text-4xl text-2xl font-bold text-primary">Sign Up Now !</h3>
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
            {/* phone */}
            <FormField
              control={form.control}
              name={"phone"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PhoneInput
                      placeholder="Enter phone number"
                      value={field.value}
                      onChange={field.onChange}
                      defaultCountry="EG"
                      className="custom-phone-input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          {/* inputs */}
          {inputs2.map((input, idx) => (
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


          <Button type="submit" className="px-16 h-12 font-[family-name:var(--font-fira)] font-semibold w-full">Sign Up</Button>
            <div className=" flex items-center justify-center gap-2 text-primary ">
              <Separator />
              <p className=" font-bold font-[family-name:var(--font-fira)]">or</p>
              <Separator />
            </div>
            <a href="" className="flex items-center justify-center gap-2 rounded-md hover:bg-primary/90 transition-all duration-300 bg-primary  py-3 font-[family-name:var(--font-fira)]  font-semibold w-full"><FaGithub size={20}/>  Sign Up With Github</a>
            <a href="" className="flex items-center justify-center gap-2 rounded-md hover:bg-primary/90 transition-all duration-300 bg-primary  py-3 font-[family-name:var(--font-fira)]  font-semibold w-full"><FaGoogle size={20} />  Sign Up With Google</a>
            
              <p className="text-center text-sm font-[family-name:var(--font-fira)]">Already have an account? <Link href="/login" className="text-primary font-semibold">Login</Link></p>
        
          </form>
      </Form>
     </div>
    </section>
  )
}

export default SignUpPage
