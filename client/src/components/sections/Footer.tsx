import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import Logo from "../../assets/Butterfly.png";

const Footer = () => {
    return (
        <div>
            {/* --- Footer --- */}
            <footer className="w-full bg-[#EEEEEE] text-gray-700">
                <div className="container mx-auto px-6 py-12">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-10">
                        <div className="w-full md:w-1/4 flex flex-col items-center md:items-start gap-4">
                            <div className="flex items-center gap-2">
                                <img src={Logo} alt="Logo" className="size-8 rounded-md" />
                                <span className="font-bold text-2xl">VibeStrings</span>
                            </div>
                            <div className="flex items-center gap-3 mt-2">
                                <IoMailOutline />
                                <span>Enquiry@VibeStrings.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <IoLocationOutline />
                                <span>San Francisco</span>
                            </div>
                        </div>

                        <div className="w-full sm:w-auto mt-8 md:mt-0">
                            <h3 className="font-bold text-lg mb-4">PAGES</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-[#FF6428]">Store</a></li>
                                <li><a href="#" className="hover:text-[#FF6428]">Collections</a></li>
                                <li><a href="#" className="hover:text-[#FF6428]">Support</a></li>
                            </ul>
                        </div>

                        <div className="w-full sm:w-auto mt-8 md:mt-0">
                            <h3 className="font-bold text-lg mb-4">PRODUCT</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-[#FF6428]">Terms</a></li>
                                <li><a href="#" className="hover:text-[#FF6428]">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-[#FF6428]">Copyright</a></li>
                            </ul>
                        </div>

                        <div className="w-full sm:w-auto mt-8 md:mt-0">
                            <h3 className="font-bold text-lg mb-4">FOLLOW US</h3>
                            <div className="flex justify-center md:justify-start gap-5 text-2xl">
                                <a href="#" className="hover:text-[#FF6428]"><FaFacebook /></a>
                                <a href="#" className="hover:text-[#FF6428]"><FaTwitter /></a>
                                <a href="#" className="hover:text-[#FF6428]"><FaInstagram /></a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center text-gray-500 mt-12 pt-8 border-t border-gray-300">
                        <p>© 2022 Copyright: VibeStrings</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer