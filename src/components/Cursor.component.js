import React from "react";

const Cursor = () => {
  return (
    <div class="cursor">
      <div id="cursor">
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
          <g>
            <title>Outer Square</title>
            <rect id="canvas_background" height="32" width="32" y="-1" x="-1" />
            <g
              display="none"
              overflow="visible"
              y="0"
              x="0"
              height="100%"
              width="100%"
              id="canvasGrid"
            >
              <rect
                fill="url(#gridpattern)"
                stroke-width="0"
                y="0"
                x="0"
                height="100%"
                width="100%"
              />
            </g>
          </g>
          <g>
            <title>Inner Square</title>
            <g stroke="null" id="svg_4">
              <rect
                stroke="#000"
                id="svg_1"
                height="30.08503"
                width="29.97745"
                y="-0.0771"
                x="0.00746"
                stroke-width="0"
                fill="#6ef0fd"
              />
              <rect
                stroke="#000"
                id="svg_3"
                height="24.06803"
                width="24.08055"
                y="2.93141"
                x="2.94642"
                stroke-width="0"
                fill="#15111f"
              />
            </g>
            <rect
              stroke="#6ef0fd"
              id="svg_5"
              height="3.06595"
              width="12.10406"
              y="12.72462"
              x="8.72043"
              stroke-width="0.5"
              fill="#011115"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Cursor;
