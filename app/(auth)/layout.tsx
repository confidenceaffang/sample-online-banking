import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <main className="flex min-h-screen justify-between w-full">
      {children}
      <div className="auth-asset">
        <div>
          <Image src="/icons/bank.png" alt="auth=image" width={800} height={800} className="border-t-8 border-b-8 border-l-8 border-gray-900 rounded-lg"/>
        </div>
      </div>
     </main>
    );
  }
  