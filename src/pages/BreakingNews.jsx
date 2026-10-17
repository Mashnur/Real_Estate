import MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default ?? MarqueeModule;

const BreakingNews = () => {
    return (
        <div className="flex items-center gap-4">
            <button className="btn btn-error text-white">New Listing</button>
            <Marquee pauseOnHover speed={60}>
                Senior living community with ground-floor access, now open for booking
            </Marquee>
        </div>
    );
};

export default BreakingNews;