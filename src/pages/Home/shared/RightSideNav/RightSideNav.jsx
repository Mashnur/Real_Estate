import { useContext } from "react";
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../../../../providers/AuthProvider";

const zoneItems = [
    { title: "Mortgage Calculator", img: "https://placehold.co/300x200?text=Mortgage" },
    { title: "Neighborhood Guide", img: "https://placehold.co/300x200?text=Neighborhood" },
    { title: "Moving Checklist", img: "https://placehold.co/300x200?text=Moving" },
];

const RightSideNav = () => {
    const { user, googleLogin, githubLogin } = useContext(AuthContext);

    const handleGoogle = () => {
        googleLogin()
            .then((result) => console.log(result.user))
            .catch((error) => console.error(error.message));
    };

    const handleGithub = () => {
        githubLogin()
            .then((result) => console.log(result.user))
            .catch((error) => console.error(error.message));
    };

    return (
        <div className="flex flex-col gap-5">
            {/* Login with */}
            {!user && (
                <div className="border border-base-300 rounded-md p-4 flex flex-col gap-3">
                    <h2 className="text-xl text-[#1F4E5F]">LOGIN WITH</h2>
                    <button onClick={handleGoogle} className="btn btn-outline">
                        <FaGoogle /> Login with Google
                    </button>
                    <button onClick={handleGithub} className="btn btn-outline">
                        <FaGithub /> Login with GitHub
                    </button>
                </div>
            )}

            {/* Find us on */}
            <div className="border border-base-300 rounded-md p-4 flex flex-col gap-3">
                <h2 className="text-xs font-semibold text-[#403F3F]">FIND US ON</h2>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="btn btn-outline justify-start">
                    <FaFacebook className="text-blue-600" /> Facebook
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="btn btn-outline justify-start">
                    <FaInstagram className="text-pink-600" /> Instagram
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="btn btn-outline justify-start">
                    <FaTwitter className="text-sky-500" /> Twitter
                </a>
            </div>

            {/* Home zone */}
            <div className="border border-base-300 rounded-md p-4 flex flex-col gap-3">
                <h2 className="text-xs font-semibold text-[#403F3F]">HOME ZONE</h2>
                {zoneItems.map((item) => (
                    <div key={item.title} className="border border-base-300 rounded-md p-2 text-center">
                        <img src={item.img} alt={item.title} className="w-full h-28 object-cover rounded" />
                        <p className="mt-2 font-medium">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RightSideNav;