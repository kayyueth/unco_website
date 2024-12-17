'use client';
import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const FallingBlocks: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const engine = Matter.Engine.create();
    const { world } = engine;

    engine.gravity.y = 1; 

    // create render engine
    const render = Matter.Render.create({
      element: sceneRef.current!,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
        background: "#FFFFFF", 
        showDebug: true, 
      },
    });

    const runner = Matter.Runner.create();

    // create boundary
    const boundaries = [
        Matter.Bodies.rectangle(400, 0, 800, 20, { // top
          isStatic: true,
          restitution: 1, 
          render: { fillStyle: "#6C6C6C" },
          label: "Top",
        }),
        Matter.Bodies.rectangle(400, 600, 800, 20, { // bottom
          isStatic: true,
          restitution: 1,
          render: { fillStyle: "#6C6C6C" },
          label: "Bottom",
        }),
        Matter.Bodies.rectangle(0, 300, 20, 600, { // left
          isStatic: true,
          restitution: 1,
          render: { fillStyle: "#6C6C6C" },
          label: "Left",
        }),
        Matter.Bodies.rectangle(800, 300, 20, 600, { // right
          isStatic: true,
          restitution: 1,
          render: { fillStyle: "#6C6C6C" },
          label: "Right",
        }),
    ];

    // SVG shapes
    const svgPaths = [
      '/pedals/books.svg',
      '/pedals/cities.svg',
      '/pedals/continents.svg',
      '/pedals/donatedtoDeSci.svg',
      '/pedals/followers.svg',
      '/pedals/hours.svg',
      '/pedals/members.svg',
      '/pedals/months.svg',
      '/pedals/projects_funded.svg',
    ];


    // Load SVG shapes dynamically
    const loadSVG = async () => {
      const shapes = [];

      for (let i = 0; i < svgPaths.length; i++) {
        const response = await fetch(svgPaths[i]);
        const text = await response.text();
        const path = new DOMParser().parseFromString(text, "image/svg+xml").querySelector("path");

        if (path) {
          const vertices = Matter.Svg.pathToVertices(path, 30); // Reduce vertices resolution
          const body = Matter.Bodies.fromVertices(400 + i * 10, 50 + i * 10, [vertices], {
            restitution: 0.6,
            render: {
              fillStyle: "#000000",
              strokeStyle: "#000000",
              lineWidth: 1,
            },
          });
          shapes.push(body);
        }
      }
      Matter.World.add(world, shapes);
    };
    Matter.World.add(world, boundaries);

    // Load SVG shapes
    loadSVG();

    // create shapes
    // const shapes = [
    //     Matter.Bodies.rectangle(100, 50, 60, 60, {
    //         restitution:0.8,
    //         render: { fillStyle: "#FF5733", strokeStyle: "#000000", lineWidth: 2 },
    //     }),
    //     Matter.Bodies.circle(300, 50, 30, {
    //         restitution:0.8,
    //         render: { fillStyle: "#33FF57", strokeStyle: "#000000", lineWidth: 2 },
    //     }),
    //     Matter.Bodies.rectangle(400, 50, 50, 80, {
    //         restitution:0.8,
    //         render: { fillStyle: "#3357FF", strokeStyle: "#000000", lineWidth: 2 },
    //     }),
    //     Matter.Bodies.rectangle(200, 50, 60, 60, {
    //         restitution:0.8,
    //         render: { fillStyle: "#FF5733", strokeStyle: "#000000", lineWidth: 2 },
    //       }),
    //     Matter.Bodies.circle(300, 50, 30, {
    //         restitution:0.8,
    //         render: { fillStyle: "#33FF57", strokeStyle: "#000000", lineWidth: 2 },
    //     }),
    //     Matter.Bodies.rectangle(400, 50, 50, 80, {
    //         restitution:0.8,
    //         render: { fillStyle: "#3357FF", strokeStyle: "#000000", lineWidth: 2 },
    //     }),
    // ];

    // Matter.World.add(world, [...boundaries, ...shapes]);

    // drag feature
    const mouse = Matter.Mouse.create(render.canvas); 
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
        stiffness: 0.2, 
        render: { visible: false }, 
        },
    });

    Matter.World.add(world, mouseConstraint);
    render.mouse = mouse;

    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    // remove everything
    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      style={{
        border: "1px solid #000",
        width: "800px",
        height: "600px",
        margin: "0 auto",
        background: "#F0F0F0",
      }}
    />
  );
};

export default FallingBlocks;
