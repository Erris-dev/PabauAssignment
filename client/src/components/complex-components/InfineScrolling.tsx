import { useState, useRef, useCallback } from "react";
import GuitarCard, { type Guitar } from "../cards/CollectionCards";
import { Link } from "react-router-dom";

const InfiniteScrollGuitars = ({ guitars, brandId }: { brandId?: string, guitars: Guitar[] }) => {
    const [visibleCount, setVisibleCount] = useState(6);
    const observer = useRef<IntersectionObserver | null>(null);

    const lastGuitarElementRef = useCallback((node: HTMLDivElement) => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && visibleCount < guitars.length) {
                setVisibleCount(prevCount => prevCount + 6);
            }
        });
        if (node) observer.current.observe(node);
    }, [visibleCount, guitars.length]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-3 gap-8 justify-items-center">
            {guitars.slice(0, visibleCount).map((guitar, index) => {
                if ((index === guitars.slice(0, visibleCount).length - 1)) {
                    return <div ref={lastGuitarElementRef} key={guitar.id}>
                        <Link to={`/collections/${brandId}/${guitar.id}`} key={guitar.id} className="w-full h-full flex justify-center" >
                        <GuitarCard guitar={guitar} />
                    </Link></div>;
                }
                return   <Link to={`/collections/${brandId}/${guitar.id}`} key={guitar.id} className="w-full h-full flex justify-center" >
                    <GuitarCard key={guitar.id} guitar={guitar} />
                </Link>;
            })}
        </div>
    );
};

export default InfiniteScrollGuitars