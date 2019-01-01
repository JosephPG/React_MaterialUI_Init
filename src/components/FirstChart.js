import React, { Component } from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class FirstChart extends Component {
    render() {
        const data = [
            {name: 'PageA', uv: 4000},
            {name: 'PageB', uv: 3000},
            {name: 'PageC', uv: 2000},
            {name: 'PageD', uv: 2780},
            {name: 'PageE', uv: 1890},
            {name: 'PageF', uv: 2390},
        ];
        return (
            <div>
                <h3>First Chart</h3>
                <ResponsiveContainer width="100%" height={220}>
                    <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid vertical={false} strokeDasharray="5 5" />
                        <XAxis dataKey="name" padding={{left: 30, right: 30}}/>
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default FirstChart;