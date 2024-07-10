'use client';

import { useEffect, useMemo, useState } from "react";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from '@visx/scale';
import { max } from '@visx/vendor/d3-array';
import { Bar } from '@visx/shape';


interface Data {
    id: string;
    city: string;
    population: number;
}

interface ChartProps {
    width: number;
    height: number;
    data: Data[],
}

// accessors
const getCity = (d: Data) => d.city;
const getPopulation = (d: Data) => d.population;

export default function Chart({ width, height, data = [] }: ChartProps) {
    const margin = { top: 40, right: 40, bottom: 50, left: 40 };

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = useMemo(
        () => scaleBand<string>({
            range: [0, innerWidth],
            round: true,
            domain: data.length > 0 ? data.map(getCity) : [],
            padding: 0.4
        }),
        [innerWidth, data],
    );

    const yScale = useMemo(
        () => scaleLinear<number>({
            range: [innerHeight, 0],
            round: true,
            domain: [0, data.length > 0 ? max(data, getPopulation) || 0 : 0],
        }),
        [innerHeight, data],
    );

    console.log(data);
    if (data == null || data.length == 0){
        return <p>Loading...</p>
    }
    return (
        <svg width={width} height={height}>
            <rect x={0} y={0} width={width} height={height} fill={'#718096'} rx={14} />
            <Group left={margin.left} top={margin.top}>
                {data.map((d) => {
                    const city = getCity(d);
                    const barWidth = xScale.bandwidth();
                    const barHeight = innerHeight - (yScale(getPopulation(d)) ?? 0);
                    const barX = xScale(city) ?? 0;
                    const barY = innerHeight - barHeight;
                    return (
                        <Bar key={`${city}`} x={barX} y={barY} width={barWidth} height={barHeight} fill="#EDF2F7" />
                    );
                })}
            </Group>
        </svg>
    );

}
