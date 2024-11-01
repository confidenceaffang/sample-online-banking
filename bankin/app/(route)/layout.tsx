import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LoggedIn = {firstName: "Confidnece", lastName: "Affang"} 
  return (
   <main className="flex h-screen w-full font-inter">
    <Sidebar 
    user = {LoggedIn}/>
    {children}
   </main>
  );
}
