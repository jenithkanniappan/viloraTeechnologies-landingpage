import Image from "next/image";
import Link from "next/link";
import Header from "../../../public/assets/services/page-Head.webp";
import { LocationEdit, Mail, Map, Phone } from "lucide-react";
const Contact = () => {
    return (
        <>
            <div className="relative w-full h-[480px] overflow-hidden">
                <Image
                    src={Header}
                    fill
                    alt=""
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-blue-950/85" />
                <div className="slide-left relative z-10 flex h-full flex-col items-center justify-center gap-5 text-white">
                    <h1 className="text-5xl font-bold">Contact</h1>
                    <div className="px-5 py-2 rounded-full bg-gray-600/50 backdrop-blur-2xl">
                        <p className="font-semibold text-md">Home / Contact</p>
                    </div>
                </div>
            </div>
            <div className=" flex  items-center gap-2 justify-center mt-24">
                <div className="h-1 w-1 rounded-full bg-blue"></div>
                <span className="text-blue text-sm font-semibold uppercase">
                    contact us
                </span>
                <div className="h-1 w-1 rounded-full bg-blue"></div>
            </div>

            <h1 className="text-5xl text-black font-semibold text-center mt-5">
                Our contact information
            </h1>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="group border border-blue-200 p-8 flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                            <Mail
                                size={36}
                                className="text-blue-600 group-hover:text-white transition-all duration-300 "
                            />
                        </div>
                        <h2 className="text-xl text-black font-semibold mt-6">Email Us</h2>
                        <p className="text-gray-500 mt-4 text-sm">
                            viloratechnologies@gmail.com
                        </p>
                        <p className="text-gray-500 text-sm">
                            viloratecheducation@gmail.com
                        </p>
                    </div>

                    <div className="group border border-blue-200  p-8 flex flex-col items-center text-center ">
                        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                            <Phone
                                size={36}
                                className="text-blue-600 group-hover:text-white transition-all duration-300"
                            />
                        </div>
                        <h2 className="text-xl text-black font-semibold mt-6">Call Us</h2>
                        <p className="text-gray-500 mt-4 text-sm">+91 XXXXX XXXXX</p>
                        <p className="text-gray-500 text-sm">+91 XXXXX XXXXX</p>
                    </div>

                    <div className="group border border-blue-200  p-8 flex flex-col items-center text-center  ">
                        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                            <LocationEdit
                                size={36}
                                className="text-blue-600 group-hover:text-white transition-all duration-300"
                            />
                        </div>
                        <h2 className="text-x text-black font-semibold mt-6">
                            Our Location
                        </h2>
                        <p className="text-gray-500 mt-4 text-sm max-w-xs">
                            83 & 84, 1st Floor, J Plaza, Ellaipillaichavady, Sithananda Nagar,
                            Thanthai Periyar Nagar
                        </p>
                        <p className="text-gray-500 text-sm">Puducherry – 605005</p>
                    </div>

                    <div className="group border border-blue-200  p-8 flex flex-col items-center text-center ">
                        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                            <Mail
                                size={36}
                                className="text-blue-600 group-hover:text-white transition-all duration-300"
                            />
                        </div>
                        <h2 className="text-xl text-black font-semibold mt-6">Live Chat</h2>
                        <p className="text-gray-500 mt-4 text-sm">
                            livechat@viloratechnologies.com
                        </p>
                        <Link
                            href="#"
                            className="text-blue-600 underline mt-3 text-sm hover:text-blue-800"
                        >
                            Need help?
                        </Link>
                    </div>
                </div>
            </div>

            {/* <div className="">

        <div className="h-100 w-100 border border-blue-200">
            <h1></h1>
        </div>
        <div className=""></div>

      </div> */}

            <div className="relative bg-blue-600 overflow-hidden px-6 py-12 md:px-10 md:py-16 flex flex-col md:flex-row  items-center justify-between gap-8">
                <div className="absolute -top-32 -left-32  w-72 h-72 md:w-96 md:h-96  bg-blue-500 rounded-full opacity-40"></div>

                <div className="absolute -bottom-32 -right-32 w-72 h-72 md:w-96 md:h-96  bg-blue-500 rounded-full opacity-40"></div>

                <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold text-white  text-center md:text-left">
                    GET CONSULTANT NOW!
                </h1>

                <Link
                    href="#"
                    className="relative group overflow-hidden  flex items-center gap-3  bg-white  px-5 py-3 md:px-6 md:py-3 rounded-full font-semibold"
                >
                    <span className="absolute inset-0 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full rounded-full"></span>

                    <span className="relative z-10  bg-blue-800 text-white w-8 h-8 flex items-center justify-center rounded-full transition-all duration-500  group-hover:bg-white  group-hover:text-blue-600">
                        →
                    </span>

                    <span className="relative z-10 text-black  transition-colors duration-500 group-hover:text-white">
                        Lets talk now
                    </span>
                </Link>
            </div>
        </>
    );
};
export default Contact;
