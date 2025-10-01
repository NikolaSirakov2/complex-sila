"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface AnimatedGradientBackgroundProps {
    className?: string;
    children?: React.ReactNode;
    intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
    x: number;
    y: number;
    width: number;
    length: number;
    angle: number;
    speed: number;
    opacity: number;
    hue: number;
    pulse: number;
    pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
    const angle = -35 + Math.random() * 10;
    return {
        x: Math.random() * width * 1.5 - width * 0.25,
        y: Math.random() * height * 1.5 - height * 0.25,
        width: 30 + Math.random() * 60,
        length: height * 2.5,
        angle: angle,
        speed: 0.6 + Math.random() * 1.2,
        opacity: 0.12 + Math.random() * 0.16,
        hue: 190 + Math.random() * 70,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
    };
}

export function BeamsBackground({
    className,
    intensity = "strong",
}: AnimatedGradientBackgroundProps) {
    const { t } = useLanguage();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const animationFrameRef = useRef<number>(0);
    const MINIMUM_BEAMS = 20;

    useEffect(() => {
        const opacityMap = {
            subtle: 0.7,
            medium: 0.85,
            strong: 1,
        };
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const updateCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);

            const totalBeams = MINIMUM_BEAMS * 1.5;
            beamsRef.current = Array.from({ length: totalBeams }, () =>
                createBeam(canvas.width, canvas.height)
            );
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        function resetBeam(beam: Beam, index: number, totalBeams: number) {
            if (!canvas) return beam;
            
            const column = index % 3;
            const spacing = canvas.width / 3;

            beam.y = canvas.height + 100;
            beam.x =
                column * spacing +
                spacing / 2 +
                (Math.random() - 0.5) * spacing * 0.5;
            beam.width = 100 + Math.random() * 100;
            beam.speed = 0.5 + Math.random() * 0.4;
            beam.hue = 190 + (index * 70) / totalBeams;
            beam.opacity = 0.2 + Math.random() * 0.1;
            return beam;
        }

        function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            // Calculate pulsing opacity
            const pulsingOpacity =
                beam.opacity *
                (0.8 + Math.sin(beam.pulse) * 0.2) *
                opacityMap[intensity];

            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

            // Enhanced gradient with multiple color stops
            gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`);
            gradient.addColorStop(
                0.1,
                `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`
            );
            gradient.addColorStop(
                0.4,
                `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`
            );
            gradient.addColorStop(
                0.6,
                `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`
            );
            gradient.addColorStop(
                0.9,
                `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`
            );
            gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        }

        function animate() {
            if (!canvas || !ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.filter = "blur(35px)";

            const totalBeams = beamsRef.current.length;
            beamsRef.current.forEach((beam, index) => {
                beam.y -= beam.speed;
                beam.pulse += beam.pulseSpeed;

                // Reset beam when it goes off screen
                if (beam.y + beam.length < -100) {
                    resetBeam(beam, index, totalBeams);
                }

                drawBeam(ctx, beam);
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [intensity]);

    return (
        <div
            className={cn(
                "relative min-h-screen w-full overflow-hidden bg-neutral-950",
                className
            )}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0"
                style={{ filter: "blur(15px)" }}
            />

            <motion.div
                className="absolute inset-0 bg-neutral-950/5"
                animate={{
                    opacity: [0.05, 0.15, 0.05],
                }}
                transition={{
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                }}
                style={{
                    backdropFilter: "blur(50px)",
                }}
            />

            <div className="relative z-10 flex min-h-screen w-full items-center justify-center py-8 sm:py-16 lg:py-20">
                <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 px-3 sm:px-4 text-center max-w-7xl mx-auto">
                    <motion.h1
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {t('beams.title')}
                    </motion.h1>
                    
                    <motion.div
                        className="space-y-4 sm:space-y-6 text-white/90"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed">
                            {t('beams.intro1')}
                        </p>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
                            {t('beams.intro2')}
                        </p>
                    </motion.div>

                    <motion.div
                        className="mt-8 sm:mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                            {t('beams.cta.title')}
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8">
                            {t('beams.cta.subtitle')}
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 w-full max-w-6xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-lg border border-white/20">
                            <div className="flex justify-center mb-3 sm:mb-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                                    <span className="text-lg sm:text-xl lg:text-2xl">👤</span>
                                </div>
                            </div>
                            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3 text-center">
                                {t('beams.step1.title')}
                            </h3>
                            <p className="text-white/80 text-center text-xs sm:text-sm md:text-base leading-relaxed">
                                {t('beams.step1.desc')}
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-lg border border-white/20">
                            <div className="flex justify-center mb-3 sm:mb-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                                    <span className="text-lg sm:text-xl lg:text-2xl">🛒</span>
                                </div>
                            </div>
                            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3 text-center">
                                {t('beams.step2.title')}
                            </h3>
                            <p className="text-white/80 text-center text-xs sm:text-sm md:text-base leading-relaxed">
                                {t('beams.step2.desc')}
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-lg border border-white/20 sm:col-span-2 lg:col-span-1">
                            <div className="flex justify-center mb-3 sm:mb-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                                    <span className="text-lg sm:text-xl lg:text-2xl">💳</span>
                                </div>
                            </div>
                            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3 text-center">
                                {t('beams.step3.title')}
                            </h3>
                            <p className="text-white/80 text-center text-xs sm:text-sm md:text-base leading-relaxed">
                                {t('beams.step3.desc')}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 p-4 sm:p-6 rounded-lg mt-8 sm:mt-12 max-w-4xl w-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <div>
                            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-yellow-200 mb-2">
                                {t('beams.warning.title')}
                            </h3>
                            <p className="text-yellow-100 text-xs sm:text-sm md:text-base leading-relaxed">
                                {t('beams.warning.text')}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="text-center mt-8 sm:mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                    >
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                            {t('beams.guarantee.title')}
                        </h3>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-white/80">
                            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                                {t('beams.guarantee.text')}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-lg border border-white/10 mt-8 sm:mt-12 max-w-4xl w-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        <div className="text-center">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">
                                {t('beams.company.title')}
                            </h3>
                            <p className="text-white/90 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                                {t('beams.company.desc1')}
                            </p>
                            <p className="text-white/90 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                                {t('beams.company.desc2')}
                            </p>
                            <p className="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                                {t('beams.company.desc3')}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
