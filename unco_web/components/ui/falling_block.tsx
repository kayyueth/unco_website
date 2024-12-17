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
        // showDebug: true, 
      },
    });

    const runner = Matter.Runner.create();

    // create boundary
    const boundaries = [
        Matter.Bodies.rectangle(400, 0, 800, 20, { // top
          isStatic: true,
          restitution: 1, 
          render: { fillStyle: "white" },
          label: "Top",
        }),
        Matter.Bodies.rectangle(400, 600, 800, 20, { // bottom
          isStatic: true,
          restitution: 1,
          render: { fillStyle: "white" },
          label: "Bottom",
        }),
        Matter.Bodies.rectangle(0, 300, 20, 600, { // left
          isStatic: true,
          restitution: 1,
          render: { fillStyle: "white" },
          label: "Left",
        }),
        Matter.Bodies.rectangle(800, 300, 20, 600, { // right
          isStatic: true,
          restitution: 1,
          render: { fillStyle: "white" },
          label: "Right",
        }),
    ];

    // SVG shapes
    // const svgPaths = [
    //   '/pedals/books.svg',
    //   '/pedals/cities.svg',
    //   '/pedals/continents.svg',
    //   '/pedals/donatedtoDeSci.svg',
    //   '/pedals/followers.svg',
    //   '/pedals/hours.svg',
    //   '/pedals/members.svg',
    //   '/pedals/months.svg',
    //   '/pedals/projects_funded.svg',
    // ];


    // // Load SVG shapes dynamically
    // const loadSVG = async () => {
    //   const shapes = [];

    //   for (let i = 0; i < svgPaths.length; i++) {
    //     const response = await fetch(svgPaths[i]);
    //     const text = await response.text();
    //     const path = new DOMParser().parseFromString(text, "image/svg+xml").querySelector("path");

    //     if (path) {
    //       const vertices = Matter.Svg.pathToVertices(path, 30); // Reduce vertices resolution
    //       const body = Matter.Bodies.fromVertices(400 + i * 10, 50 + i * 10, [vertices], {
    //         restitution: 0.6,
    //         render: {
    //           fillStyle: "#000000",
    //           strokeStyle: "#000000",
    //           lineWidth: 1,
    //         },
    //       });
    //       shapes.push(body);
    //     }
    //   }
    //   Matter.World.add(world, shapes);
    // };
    // Matter.World.add(world, boundaries);

    // // Load SVG shapes
    // loadSVG();

    // create shapes
    const shapes = [
      { body: Matter.Bodies.rectangle(100, 100, 120, 120, { restitution: 0.8, render: { fillStyle: "#EFDBE3" } }), text: "4 continents" },
      { body: Matter.Bodies.rectangle(150, 50, 120, 120, { restitution: 0.8, render: { fillStyle: "#EFDFDE" } }), text: "4 books" },
      { body: Matter.Bodies.rectangle(180, 50, 240, 240, { restitution: 0.8, render: { fillStyle: "#F2ECED" } }), text: "600+ hours of online creation paid" },
      { body: Matter.Bodies.rectangle(200, 50, 160, 160, { restitution: 0.8, render: { fillStyle: "#F5EFEF" } }), text: "15+ projects funded" },
      { body: Matter.Bodies.rectangle(220, 50, 180, 180, { restitution: 0.8, render: { fillStyle: "#E9D0D9" } }), text: "$10,000 donated to DeSci" },
      { body: Matter.Bodies.rectangle(240, 50, 140, 140, { restitution: 0.8, render: { fillStyle: "#EFDFDE" } }), text: "3000+ followers" },
      { body: Matter.Bodies.rectangle(120, 50, 10, 10, { restitution: 0.8, render: { fillStyle: "#EFDFDE" } }), text: "🥺" },
      { body: Matter.Bodies.rectangle(300, 50, 10, 10, { restitution: 0.8, render: { fillStyle: "#EFDFDE" } }), text: "🔥" },
      { body: Matter.Bodies.rectangle(250, 50, 10, 10, { restitution: 0.8, render: { fillStyle: "#EFDFDE" } }), text: "🌸" },
      { body: Matter.Bodies.rectangle(110, 50, 10, 10, { restitution: 0.8, render: { fillStyle: "#EFDFDE" } }), text: "🥑" },
      { body: Matter.Bodies.rectangle(80, 50, 10, 10, { restitution: 0.8, render: { fillStyle: "#EFDFDE" } }), text: "🪴" },
    ];
    shapes.forEach((shape) => Matter.World.add(world, [...boundaries, shape.body]));

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

    // 自定义渲染文本
    Matter.Events.on(render, "afterRender", () => {
      const context = render.context;
      context.font = "14px Arial";
      context.textAlign = "center";
      context.textBaseline = "middle";

      // 绘制每个物体的文本
      shapes.forEach(({ body, text }) => {
        const { position } = body;
        context.fillStyle = "#000000"; // 文本颜色
        context.fillText(text, position.x, position.y);
      });
    });

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
        width: "800px",
        height: "600px",
        margin: "0 auto",
        background: "#F0F0F0",
      }}
    />
  );
};

export default FallingBlocks;
