import { useState, useEffect } from "react";
import { useQuery, useLazyQuery } from "@apollo/client/react";
import { useParams, Link } from "react-router-dom";
import { useDebounce } from "use-debounce";

import Logo from "../assets/Butterfly.png";
import HeroImage from "../assets/unsplash_H6j0Zsy91WY (2).png";
import Name from "../assets/image 3.png";

import Footer from "@/components/sections/Footer";
import GuitarCard from "@/components/cards/CollectionCards";
import Pagination from "@/components/complex-components/Pagniations";
import InfiniteScrollGuitars from "@/components/complex-components/InfineScrolling";

import { CiFilter } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import { SkeletonCard } from "@/components/ui/skeletonCard";

import { GET_ALL_BRANDS_MODELS, SEARCH_MODELS } from "@/lib/Queries/Query";

// --- Types ---
export interface Guitar {
    id: string;
    name: string;
    type: string;
    image: string;
    description: string;
    price: number;
}

interface BrandModelsData {
    findBrandModels: Guitar[];
}

interface SearchData {
    searchModels: Guitar[];
}

const Collections = () => {
    const { brandId } = useParams();
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedType, setSelectedType] = useState<string>("all");
    const [debouncedSearchTerm] = useDebounce(searchTerm, 150);

    // --- Queries ---
    const { loading: initialLoading, error: initialError, data: initialData } = useQuery<BrandModelsData>(
        GET_ALL_BRANDS_MODELS,
        {
            variables: { brandId, sort: { field: "price", order: "ASC" } },
            skip: searchTerm !== "",
        }
    );

    const [search, { loading: searchLoading, error: searchError, data: searchData }] = useLazyQuery<SearchData>(
        SEARCH_MODELS
    );

    // --- Effects ---
    useEffect(() => {
        if (debouncedSearchTerm.trim() !== "") {
            search({ variables: { brandId, name: debouncedSearchTerm } });
        }
        setCurrentPage(1); // reset page when search changes
    }, [debouncedSearchTerm, brandId, search]);

    // --- Data & state ---
    const loading = searchTerm ? searchLoading : initialLoading;
    const error = searchTerm ? searchError : initialError;

    const baseGuitars = searchTerm ? searchData?.searchModels || [] : initialData?.findBrandModels || [];
    const allGuitars = baseGuitars.filter((g) => selectedType === "all" || g.type.toLowerCase() === selectedType);

    const guitarsPerPage = 6;
    const totalPages = Math.ceil(allGuitars.length / guitarsPerPage);
    const paginatedGuitars = allGuitars.slice((currentPage - 1) * guitarsPerPage, currentPage * guitarsPerPage);

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) setCurrentPage(page);
    };

    if (error) return <p>Error: {error.message}</p>;

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
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight md:leading-normal">
                            Play like a <span className="text-[#FF6428]">Rock Star</span>
                        </h1>
                        <p className="text-[#666666] text-base sm:text-lg md:text-xl mt-4">
                            With a legacy dating back to the 1950s, Ibanez blends expert craftsmanship with cutting-edge innovation
                            to deliver guitars that inspire creativity and elevate your performance. Trusted by top artists worldwide,
                            Ibanez guitars are built to play fast, sound bold, and stand out on any stage.
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 h-80 md:h-full flex justify-end relative">
                    <div className="absolute bottom-[-25px] left-100 -translate-x-1/2 bg-white p-4 rounded-full z-10">
                        <img src={Logo} alt="Logo" className="size-6 rounded-md" />
                    </div>
                    <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 z-10">
                        <img src={Name} alt="Logo" className="size-70 rounded-md" />
                    </div>
                    <img src={HeroImage} alt="Hero Image" className="w-full h-full" />
                </div>
            </section>

            {/* --- Collection Section --- */}
            <section className="w-full flex flex-col items-center py-20">
                <h1 className="text-3xl text-center font-bold">
                    Check out the <span className="text-[#FF6428]">Selection</span>
                </h1>

                {/* --- Filters + Search --- */}
                <div className="flex justify-center gap-5 py-5 w-full max-w-4xl">
                    <Select value={selectedType} onValueChange={setSelectedType}>
                        <SelectTrigger className="w-[224px] bg-white border border-gray-300 rounded-lg py-3 px-4 text-base group focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20">
                            <div className="flex items-center gap-3">
                                <CiFilter className="text-gray-400 group-data-[state=open]:text-orange-500" />
                                <SelectValue placeholder="Filter by type" />
                            </div>
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-200 rounded-lg shadow-lg">
                            <SelectItem value="acoustic">Acoustic</SelectItem>
                            <SelectItem value="electric">Electric</SelectItem>
                            <SelectItem value="bass">Bass</SelectItem>
                        </SelectContent>
                    </Select>

                    <div className="relative w-full sm:w-64">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FaSearch className="text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                        </div>
                        <Input
                            type="search"
                            placeholder={searchLoading ? "Searching..." : "Search by name"}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                            className="w-full bg-white border border-gray-300 text-gray-700 py-3 pl-10 pr-4 rounded-lg leading-tight focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 placeholder:text-gray-400 transition-colors"
                        />
                    </div>
                </div>

                {/* --- Guitars --- */}
                <div className="mt-10 w-full">
                    {loading ? (
                        // If loading, show the skeleton grid
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                            {/* Create an array of 6 items to map over for the skeletons */}
                            {Array.from({ length: 6 }).map((_, index) => (
                                <SkeletonCard key={index} />
                            ))}
                        </div>
                    ) : searchTerm ? (
                        // If not loading and there's a search term, show infinite scroll
                        <InfiniteScrollGuitars guitars={allGuitars} />
                    ) : (
                        // If not loading and no search term, show paginated grid
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-3 gap-8 justify-items-center">
                            {paginatedGuitars.map((guitar) => (
                                <Link to={`/collections/${brandId}/${guitar.id}`} key={guitar.id} className="w-full h-full flex justify-center">
                                    <GuitarCard guitar={guitar} />
                                </Link>
                            ))}
                        </div>
                    )}
                </div>


                {/* --- Pagination --- */}
                {!searchTerm && totalPages > 1 && (
                    <div className="flex flex-col sm:flex-row items-center w-full p-5 justify-between mt-12 py-4 border-t border-gray-200">
                        <p className="text-gray-500 mb-4 sm:mb-0">
                            SHOWING{" "}
                            <span className="font-semibold text-gray-800">{paginatedGuitars.length}</span> RESULTS FROM{" "}
                            <span className="font-semibold text-gray-800">{allGuitars.length}</span>
                        </p>
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
};

export default Collections;
