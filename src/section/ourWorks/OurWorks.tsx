import Image from "next/image"
import bgImg from "../../../public/assets/services/page-Head.webp"
import works from "../../../public/assets/work_bg.jpg"
import Project1 from "../../../public/assets/Projects/project1.png"
import Project2 from "../../../public/assets/Projects/project2.png"
import Project3 from "../../../public/assets/Projects/project3.png"
import Project4 from "../../../public/assets/Projects/project4.jpg"
import Project5 from "../../../public/assets/Projects/project5.png"
import Project6 from "../../../public/assets/Projects/project6.jpg"
import Project7 from "../../../public/assets/Projects/project7.png"
import Project8 from "../../../public/assets/Projects/project8.jpg"
import Project9 from "../../../public/assets/Projects/project9.png"
import Project10 from "../../../public/assets/Projects/project10.jpg"
import Project11 from "../../../public/assets/Projects/project11.jpg"
import Project12 from "../../../public/assets/Projects/project12.png"
import Project13 from "../../../public/assets/Projects/project13.png"
import Project14 from "../../../public/assets/Projects/project14.jpg"
import Project15 from "../../../public/assets/Projects/project15.png"
import Project16 from "../../../public/assets/Projects/project16.png"
import Project17 from "../../../public/assets/Projects/project17.png"
import Project18 from "../../../public/assets/Projects/project18.png"


import { ArrowRight } from "lucide-react"
import { url } from "inspector"
const OurWorks = () => {
    const button = ["Show All", "Mobile Apps", "Online Shoping", "Health Care", "Tour Sites", "Studio", "Other sites"]
    const projects = [
        {
            id: 1,
            name: "Singatour",
            img: Project1,
            url: "https://singatour.com/"
        },
        {
            id: 2,
            name: "BEN Forum",
            img: Project2,
            url: "http://benforum.com/index.html"
        },
        {
            id: 3,
            name: "Mirthi Studios",
            img: Project3,
            url: "http://mirthistudios.com/"
        },
        {
            id: 4,
            name:"Shiny Pearls Dental Care",
            img: Project4,
            url: "http://shinypearlsdentalcare.com/"
        },
        {
            id:5,
            name:"Amman Organic ",
            img:Project5,
            url:"http://103.186.185.245:8087/index.html"
        },
        {
            id:6,
            name:"Plan Mydream Event",
            img:Project6,
            url:"#"
        },
        {
            id:7,
            name:"Vilora Shopping",
            img:Project7,
            url:"#"
        },
        {
            id:8,
            name:"Infinite Studio",
            img:Project8,
            url:"#"
        },
        {
            id:9,
            name:"Niva Foods",
            img:Project9,
            url:"https://www.nivafoods.com.sg/"
        },
        {
            id:10,
            name:"Happy Moment",
            img:Project10,
            url:"#"
        },
        {
            id:11,
            name:"Pondy Bajar",
            img:Project11,
            url:"#"
        },
        {
            id:12,
            name:"Cervo Care",
            img:Project12,
            url:"https://cervocare.com/"
        },
        {
            id:13,
            name:"Aeroseptix",
            img:Project13,
            url:"http://aeroseptix.in/"
        },
        {
            id:14,
            name:"Bharrathividyashram",
            img:Project14,
            url:"#"
        },
        {
            id:15,
            name:"Nadi Astro Bhava",
            img:Project15,
            url:"https://nadiastrobhava.com/"
        },
        {
            id:16,
            name:"Job Portal",
            img:Project16,
            url:"#"
        },
        {
            id:17,
            name:"Cervo Care App",
            img:Project17,
            url:"https://play.google.com/store/search?q=cervo+care&c=apps&hl=en-IN"
        },
        {
            id:18,
            name:"Vilora Shopping App",
            img:Project18,
            url:"#"
        },
        
    ]
    return (
        <>
            <div className="">
                <div className=" relative">
                    <Image src={bgImg} alt="" />
                    <div className="absolute bg-black/40 inset-0 flex flex-col items-center justify-center">
                        <h1 className="text-white text-6xl font-bold">Our Works</h1>
                        <p className="bg-white/20 p-2 rounded-3xl">Home/ourWorks</p>
                    </div>
                </div>
                <div className="flex relative justify-end">
                    <div className="md:absolute left-0 grid gap-8 m-15">
                        <h1 className="text-primary text-5xl font-bold">Our Works.</h1>
                        <p className="text-black">We are a team of engineers & agile specialists working towards one goal, to make technology <br /> solve real-life problems.</p>
                        <button className="bg-[#e3da22] w-fit p-3 rounded-md">Connect with us</button>
                    </div>
                    <Image src={works} alt="works" className=" hidden md:block w-200 h-100" />
                </div>
                <div className="">
                    <div className=" text-center">
                        <h1 className="text-primary text-5xl font-bold">Our Successful Projects</h1>
                        <p className="text-[#364052]">Our experience and expertise combined with deep understanding of the customer behavior has helped diverse industries across the globe.</p>
                        <div className="">
                            {button.map((item) => (
                                <button className=" cursor-pointer bg-primary p-2 m-1 rounded-md text-white hover:bg-red-700 duration-500">
                                    {item}
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 m-1 gap-10  md:grid-cols-4">
                            {
                                projects.map(({name,id,img,url})=>(
                                    <a href={url} target="black" key={id}>
                                        <Image src={img} className="rounded-3xl" alt="Singatour"/>
                                        <h1 className="text-[#364052] font-bold text-2xl p-2">{name}</h1>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="bg-[#0075ff] md:flex items-center justify-around p-5 text-center">
                    <div className="">
                        <h1 className="text-7xl">Let’s Grow Together!</h1>
                        <p className="text-2xl">We’ll be a great team! Have a look at our latest openings.</p></div>
                    <div className="bg-white h-fit text-[#0b1628] flex p-1 items-center w-fit rounded-3xl">
                        <div className="bg-[#0075FF] p-2 rounded-full"><ArrowRight /></div>Join Our Tean
                    </div>
                </div>
            </div>
        </>
    )
}
export default OurWorks