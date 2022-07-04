import { BiChevronRight } from "react-icons/bi";

const Card = ({ cardData }) => {
    return (
        <div
            className="w-72 h-44 bg-white shadow-md p-7 flex flex-col items-start justify-between gap-3"
            style={{ borderRadius: "40px" }}
        >
            <div className="w-full flex flex-row items-center justify-between bg-white font-semibold text-2xl">
                <p>{cardData.title}</p>
                <BiChevronRight />
            </div>
            <p className="text-[#EB5757] font-semibold text-6xl">
                {cardData.value}
            </p>
        </div>
    );
};

export default Card;
