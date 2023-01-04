import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { userRequest } from "../../requestMethods";
import { useEffect, useState } from 'react';

function FeaturedInfo() {

    const [ income, setIncome ] = useState([]);
    const [ percentage, setPercentage ] = useState(0);

    useEffect(() => {
        const getIncome = async () => {
            try {
                const response = await userRequest.get('orders/income')
                setIncome(response.data)
                setPercentage((response.data[1].total* 100/ response.data[0].total - 100))
            } catch (error) {
                console.log(error)
            }
        }
        getIncome()
    },[]);

  return (
    <div className="featured-container w-100% flex justify-between">
        <div className="featuredItem flex-1 ml-10 mr-10 p-10 rounded-lg cursor-pointer shadow-xl">
            <span className="featured-title text-xl">Revenue</span>
            <div className="featuredMoneyContainer mt-5 flex items-center">
                <span className="featuredMoney text-3xl">${income.total}</span>
                <span className="featuredMoneyRate ml-5 flex items-center">%{Math.floor(percentage)}
                { percentage < 0 ? (
                    <ArrowDownwardIcon className='featuredIcon negetive text-sm text-red-500'/>
                ): <ArrowUpwardIcon className='featuredIcon positive text-sm text-green-500'/>}
                </span>
            </div>
            <span className='featuredSub text-stone-400'>Compared to last Month</span>
        </div>
        <div className="featuredItem flex-1 ml-10 mr-10 p-10 rounded-lg cursor-pointer shadow-xl">
            <span className="featured-title text-xl">Sales</span>
            <div className="featuredMoneyContainer mt-5 flex items-center">
                <span className="featuredMoney text-3xl">$5,415</span>
                <span className="featuredMoneyRate ml-5 flex items-center">-11.45<ArrowDownwardIcon className='featuredIcon negetive text-sm text-red-500'/></span>
            </div>
            <span className='featuredSub text-stone-400'>Compared to last Month</span>
        </div>
        <div className="featuredItem flex-1 ml-10 mr-10 p-10 rounded-lg cursor-pointer shadow-xl">
            <span className="featured-title text-xl">Costs</span>
            <div className="featuredMoneyContainer mt-5 flex items-center">
                <span className="featuredMoney text-3xl">$5,415</span>
                <span className="featuredMoneyRate ml-5 flex items-center">+9.45<ArrowUpwardIcon className='featuredIcon positive text-sm text-green-500'/></span>
            </div>
            <span className='featuredSub text-stone-400'>Compared to last Month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo;