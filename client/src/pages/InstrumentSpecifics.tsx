import { useState } from "react";
import Logo from "../assets/Butterfly.png"
import HeroImage from "../assets/unsplash_H6j0Zsy91WY (2).png";
import Footer from "@/components/sections/Footer";
import TabButton from "@/components/complex-components/TabButton";
import  { SpecificationContent, WhoPlaysItContent } from "@/components/sections/ContentSpecifications";
import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router";
import { GET_MODEL_INFORMATION } from "@/lib/Queries/Query";


const ProductImage = "https://www.fmicassets.com/Damroot/Zoom/10001/9235000560_gtr_frt_001_rr.png";

export interface Musician {
    name: string;
    musicianImage: string;
}

export interface Specs {
    bodyWood: string;
    neckWood: string;
    fingerboard: string;
    pickups: string;
    tuners: string;
    scaleLength: string;
    bridge: string;
}

interface Model {
    id: string;
    name: string;
    image: string;
    description: string;
    musicians: Musician[];
    specs: Specs;
}

interface ModelData {
    findUniqueModel: Model;
}

const IntrumentSpecifics = () => {
    const [activeTab, setActiveTab] = useState('spec');
      const { brandId, modelId } = useParams();

    const { loading, error, data } = useQuery<ModelData>(GET_MODEL_INFORMATION, {
        variables: { brandId, modelId }
    });
    console.log(data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

     const model = data?.findUniqueModel;
  if (!model) return <p>No model found.</p>;


    return (
        <div>
            <section className="w-full flex flex-col md:flex-row min-h-screen md:min-h-0 md:h-120">
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-10 p-6 md:p-10 bg-white">
                    <div className="flex gap-2 items-center">
                        <img src={Logo} alt="Logo" className="size-8 rounded-md" />
                        <p className="font-bold text-lg">VibeStrings</p>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight md:leading-normal">{model.name}</h1>
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-80 md:h-full flex justify-end relative">
                    <div className="absolute bottom-[-25px] left-100 -translate-x-1/2 bg-white p-4 rounded-full z-10 ">
                        <img src={Logo} alt="Logo" className="size-6 rounded-md" />
                    </div>
                    <div className="absolute bottom-1/2 left-[60%] w-96 -translate-x-1/2 z-10 rotate-[-45deg]">
                        <img src={model.image} alt="Logo" className="w-full h-full" />
                    </div>
                    <img src={HeroImage} alt="Hero Image" className="w-full h-full " />
                </div>
            </section>
            <section className="w-full py-5">
                <div className="w-full flex px-5">
                    <TabButton
                        isActive={activeTab === 'spec'}
                        onClick={() => setActiveTab('spec')}
                    >
                        Specification
                    </TabButton>
                    <TabButton
                        isActive={activeTab === 'who'}
                        onClick={() => setActiveTab('who')}
                    >
                        Who plays it?
                    </TabButton>
                </div>
                 <div className="px-15 flex justify-center gap-10">
                    {activeTab === 'spec' && <SpecificationContent description={model.description} specs={model.specs} />}
                    {activeTab === 'who' && <WhoPlaysItContent musicians={model.musicians} />}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default IntrumentSpecifics