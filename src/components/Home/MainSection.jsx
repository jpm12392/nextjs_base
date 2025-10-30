import Image from 'next/image'
import Link from 'next/link'
export default function MainSection() {
  return (
    <section className="w-full py-12 px-6 bg-gray-50">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
        
            <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-4">What is Lorem Ipsum?</h2>
            <p className="text-gray-600 mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            </div>

        
        </div>
    </section>
  );
}
