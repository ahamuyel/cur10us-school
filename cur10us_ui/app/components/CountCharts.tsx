"use client"
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';
// #region Sample data
const data = [
   {
    name: 'Total',
    count: 119,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 54,
    fill: '#f6ed78ff',
  },
  {
    name: 'Boys',
    count: 65,
    fill: '#c3ebfa',
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const CountCharts = () =>{
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            {/* Title */}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Students</h1>
                <Image src="/moreDark.png" width={20} height={20} alt=""/>
            </div>
            {/* Charts */}
            <div className="relative w-full h-[75%]">
              <ResponsiveContainer>
                <RadialBarChart
                        innerRadius="40%"
                        outerRadius="100%"
                        responsive
                        cx="50%"
                        cy="50%"
                        barSize={42}
                        data={data}
                >
                    <RadialBar 
                      background 
                      dataKey="count" 
                    />
                </RadialBarChart>
              </ResponsiveContainer>
              <Image src="/maleFemale.png"  alt="" height={50} width={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
            </div>
            {/* Bottom */}
            <div className="flex justify-center gap-16">
              <div className="flex flex-col gap-1">
                <div className="w-5 h-5 bg-[#c3ebfa] rounded-full"/>
                <h1 className="font-bold">1,663</h1>
                <h2 className="text-xs text-gray-300">Boys (53%)</h2>
              </div>
              <div className="flex flex-col gap-1">
                <div className="w-5 h-5 bg-[#f6ed78ff] rounded-full"/>
                <h1 className="font-bold">1,024</h1>
                <h2 className="text-xs text-gray-300">Boys (47%)</h2>
              </div>
            </div>
        </div>
    )
}

export default CountCharts


