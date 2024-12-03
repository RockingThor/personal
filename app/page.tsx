import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <nav className="w-full flex flex-col sm:flex-row justify-between bg-black text-white sticky">
        <div className="flex p-4">
          <div className="font-bold text-2xl sm:text-4xl">R.</div>
        </div>
        <div className="flex flex-col sm:flex-row p-4 gap-4 sm:gap-10 my-auto sm:mr-10">
          <a href="https://me.rohitnandi.com" target="_blank">
            <div className="font-bold cursor-pointer">About</div>
          </a>
          <div className="font-bold cursor-pointer">Projects</div>
        </div>
      </nav>
      <div className="flex flex-col sm:flex-row items-center ml-4 sm:ml-10 mt-4 sm:mt-0">
        <div className="text-5xl sm:text-8xl">Hi,</div>
        <Image
          src="https://assets.zyrosite.com/A85D79Zw2bcZMGKK/animation_640_lfz3plng-A3QBGjQE4EUy2rNG.gif"
          alt="Vercel Logo"
          width={200}
          height={200}
          className="sm:w-[400px] sm:h-[400px]"
        />
      </div>
      <div className="m-4 sm:m-0 sm:ml-10 sm:mt-[-8rem]">
        <div className="text-lg sm:text-xl">I'm Rohit Nandi,</div>
        <div className="text-lg sm:text-xl">
          Frontend Developer | Backend Developer(Node.js) | Senior Software
          Engineer
        </div>
      </div>
      <div className="ml-4 sm:ml-10 text-base sm:text-2xl font-bold text-gray-700 max-w-full sm:max-w-[60rem] mt-4 sm:mt-10">
        Frontend-focused Full Stack Engineer specializing in high-performance
        React applications, scalable Node.js services, and real-time
        collaboration systems. Experienced in technical architecture design and
        remote team collaboration.
      </div>
    </main>
  );
}
