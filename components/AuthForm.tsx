"use client";

import Image from "next/image";
import { LinearGradient } from "react-text-gradients";
import Link from "next/link";
import { useState, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { authFormSchema } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { getLoggedInUser, signIn, signUp } from "@/lib/actions/user.actions";
import PlaidLink from "./PlaidLink";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch logged-in user on component mount
  useEffect(() => {
    const fetchLoggedInUser = async () => {
      const loggedInUser = await getLoggedInUser();
      setUser(loggedInUser);
    };
    fetchLoggedInUser();
  }, []);

  // 1. Define your form.
  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
 const onSubmit = async (values: z.infer<typeof formSchema>) => {
  setIsLoading(true);
  try {
    if (type === "sign-up") {
      const newUser = await signUp(values);
      setUser(newUser);
    }
    if (type === "sign-in") {
      const response = await signIn({
        email: values.email,
        password: values.password,
      });
      if (response) {
        router.push('/');
      }
    }
  } catch (error) {
    // Handle specific error cases
    console.error("Error during authentication", error)
  } finally {
    setIsLoading(false);
  }
};


  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-2 px-4" aria-label="Home">
          <Image src="/icons/tiltlelogo.svg" width={34} height={34} alt="Logo" />
          <h1 className="text-26 font-bold text-black-1">
            <LinearGradient gradient={["to left", "#900C3F, #343434"]}>
              AAS
            </LinearGradient>
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user ? "Link your account to get started" : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col gap-4"><PlaidLink user={user} variant="primaryt" /></div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-12">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <div className="form-item">
                          <FormLabel className="form-label">First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="ex: John" className="input-class" {...field} />
                          </FormControl>
                          <FormMessage className="form-message mt-2" />
                        </div>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <div className="form-item">
                          <FormLabel className="form-label">Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="ex: Doe" className="input-class" {...field} />
                          </FormControl>
                          <FormMessage className="form-message mt-2" />
                        </div>
                      )}
                    />
                  </div>
                      
                  <FormField
                      control={form.control}
                      name="address1"
                      render={({ field }) => (
                        <div className="form-item">
                          <FormLabel className="form-label">Address</FormLabel>
                          <FormControl>
                            <Input placeholder="ex: 1234 NE st" className="input-class" {...field} />
                          </FormControl>
                          <FormMessage className="form-message mt-2" />
                        </div>
                      )}
                    />
                         
                  <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <div className="form-item">
                          <FormLabel className="form-label">City</FormLabel>
                          <FormControl>
                            <Input placeholder="ex: Wayne" className="input-class" {...field} />
                          </FormControl>
                          <FormMessage className="form-message mt-2" />
                        </div>
                      )}
                    />
                  <div className="flex gap-12">
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <div className="form-item">
                          <FormLabel className="form-label">State</FormLabel>
                          <FormControl>
                            <Input placeholder="ex: NY" className="input-class" {...field} />
                          </FormControl>
                          <FormMessage className="form-message mt-2" />
                        </div>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="postalCode"
                      render={({ field }) => (
                        <div className="form-item">
                          <FormLabel className="form-label">Postal Code</FormLabel>
                          <FormControl>
                            <Input placeholder="ex: 10101" className="input-class" {...field} />
                          </FormControl>
                          <FormMessage className="form-message mt-2" />
                        </div>
                      )}
                    />
                  </div>
                  <div className="flex gap-12">
                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <div className="form-item">
                          <FormLabel className="form-label">Date Of Birth</FormLabel>
                          <FormControl>
                            <Input placeholder="ex: yyyy-mm-dd" className="input-class" {...field} />
                          </FormControl>
                          <FormMessage className="form-message mt-2" />
                        </div>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="ssn"
                      render={({ field }) => (
                        <div className="form-item">
                          <FormLabel className="form-label">SSN</FormLabel>
                          <FormControl>
                            <Input placeholder="ex: 1234" className="input-class" {...field} />
                          </FormControl>
                          <FormMessage className="form-message mt-2" />
                        </div>
                      )}
                    />
                  </div>
                 
                </>
              )}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <div className="form-item">
                    <FormLabel className="form-label">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" className="input-class" {...field} />
                    </FormControl>
                    <FormMessage className="form-message mt-2" />
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <div className="form-item">
                    <FormLabel className="form-label">Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your password" className="input-class" {...field} type="password" />
                    </FormControl>
                    <FormMessage className="form-message mt-2" />
                  </div>
                )}
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp; Loading ...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign in"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in" ? "Don't have an account?" : "Already have an account?"}
            </p>
            <Link href={type === "sign-in" ? "/sign-up" : "/sign-in"} className="form-link">
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
