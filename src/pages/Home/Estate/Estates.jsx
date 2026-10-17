import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EstateCard from "./EstateCard";

const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

const Estates = () => {
    const { type } = useParams();
    const [estates, setEstates] = useState([]);

    useEffect(() => {
        fetch("/estates.json")
            .then((res) => res.json())
            .then((data) => setEstates(data));
    }, []);

    const shown = type ? estates.filter((e) => slugify(e.segment_name) === type) : estates;

    if (shown.length === 0) return <p>No properties found in this category.</p>;

    return (
        <div className="flex flex-col gap-5">
            {shown.map((estate) => (
                <EstateCard key={estate.id} estate={estate} />
            ))}
        </div>
    );
};

export default Estates;