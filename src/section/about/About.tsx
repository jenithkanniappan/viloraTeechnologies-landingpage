"use client";
import Image from "next/image";
import bgImg from "../../../public/assets/services/page-Head.webp";
import { ArrowLeft, ArrowRight } from "lucide-react";
import core from "../../../public/assets/about/core.png";
import PersonalApproach from "../../../public/assets/about/perapp.png";
import customer from "../../../public/assets/about/customer.png";
import team from "../../../public/assets/about/team.png";
import evolute from "../../../public/assets/about/evolute.webp";
import client from "../../../public/assets/about/h2-test-1.webp";
import double from "../../../public/assets/about/DoubleQurtes.png";
import divide from "../../../public/assets/about/divider.webp";
const About = () => {
  const setApart = [
    {
      title: "Core Values",
      detail:
        "We engage every project with focus and purpose. We're not all right with just okay; we know the better work comes from pushing the 'nice enough' wall constantly. And any time we're working on that, we do it. And of the members of our team is attentive and committed to what can be done.",
      Icon: core,
    },
    {
      title: "Personal Approach",
      detail:
        "Each project is distinctive, because we take time to consider the 'why' behind each project we take on. We brainstorm, and we come up with a solution together that is practical and addresses the issue at hand. We're designing, weighing, prototyping, evaluating and evaluating again.",
      Icon: PersonalApproach,
    },
    {
      title: "Self Organized Teams",
      detail:
        "We're not doing pile-on. Our capacity to self-organize and react to any situation lies in our key to success. We like working in small teams that know the topic at hand and own it. No extra layer, no hoops, clear data flow, tight feedback loops-all we need to execute quickly.",
      Icon: team,
    },
    {
      title: "Strong Relationships with Customers",
      detail:
        "We've met many great thinkers since our creation 5 years ago, talented people who collaborated with us. With a storey, a vision they want their product to represent, they came to us. For us, consumers are not only entities whom we support; they are the vital team members of Classic Informatics.",
      Icon: customer,
    },
  ];
  const About = {
    title: "About our company",
    subTitle: "Vilora Technologies",
    details:
      "We are a team of developers and agile professionals collaborating for one mission in order to address real-life challenges using technology.",
    discripition:
      "VILORA Technologies is a Pondicherry-based software company led by experienced IT professionals, offering services in software development, mobile app development, web application development, quality assurance, and implementation. With strong expertise in single and multi-operating system environments, VILORA refines and streamlines ideas before designing and building innovative solutions. The company combines technical excellence with deep functional knowledge to deliver effective business solutions, maintaining close client relationships to understand objectives and maximize results.",
  };
  const evolution = {
    title: "Our evolution",
    details:
      "'Founded in 2002 by Burdee Ncolase en. our firm started with our great vision to bring innovative solutions of businesses facing unprecedented challenges. That began as a small consultings firm quickly evolved into a trusted partner for companies around the globe . Our journey into began with a simple idea thats offer unparalleled consulting services empower Our core values of integrity, innovation, and excellence guide everything we do leading the wave in consulting's.'",
  };
  const calculation = [
    { text: "Complete project", number: "93%" },
    { text: "Reach worldwide", number: "20M" },
    { text: "Faster growth", number: "8.5x" },
  ];
  const feedback = [
    {
      double: double,
      clientName: "Burdee Nicolas",
      role: "Business Owner",
      img: client,
      feedback:
        "Partnering with solvior has been a transformative experience for our organization. Their expert guidance through our market expansion strategy was invaluable. They helped us navigate complex regulatory environments and develop a clear, actionable plan that has led to successful",
      rating: "★★★★★",
    },
    // {
    //     double: double,
    //     clientName: "Natalie Harry",
    //     role: "Sr.Executive",
    //     img: client,
    //     feedback: "Partnering with solvior has been a transformative experience for our organization. Their expert guidance through our market expansion strategy was invaluable. They helped us navigate complex regulatory environments and develop a clear, actionable plan that has led to successfu",
    //     rating: "★★★★★"
    // }
  ];
  return (
    <>
      <div className="">
        <div className="relative w-full h-[480px] overflow-hidden">
          <Image
            src={bgImg}
            fill
            alt=""
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-blue-950/85" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-5 text-white">
            <h1 className="text-5xl font-bold">About</h1>
            <div className="px-5 py-2 rounded-full bg-gray-600/50 backdrop-blur-2xl">
              <p className="font-semibold text-md">Home / About</p>
            </div>
          </div>
        </div>
        <section className="relative w-full ">
          {/* <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#0075FF] via-[#0075FF]/30 to-transparent rounded-full fade-up delay-1"></div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-around  pl-8 py-12">
            <div className="flex flex-col justify-center gap-5">
              <span className="fade-up delay-1 inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-[#0075FF] w-fit">
                <span className="w-6 h-px bg-[#0075FF] inline-block"></span>
                Who We Are
              </span>

              <h1 className="fade-up delay-2 display text-5xl md:text-6xl font-extrabold text-[#0b1628] leading-tight">
                Crafting the
                <br />
                <span className="italic text-[#0075FF]">Future</span> Together
              </h1>

              <div className="fade-up delay-3 w-12 h-1 bg-[#0075FF] rounded-full"></div>

              <p className="fade-up delay-4 text-base text-[#364052] leading-relaxed max-w-md">
                We're a team of passionate builders who believe great design and
                technology can change how people experience the world. Every
                project is a story waiting to be told.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-8">
              <p className="fade-up delay-3 text-base text-[#364052] leading-relaxed border-l-2 border-[#0075FF]/20 pl-5">
                From strategy to execution, we partner with ambitious companies
                to bring bold ideas to life. Our process is collaborative,
                transparent, and always focused on delivering meaningful results
                that last.
              </p>

              <div className="fade-up delay-4 grid grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8e4dc] text-center">
                  <span className="block text-2xl font-bold text-[#0b1628]">
                    12+
                  </span>
                  <span className="text-xs text-[#364052] uppercase tracking-wide">
                    Years
                  </span>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8e4dc] text-center">
                  <span className="block text-2xl font-bold text-[#0b1628]">
                    340
                  </span>
                  <span className="text-xs text-[#364052] uppercase tracking-wide">
                    Projects
                  </span>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8e4dc] text-center">
                  <span className="block text-2xl font-bold text-[#0b1628]">
                    98%
                  </span>
                  <span className="text-xs text-[#364052] uppercase tracking-wide">
                    Happy
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 ml-8 h-px bg-gradient-to-r from-[#0075FF]/40 via-[#0b1628]/10 to-transparent fade-up delay-5"></div>
        </section>
        <div className="grid md:grid-cols-4 m-5 gap-5">
          {setApart.map(({ title, detail, Icon }) => (
            <div
              className="w-fit border p-5 gap-4 bg-white border-gray-300 flex flex-col items-start"
              key={title}
            >
              <Image src={Icon} alt="" />
              <h1 className="text-[#0b1628] font-bold text-xl">{title}</h1>
              <p className="text-[#364052] text-sm">{detail}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 m-20 md:grid-cols-2 gap-5">
          <div className="bg-[#dfecfd] p-2">
            <div className="grid grid-cols-1 gap-9">
              <h1 className="bg-[#0075FF] font-bold p-3 w-fit text-2xl rounded-4xl">
                &#x2a;{evolution.title}
              </h1>
              <p className="text-[#364052]">{evolution.details}</p>
              <div className="md:flex justify-around">
                {calculation.map((item) => (
                  <div className="" key={item.number}>
                    <h1 className="text-6xl font-bold text-[#0b1628]">
                      {item.number}
                    </h1>
                    <p className="text-[#364052]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white">
            <Image src={evolute} alt="" />
          </div>
        </div>
        <div className="m-20 grid  gap-10">
          <div className="text-center grid gap-5">
            <h1 className="text-[#0075ff] text-xl">Clients feedback</h1>
            <p className="text-[#0b1628] text-5xl font-extrabold">
              Our clients testimonials
            </p>
          </div>
          <div className="md:flex gap-10">
            <Image src={client} alt="" />
            <div className="fex">
              {feedback.map(
                ({ clientName, img, double, rating, role, feedback }) => (
                  <div className="" key={clientName}>
                    <Image className="-ml-5 mb-10" src={double} alt="" />
                    <p className="text-gray-700 text-2xl">{feedback}</p>
                    <div className="mt-10 relative">
                      <div className=" absolute top-5 right-0">
                        <button className="m-2 cursor-pointer hover:bg-[#0075ff] hover:text-white duration-1000 border p-3 rounded-full border-gray-400 text-[#0b1628]">
                          <ArrowLeft />
                        </button>
                        <button className="m-2 border cursor-pointer hover:bg-[#0075ff] hover:text-white duration-1000 p-3 rounded-full border-gray-400 text-[#0b1628]">
                          <ArrowRight />
                        </button>
                      </div>
                      <Image src={divide} alt="divide" />
                    </div>
                    <div className="flex gap-4 -mt-15 mx-5">
                      <Image
                        className="-ml-5 w-20 h-20 rounded-full"
                        src={img}
                        alt=""
                      />
                      <div>
                        <span className="text-[#0075ff] bg-gray-700/20 rounded-2xl p-1">
                          {rating}
                        </span>
                        <h1 className="text-[#0b1628] text-2xl font-bold">
                          {clientName}
                        </h1>
                        <p className="text-gray-400 text-lg">{role}</p>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="bg-[#0075ff] md:flex items-center justify-around p-5 text-center">
          <div className="">
            <h1 className="text-7xl">Let’s Grow Together!</h1>
            <p className="text-2xl">
              We’ll be a great team! Have a look at our latest openings.
            </p>
          </div>
          <div className="bg-white h-fit text-[#0b1628] flex p-1 items-center w-fit rounded-3xl">
            <div className="bg-[#0075FF] p-2 rounded-full">
              <ArrowRight />
            </div>
            Join Our Tean
          </div>
        </div>
      </div>
    </>
  );
};
export default About;