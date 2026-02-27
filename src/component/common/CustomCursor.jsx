"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const position = useRef({ x: 0, y: 0 });
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        window.addEventListener("mousemove", move);

        const animate = () => {
            position.current.x += (mouse.current.x - position.current.x) * 0.1;
            position.current.y += (mouse.current.y - position.current.y) * 0.1;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
            }

            requestAnimationFrame(animate);
        };

        animate();

        const interactiveElements = document.querySelectorAll(
            "a, button, input, textarea, select, [role='button']"
        );

        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", () => {
                if (cursorRef.current) cursorRef.current.style.opacity = "0";
            });

            el.addEventListener("mouseleave", () => {
                if (cursorRef.current) cursorRef.current.style.opacity = "1";
            });
        });

        return () => {
            window.removeEventListener("mousemove", move);
        };
    }, []);

    return (
        <div>
            <div
                ref={cursorRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "24px",
                    height: "24px",
                    border: "2px solid #cf282e",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    transform: "translate(-50%, -50%)",
                    zIndex: 9999,
                    transition: "opacity 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >

                <div
                    style={{
                        width: "6px",
                        height: "6px",
                        backgroundColor: "#cf282e",
                        borderRadius: "50%",
                    }}
                />
            </div>
        </div>
    );
}