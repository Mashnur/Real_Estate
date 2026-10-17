import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EstateDetails = () => {
    const { id } = useParams();
    const [estate, setEstate] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/estates.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((e) => e.id === Number(id));
                setEstate(found);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className="p-8 text-center">Loading...</p>;
    if (!estate) return <p className="p-8 text-center">Property not found.</p>;

    const { estate_title, segment_name, description, price, status, area, location, facilities, image } = estate;

    return (
        <div className="max-w-5xl mx-auto p-4 flex flex-col gap-6">
            <img src={image} alt={estate_title} className="w-full h-80 object-cover rounded" />
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 flex flex-col gap-3">
                    <div className="flex gap-2">
                        <span className="bg-pink-600 text-white text-xs px-3 py-1 rounded capitalize">{status}</span>
                        <span className="badge badge-ghost">{segment_name}</span>
                    </div>
                    <h1 className="text-3xl font-bold">{estate_title}</h1>
                    <p className="text-sm">{location}</p>
                    <p>{description}</p>
                    <h3 className="font-semibold mt-2">Facilities</h3>
                    <div className="flex gap-2 flex-wrap">
                        {facilities.map((f) => (
                            <span key={f} className="badge badge-ghost">{f}</span>
                        ))}
                    </div>
                </div>
                <div className="border rounded-md p-6 flex flex-col gap-3 lg:w-72 h-fit">
                    <p className="text-sm">Price</p>
                    <p className="text-3xl font-bold">{price}</p>
                    <p>Area: <b>{area}</b></p>
                    <p>Status: <b className="capitalize">{status}</b></p>
                    <Link to="/" className="btn btn-outline">Back to estates</Link>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;