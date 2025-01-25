import { FaAngleRight } from "react-icons/fa6";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";

/*eslint-disable*/
export const RevenueCard = ({
    title,
    orderCount,
    amount
}) => {
    return (
        <>
            <div className="bg-white p-4 rounded-md shadow-md">
                <div className="flex justify-start gap-2 items-center text-lg font-semibold text-gray-800">
                    <h3>{title}</h3>
                    <HiOutlineQuestionMarkCircle />
                </div>
                <div className="flex justify-between mt-4">
                    <div>
                        <p className="text-3xl font-semibold">{amount}</p>
                    </div>
                    {orderCount ?
                        <div className="flex items-center space-x-2 text-[#146eb4] font-semibold underline">
                            <p>{orderCount} Orders</p>
                            <FaAngleRight />
                        </div> : null}
                </div>
            </div>
        </>
    )
}