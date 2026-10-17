
import { NavLink } from "react-router-dom";

const categories = [
    { name: "All Homes", path: "/" },
    { name: "Single-family", path: "/category/single-family" },
    { name: "Townhouses", path: "/category/townhouses" },
    { name: "Apartments", path: "/category/apartments" },
    { name: "Student Housing", path: "/category/student-housing" },
    { name: "Senior Living", path: "/category/senior-living" },
    { name: "Vacation Rentals", path: "/category/vacation-rentals" },
];
const LeftSideNav = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3 text-[#403F3F]">All Categories</h2>
            <nav className="flex flex-col">
                {categories.map((cat) => (
                    <NavLink
                        key={cat.path}
                        to={cat.path}
                        end={cat.path === "/"}
                        className={({ isActive }) =>
                            `px-4 py-3 font-semibold text-[#403F3F] rounded-sm hover:bg-base-200 ${
                                isActive ? "bg-base-200" : ""
                            }`
                        }
                    >
                        {cat.name}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default LeftSideNav;