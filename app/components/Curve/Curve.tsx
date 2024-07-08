'use client';

import appleStock, { AppleStock } from "@visx/mock-data/lib/mocks/appleStock";
import { scaleBand, scaleLinear} from "@visx/scale";
import useMeasure from "react-use-measure";
import {Group} from "@visx/group";
import {AxisLeft, AxisBottom} from "@visx/axis";

// 1. data
const data = appleStock.slice(0, 10);

// 2. margins
const margin = 32;

// 3. width and height
const defaultWidth = 100;
const defaultHeight = 100;

// 6a. Define the accessor methods
const getXValue = (d: AppleStock) => d.date;
const getYValue = (d: AppleStock) => d.close;


// 7. create the axis

// 8. group it all together

export default function Curve() {
    const [ref, bounds] = useMeasure();
    const width = bounds.width || defaultWidth;
    const height = bounds.height || defaultHeight;
    
    // 4. innerWidth and innerHeight
    const innerWidth = width - margin;
    const innerHeight = height - margin;
    
    // 6. define the scales
    const xScale = scaleBand<string>({
        range: [margin, innerWidth],
        domain: data.map(getXValue),
        padding: 0.2,
    });

    const yScale = scaleLinear<number>({
        range: [innerHeight, margin],
        domain: [
            Math.min(...data.map(getYValue)) - 1,
            Math.max(...data.map(getYValue)) +1
        ],
    });
    
    // 5. create the svg
    return <svg ref={ref} width="90%" height="90%" viewBox={`0 0 ${width} ${height}`}>
        <Group>
        </Group>
        <Group>
            <AxisBottom top={innerHeight} scale={xScale} />
        </Group>
        <Group>
            <AxisLeft left={margin} scale={yScale} />
        </Group>
    </svg>;
}