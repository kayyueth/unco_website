'use client';
import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const FallingBlocks: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const engine = Matter.Engine.create();
    const { world } = engine;

    // 设置重力方向
    engine.gravity.y = 1; // 重力向下

    const render = Matter.Render.create({
      element: sceneRef.current!,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
        background: "#FFFFFF", // 设置背景颜色
        showDebug: true, // 开启调试模式以查看是否渲染
      },
    });

    // 创建运行器
    const runner = Matter.Runner.create();

    // 创建地板
    const ground = Matter.Bodies.rectangle(400, 580, 800, 40, {
      isStatic: true,
      render: { fillStyle: "#6C6C6C" },
    });

    // 创建不同形状的物体
    const shapes = [
        Matter.Bodies.rectangle(100, 50, 60, 60, {
            restitution:0.8,
            render: { fillStyle: "#FF5733", strokeStyle: "#000000", lineWidth: 2 },
        }),
        Matter.Bodies.circle(300, 50, 30, {
            restitution:0.8,
            render: { fillStyle: "#33FF57", strokeStyle: "#000000", lineWidth: 2 },
        }),
        Matter.Bodies.rectangle(400, 50, 50, 80, {
            restitution:0.8,
            render: { fillStyle: "#3357FF", strokeStyle: "#000000", lineWidth: 2 },
        }),
        Matter.Bodies.rectangle(200, 50, 60, 60, {
            restitution:0.8,
            render: { fillStyle: "#FF5733", strokeStyle: "#000000", lineWidth: 2 },
          }),
        Matter.Bodies.circle(300, 50, 30, {
            restitution:0.8,
            render: { fillStyle: "#33FF57", strokeStyle: "#000000", lineWidth: 2 },
        }),
        Matter.Bodies.rectangle(400, 50, 50, 80, {
            restitution:0.8,
            render: { fillStyle: "#3357FF", strokeStyle: "#000000", lineWidth: 2 },
        }),
    ];

    // 添加所有物体到物理世界
    Matter.World.add(world, [ground, ...shapes]);
    console.log("Shapes added:", shapes);

    // 运行引擎和渲染器
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    // 清理函数
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
