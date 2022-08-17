import React, { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const data = genres.map((genre) => {
            const value = events.filter((event) => event.summary.split(' ').includes(genre)).length
            return { name: genre, value };
        }).filter(d => d.value > 0);

        setData(data);

    }, [events]);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#85D2DB'];

    return (
        <ResponsiveContainer height={400}>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                    outerRadius={80}
                    fill="#4A84DA"
                    dataKey="value"
                >
                    {
                  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} name={entry.name} />)
                    }
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default EventGenre;