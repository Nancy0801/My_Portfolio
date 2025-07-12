"use client";

import { cn } from "../../lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    // split text inside of words into array of characters
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    useEffect(() => {
        if (isInView) {
            animate(
                "span",
                {
                    display: "inline-block",
                    opacity: 1,
                    width: "fit-content",
                },
                {
                    duration: 0.3,
                    delay: stagger(0.1),
                    ease: "easeInOut",
                }
            );
        }
    }, [isInView]);

    const renderWords = () => {
        return (
            <motion.div ref={scope} className="inline m-0">
                {wordsArray.map((word, idx) => (
                    <span key={`word-${idx}`} style={{ margin: 0, padding: 0 }}>
                        {word.text.map((char, index) => (
                            <span
                                key={`char-${index}`}
                                className={cn("dark:text-white text-black", word.className)}
                            >
                                {char}
                            </span>
                        ))}
                        &nbsp;
                    </span>
                ))}
            </motion.div>
        );
    };
    return (
        <div
            className={cn(
                "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
                className
            )}
        >
            {renderWords()}
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};

export const TypewriterEffectSmooth = ({
    words,
    className,
    cursorClassName,
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    // split text inside of words into array of characters
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });
    const renderWords = () => {
        return (
            <span>
                {wordsArray.map((word, idx) => (
                    // <span key={`word-${idx}`}>
                    //     {word.text.map((char, index) => (
                    //         <span
                    //             key={`char-${index}`}
                    //             className={cn(`dark:text-white text-black`, word.className)}
                    //         >
                    //             {char}
                    //         </span>
                    //     ))}
                    //     &nbsp;
                    // </span>
                    <span key={`word-${idx}`} className="m-0">
                        {word.text.map((char, index) => (
                            <span
                                key={`char-${index}`}
                                className={cn("dark:text-white text-black m-0 p-0", word.className)}
                            >
                                {char}
                            </span>
                        ))}
                        &nbsp;
                    </span>
                ))}
            </span>
        );
    };

    return (
        <div className={cn("flex my-6", className)}>
            <motion.div
                className="overflow-hidden pb-2"
                initial={{
                    width: "0%",
                }}
                whileInView={{
                    width: "fit-content",
                }}
                transition={{
                    duration: 2,
                    ease: "linear",
                    delay: 1,
                }}
            >
                <span
                    className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold font-sans"
                    style={{ whiteSpace: "nowrap" }}
                >
                    {renderWords()}
                </span>
            </motion.div>
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,

                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};
