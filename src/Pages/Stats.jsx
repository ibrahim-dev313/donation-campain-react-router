import { useLoaderData } from 'react-router-dom';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const Stats = () => {
    const donations = useLoaderData().length;

    const storedData = JSON.parse(localStorage.getItem("donationData")) || [];
    const donatedDataLength = storedData.length;
    const donatedPercentage = (donatedDataLength / donations) * 100;
    const notDonatedPercentage = 100 - donatedPercentage;

    const data = [
        { name: 'Donated', value: donatedPercentage },
        { name: 'Not Donated', value: notDonatedPercentage },
    ];

    const COLORS = ['#FF444A', '#00C49F'];

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
        const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div>
            <h1 className="mb-4 text-2xl font-semibold text-center">Donation Statistics</h1>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center mt-4 space-x-4 border">
                {data.map((entry, index) => (
                    <div key={`legend-${index}`} className="flex items-center">
                        <span className="w-4 h-4 mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                        {entry.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stats;
