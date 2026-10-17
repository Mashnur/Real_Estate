import { Link } from "react-router-dom";

const EstateCard = ({ estate }) => {
    const { id, estate_title, description, price, status, area, location, facilities, image, segment_name } = estate;

    return (
        <div className="border rounded-md p-4 flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <span className="text-xs">{segment_name}</span>
                <span className="bg-pink-600 text-white text-xs px-3 py-1 rounded capitalize">{status}</span>
            </div>
            <h3 className="text-lg font-semibold">{estate_title}</h3>
            <img src={image} alt={estate_title} className="w-full h-56 object-cover rounded" />
            <p>{description}</p>
            <div className="flex gap-2 flex-wrap">
                {facilities.map((f) => (
                    <span key={f} className="badge badge-ghost">{f}</span>
                ))}
            </div>
            <div className="flex justify-between items-center border-t pt-3">
                <div>
                    <b>{price}</b>
                    <p className="text-xs">{area} · {location}</p>
                </div>
                <Link to={`/estate/${id}`} className="btn btn-error text-white">View Property</Link>
            </div>
        </div>
    );
};

export default EstateCard;