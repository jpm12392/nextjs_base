import Image from "next/image";
import MainSection from "@/components/Home/MainSection";

export const metadata = {
  title: "Demo Title",
  keywords: 'Demo1, Demo',
  description: "This is the demo desc",
};


export default function Home() {
  return (
    <>
      <MainSection />
    </>
  );
}
