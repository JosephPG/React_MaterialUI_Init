import React, { Component } from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class SecondChart extends Component {
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
                <h3>Second Chart</h3>
                <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Bar dataKey="uv" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default SecondChart;