import Link from "next/link";

export default function DasboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
        {/* {children} */}
        {/* LEFT */}
        <div className="w-1/6 md:w-[8%]  lg:w-[18%] xl:w-[14%] bg-red-50">
          <Link href="/">cu</Link>
        </div>
        {/* RIGHT */}
        <div className="w-[89%] md:w-[92%] lg:w-[18%] xl:w-[92%] bg-blue-50">Right</div>
    </div>
  );
}
