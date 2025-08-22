import Logo from "../assets/Butterfly.png";
import HeroImage from "../assets/unsplash_H6j0Zsy91WY.png"
import HeroImag2 from "../assets/Group 5207.png";
import { TbIconsOff } from "react-icons/tb";
import PlayStore from "../assets/Mobile app store badge.png";
import AppStore from "../assets/Mobile app store badge (1).png";
import Footer from "@/components/sections/Footer";
import { useQuery } from "@apollo/client/react";
import { GET_ALL_BRANDS } from "@/lib/Queries/Query";
import { Link } from 'react-router-dom';

interface Data {
    id: number,
    image: string
}

const HomePage = () => {

    const { loading, error, data } = useQuery(GET_ALL_BRANDS) as any;

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>


    return (
        <div>
            {/* --- Hero Section --- */}
            <section className="w-full flex flex-col md:flex-row min-h-screen md:min-h-0 md:h-120">
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-10 p-6 md:p-10 bg-white">
                    <div className="flex gap-2 items-center">
                        <img src={Logo} alt="Logo" className="size-8 rounded-md" />
                        <p className="font-bold text-lg">VibeStrings</p>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight md:leading-normal">Browse top quality <a className="text-[#FF6428]">Guitars</a> online</h1>
                        <p className="text-[#666666] text-base sm:text-lg md:text-xl mt-4">Explore 50k+ latest collections of branded guitars <br /> online with VibeStrings.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-80 md:h-full flex justify-end relative">
                    <div className="absolute bottom-[-25px] left-100 -translate-x-1/2 bg-white p-4 rounded-full z-10 ">
                        <img src={Logo} alt="Logo" className="size-6 rounded-md" />
                    </div>
                    <img src={HeroImage} alt="Hero Image" className="w-full h-full " />
                </div>
            </section>

            {/* --- Brands Section --- */}
            <section className="w-full mt-10 md:mt-20 px-4 py-10">
                <div className="w-full flex flex-col gap-3 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
                        Featuring the <a className="text-[#FF6428]">Best Brand</a>
                    </h1>
                    <p className="text-[#666666]">Select your preferred brand and explore our exquisite collection.</p>
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 p-6 md:p-10 place-items-center">
                    {data && data.findAllBrands.slice(0, 8).map((brand: Data) => (
                        <Link to={`/collections/${brand.id}`} key={brand.id}>
                            <img
                                src={brand.image}
                                className="w-36 md:w-48 filter grayscale brightness-50 transition-all hover:grayscale-0 hover:brightness-100"
                            />
                        </Link>
                    ))}
                </div>

            </section>

            {/* --- Why Try Section --- */}
            <section className="w-full bg-black py-16 px-4">
                <div className="w-full flex flex-col gap-3 mb-10 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-light">
                        Why Try <a className="text-[#FF6428]">VibeStrings?</a>
                    </h1>
                </div>
                <div className="w-full flex justify-center flex-wrap gap-10">
                    <div className="w-full sm:w-80 p-6 flex flex-col items-center">
                        <div className="bg-[#262626] size-16 rounded-2xl text-white flex items-center justify-center text-3xl mb-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6428]/40 hover:scale-105">
                            <TbIconsOff />
                        </div>
                        <div className="flex flex-col gap-4 text-center">
                            <h2 className="text-white font-bold text-2xl">SMOOTH BROWSING</h2>
                            <p className="text-[#666666] text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-80 p-6 flex flex-col items-center">
                        <div className="bg-[#262626] size-16 rounded-2xl text-white flex items-center justify-center text-3xl mb-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6428]/40 hover:scale-105">
                            <TbIconsOff />
                        </div>
                        <div className="flex flex-col gap-4 text-center">
                            <h2 className="text-white font-bold text-2xl">EASY DELIVERY</h2>
                            <p className="text-[#666666] text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-80 p-6 flex flex-col items-center">
                        <div className="bg-[#262626] size-16 rounded-2xl text-white flex items-center justify-center text-3xl mb-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6428]/40 hover:scale-105">
                            <TbIconsOff />
                        </div>
                        <div className="flex flex-col gap-4 text-center">
                            <h2 className="text-white font-bold text-2xl">SWIFT PAYMENTS</h2>
                            <p className="text-[#666666] text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- App Download Section --- */}
            <section className="w-full p-6 md:p-10 flex flex-col lg:flex-row items-center bg-white">
                <div className="w-full lg:w-1/2 h-full flex flex-col items-center gap-10 p-6 md:p-10">
                    <div className="flex gap-10 flex-col items-center text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight md:leading-relaxed">
                            Browse and buy your <a className="text-[#FF6428]">favorite guitars</a> with VibeStrings.
                        </h1>
                        <div className="flex flex-col sm:flex-row items-center gap-5">
                            <img src={PlayStore} alt="Play Store" className="cursor-pointer w-48 sm:w-auto" />
                            <img src={AppStore} alt="App Store" className="cursor-pointer w-48 sm:w-auto" />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                    <img src={HeroImag2} alt="A person playing guitar" className="w-full h-full object-cover rounded-lg" />
                </div>
            </section>
            <Footer />

        </div>
    )
}

export default HomePage

