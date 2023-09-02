"use client";
import { ImageField } from "@prismicio/client";
import { PrismicImage } from "@prismicio/react";
import { useEffect, useRef, useState } from "react";

export function CrystalBall({
  img,
  className,
}: {
  img: ImageField<never>;
  className: string;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mousePositionPercent, setMousePositionPercent] = useState({
    x: 0,
    y: 0,
  });
  const svgRef = useRef<SVGSVGElement>(null);

  const onMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const bb = svgRef.current?.getBoundingClientRect();
    if (bb) {
      setMousePosition({
        x: e.clientX - (bb?.left + bb.width / 2),
        y: e.clientY - (bb?.top + bb.height / 2),
      });
      setMousePositionPercent({
        x: (e.clientX - (bb?.left + bb.width / 2)) / bb.width,
        y: (e.clientY - (bb?.top + bb.height / 2)) / bb.height,
      });
    }
  };

  return (
    <>
      <div className={className}>
        <svg
          className="h-44 w-44 object-cover"
          onMouseMove={onMouseMove}
          ref={svgRef}
          width="525"
          height="559"
          version="1.1"
          viewBox="0 0 525 559"
        >
          <defs>
            <filter id="blur">
              <feGaussianBlur stdDeviation="1" />
            </filter>
            <clipPath id="ball">
              <circle
                fill="none"
                transform="scale(1,-1)"
                cx="262.50049"
                cy="-261.81317"
                r="258.92578"
              />
            </clipPath>
          </defs>
          <image
            width={1270}
            height={700}
            x={-300 - 600 * mousePositionPercent.x}
            y={-100 - 200 * mousePositionPercent.y}
            preserveAspectRatio="true"
            href={img.url ?? ""}
            className="transition blur-sm hover:blur-0 rounded-full"
            clipPath="url(#ball)"
          />
          <g transform={`translate(-697.5 -278.19)`}>
            <g fill="none">
              <path
                d="m1218.9 540a258.93 258.93 0 0 1-129.46 224.24 258.93 258.93 0 0 1-258.93-1e-5 258.93 258.93 0 0 1-129.46-224.24"
                stroke-width="5"
              />
              <g
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-opacity=".5"
                stroke-width="10.4"
                stroke-dasharray={125 + 100 * Math.abs(mousePositionPercent.y)}
                strokeDashoffset={100 * -Math.abs(mousePositionPercent.x)}
              >
                <path
                  transform="scale(1,-1)"
                  d="m1143.8-404.79a228.17 228.17 0 0 1-95.129 75.026"
                />
                <path
                  transform="scale(1,-1)"
                  d="m1030.2-322.89a228.17 228.17 0 0 1-29.673 7.4355"
                />
                <path
                  transform="scale(1,-1)"
                  d="m744.26-465.71a228.17 228.17 0 0 1 4.0596-159.46"
                />
                <path
                  transform="scale(1,-1)"
                  d="m758.5-647.05a228.17 228.17 0 0 1 14.19-23.246"
                />
              </g>
            </g>
            <ellipse
              transform="scale(1,-1)"
              cx="959.98"
              cy="-718.45"
              rx="185.95"
              ry="48.342"
              fill="#a97924"
              fill-opacity=".3"
            />
            <g stroke="#cd6700" stroke-linecap="round">
              <path
                d="m1145.9 718.45a185.95 48.342 0 0 1-184.27 48.34 185.95 48.342 0 0 1-187.6-47.466"
                fill="none"
                stroke-width="5.0681"
              />
              <path
                transform="scale(1,-1)"
                d="m753.87-785.78a206.13 48.342 0 0 1 104.1-42.004 206.13 48.342 0 0 1 207.15 0.4227 206.13 48.342 0 0 1 100.97 42.423"
                fill="none"
                stroke-width="5.336"
              />
              <path
                d="m753.81 785.93 20.709-62.246"
                fill="#ffffff"
                fill-opacity=".17647"
                stroke-width="5.7471"
              />
              <path
                d="m1166.1 784.94-20.652-62.988"
                fill="#ffffff"
                fill-opacity=".17647"
                stroke-width="6.0374"
              />
            </g>
            <path
              transform="scale(1,-1)"
              d="m1137.9-728.17a258.93 258.93 0 0 1 62.375 284.76 258.93 258.93 0 0 1-242.14 162.33 258.93 258.93 0 0 1-239.73-165.87 258.93 258.93 0 0 1 66.555-283.82"
              fill="none"
              stroke="#00cecf"
              stroke-linecap="round"
              stroke-opacity=".2"
              stroke-width="5"
            />
            <g>
              <path
                d="m1137.5 729.09c-0.034-0.36974-0.019-0.41137 0.3589-0.97455 0.5326-0.79391 1.1546-1.5152 3.0519-3.5391 0.3922-0.41848 0.8747-0.94645 1.072-1.1733 0.1974-0.22682 0.3658-0.3919 0.3744-0.36685 0.022 0.063-0.5887 1.2198-0.9308 1.7643-0.4374 0.69636-0.9299 1.381-1.4658 2.0377-0.5615 0.68825-1.7142 1.9361-2.1412 2.318l-0.2892 0.25868z"
                fill="#a97924"
                stroke="#a97924"
                stroke-linecap="round"
                stroke-width=".27967"
              />
              <path
                d="m784.73 731.39c-3.0175-2.4168-5.1754-4.8077-6.5472-7.2541-0.19391-0.34582-0.52312-1.0152-0.67471-1.3719-0.0686-0.16142-0.12474-0.30012-0.12474-0.30821 0-8e-3 0.20111 0.1966 0.44691 0.45485 0.71447 0.75068 1.7565 1.8038 2.8655 2.8958 2.3286 2.293 3.4971 3.5906 4.1476 4.6058 0.16157 0.25211 0.33814 0.61007 0.38097 0.77234 0.0326 0.12354 0.0708 0.63182 0.0475 0.63182-5e-3 0-0.24902-0.19187-0.54182-0.42637z"
                fill="#a97924"
                stroke="#a97924"
                stroke-linecap="round"
                stroke-width=".098877"
              />
              <path
                d="m925.22 830.53c-82.656-3.4199-148.99-18.46-165.26-37.472-3.9049-4.562-4.265-2.6026 6.3141-34.359l9.4048-28.231 3.0031 2.7804c20.428 18.912 77.719 32.42 151.28 35.669 15.823 0.69873 59.198 0.3708 72.246-0.5462 40.583-2.8521 71.351-7.6132 97.031-15.015 19.704-5.679 34.556-12.85 42.449-20.495l2.9049-2.8135 8.9713 27.294c4.9342 15.012 9.1091 27.983 9.2775 28.825 0.6442 3.2211-3.1489 8.3058-9.4234 12.632-24.261 16.728-84.469 28.611-160.97 31.768-14.322 0.59111-52.557 0.56968-67.236-0.0377z"
                fill="#cd6700"
              />
              <path
                d="m947 836.64-5.7332-0.0669v-5.1218l18.691-7e-3c18.178-7e-3 24.087-0.12264 38.174-0.74631 73.052-3.2342 133.3-15.544 156.2-31.916 5.0945-3.6417 8.392-7.7169 9.0176-11.145l0.2042-1.1187-9.3496-28.526c-5.1423-15.689-9.3956-28.652-9.4518-28.806-0.075-0.20525-0.2554-0.0812-0.6777 0.46611-1.2173 1.5776-4.8143 4.9404-7.1342 6.6695-24.609 18.342-87.854 31.162-161.55 32.747-5.8044 0.12485-6.1256 0.14584-2.6102 0.17057 4.8241 0.034 18.541-0.2637 24.611-0.53404 7.6155-0.33917 23.106-1.6299 34.772-2.8973 49.944-5.426 87.523-15.917 105.57-29.473 1.1716-0.88004 3.1796-2.6037 4.4622-3.8304s2.3559-2.2026 2.3852-2.1688c0.042 0.0486 8.4235 25.592 14.366 43.783 2.8012 8.5743 3.8197 12.008 3.8197 12.879 0 3.5172-4.7485 8.9053-11.567 13.125-24.374 15.085-77.388 25.885-145.98 29.739-14.434 0.81103-36.31 1.2199-53.742 1.0046l-10.208-0.12611v-61.469l9.9748-0.0838-9.8815-0.1958-0.0522-2.493-0.0522-2.493 1.8063 0.13543c2.8184 0.21131 29.626 0.15789 36.892-0.0735 23.896-0.76107 43.522-2.2841 64.044-4.9698 42.802-5.6018 76.656-15.826 91.232-27.553 1.2525-1.0076 1.2888-1.0225 2.2497-0.92334 0.685 0.0707 1.1439 0.0143 1.537-0.18902 0.3083-0.1594 2.5423-2.2461 4.9645-4.637l4.404-4.3472 4.9645 15.195c2.7304 8.3574 7.3939 22.601 10.363 31.653l5.3987 16.458-0.2863 1.5342c-0.6197 3.3206-0.9094 4.3148-1.7654 6.0602-5.5706 11.357-24.943 21.268-57.154 29.238-33.36 8.2546-77.521 13.421-126.5 14.8-7.3912 0.20809-27.965 0.35062-36.403 0.25221zm11.083-67.321c-1.1593-0.0328-3.0051-0.0326-4.1018 2.6e-4 -1.0967 0.0329-0.14815 0.0597 2.1078 0.0596 2.256-1.4e-4 3.1532-0.0271 1.9939-0.0598z"
                fill="#cd6700"
              />
            </g>
          </g>
        </svg>
      </div>
      <div>
        <p>Mouse X: {mousePosition.x}</p>
        <p>Mouse Y: {mousePosition.y}</p>
      </div>
      <div>
        <p>Mouse X%: {mousePositionPercent.x}</p>
        <p>Mouse Y%: {mousePositionPercent.y}</p>
      </div>
    </>
  );
}
