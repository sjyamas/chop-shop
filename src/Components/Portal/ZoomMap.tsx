import React, { useRef, useEffect, useState } from "react";
import { select, zoom, zoomTransform } from "d3";

const ZoomMap = ({ data, type = "Nether", processDataCallback = (e) => e }) => {
  const processedData = processDataCallback(data);
  const svgRef = useRef();
  const [transform, setTransform] = useState({ k: 1, x: 0, y: 0 });
  const SEARCH = type === "OW" ? 16 : 128;

  // Function to calculate the distance between two points
  function calculateDistance(point1, point2) {
    const x1 = point1.x,
      y1 = point1.y,
      z1 = point1.z;
    const x2 = point2.x,
      y2 = point2.y,
      z2 = point2.z;

    const distance = Math.sqrt(
      Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2)
    );
    return distance;
  }

  // Find the closest non-sender point for each sender point
  const findClosestNonSender = (senderPoint) => {
    let closestPoint = null;
    let minDistance = Infinity;

    processedData.forEach((point) => {
      if (!point.sender) {
        const distance = calculateDistance(senderPoint, point);
        if (distance < minDistance) {
          minDistance = distance;
          closestPoint = point;
        }
      }
    });

    console.log("HEL:LO", closestPoint);
    return closestPoint;
  };

  useEffect(() => {
    const svg = select(svgRef.current);
    const g = svg.select("g");

    // Set up zoom behavior
    const zoomBehavior = zoom()
      .scaleExtent([0.01, 100])
      .on("zoom", (event) => {
        const transform = event.transform;
        g.attr("transform", transform);
        setTransform({ k: transform.k, x: transform.x, y: transform.y });
        // setTransform({ k: 1, x: 0, y: 0 });
      });

    svg.call(zoomBehavior);
  }, []);

  return (
    <svg
      ref={svgRef}
      width={800}
      height={600}
      style={{ border: "1px solid black" }}
    >
      <defs>
        {/* Define arrow marker */}
        <marker
          id="arrowhead"
          viewBox="0 0 10 10"
          refX="10"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="red" />
        </marker>
      </defs>
      <g>
        {/* Draw lines between points that are 150 units or closer */}
        {processedData
          // .filter((point) => point.enable)
          .map((point1, index1) =>
            processedData.map((point2, index2) => {
              if (index1 !== index2) {
                const distance = calculateDistance(point1, point2);
                if (
                  Math.abs(point1.x - point2.x) <= SEARCH &&
                  Math.abs(point1.y - point2.y) <= SEARCH
                ) {
                  return (
                    <g key={`${index1}-${index2}`}>
                      <line
                        x1={point1.x}
                        y1={point1.y}
                        x2={point2.x}
                        y2={point2.y}
                        stroke="pink"
                        strokeWidth={1 / transform.k}
                      />
                      <text
                        x={(point1.x + point2.x) / 2}
                        y={(point1.y + point2.y) / 2}
                        fontSize={`${12 / transform.k}px`}
                        fill="black"
                      >
                        {Math.round(distance)}
                      </text>
                    </g>
                  );
                }
              }
              return null;
            })
          )}

        {/* Draw arrows for sender points */}
        {processedData
          // .filter((point) => point.enable)
          .map((point, index) => {
            if (point.sender) {
              const closestNonSender = findClosestNonSender(point);
              if (closestNonSender) {
                return (
                  <g key={`arrow-${index}`}>
                    <line
                      x1={point.x}
                      y1={point.y}
                      x2={closestNonSender.x}
                      y2={closestNonSender.y}
                      stroke="red"
                      strokeWidth={2 / transform.k}
                      markerEnd="url(#arrowhead)" // Use the marker defined in <defs>
                    />
                  </g>
                );
              }
            }
            return null;
          })}

        {/* Draw points and labels - render after lines */}
        {processedData.map((point, index) => (
          <g key={index}>
            <circle
              cx={point.x}
              cy={point.y}
              r={5 / transform.k}
              fill={point.sender ? "green" : "red"}
            />
            <text
              x={point.x + 10 / transform.k}
              y={point.y}
              fontSize={`${12 / transform.k}px`}
              fill="black"
            >
              {`${point.name} (${point.x}, ${point.z}, ${point.y})`}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
};

export default ZoomMap;
