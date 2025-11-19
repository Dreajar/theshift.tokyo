'use client';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
    const [scrolled, setScrolled] = useState(false);
    const SCROLL_THERESHOLD = 160;
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > SCROLL_THERESHOLD;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrolled])

    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])


    return (
        <div className="w-full flex flex-col no-scrollbar">
            <nav className="fixed">
                <div className="w-screen flex flex-row justify-between">
                    <div className="ml-20 mt-16 text-gray-900 text-xl text-bold">THE SHIFT</div>
                    {scrolled ? (
                        <button className="m-20">MENU</button>
                    ) : (
                        <ul className="mr-24 mt-16 -space-y-1">
                            <li className="text-black text-bold text-xl underline">HOME</li>
                            <li className="text-black text-bold text-xl no-underline hover:underline">PROJECT</li>
                            <li className="text-black text-bold text-xl no-underline hover:underline">RESEARCH</li>
                            <li className="text-black text-bold text-xl no-underline hover:underline">ABOUT</li>
                        </ul>
                    )}
                </div>
            </nav>
            <div className="bg-zinc-100 h-screen flex flex-col justify-center items-center text-black">
                <button className="absolute translate-x-144 -translate-y-96 border-black border-[1px] h-7 w-12 rounded-full">JA</button>
                <div className="-space-y-[92px] -translate-y-24">
                    <h1 className="mt-40 text-[152px] w-200 -translate-x-12 font-[Cormorant_Upright]">EXPLORING</h1>
                    <h1 className="text-[152px] w-200 -translate-x-[320px]">THE SHIFT</h1>
                    <h1 className="text-[152px] w-200 font-[Cormorant_Upright]">OF TODAY</h1>
                </div>
                {/* FIX: Change HTML/CSS editor to not strip these whitespaces lmao */}
                <pre className="absolute text-sm translate-x-104 -translate-y-12 w-80 leading-4">
                    ________THE SHIFT CREATES FUTURE-<br />
                    INSPIRED PROJECTS FOR PEOPLE AND<br />
                    BUSINESSES DESIRING A SHIFT. BASED IN<br />
                    TOKYO, WORKING WORLDWIDE.</pre>
                <div className="absolute bottom-20 left-20">
                    <DeviceClock />
                </div>
                <div className="absolute bottom-0 right-20 -mb-40 h-112 w-84 rounded-full overflow-hidden">
                    <video
                        className="block h-full w-full object-cover"
                        src="https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2021/09/07141146/kolor_h264.mp4"
                        muted
                        playsInline
                        loop
                        preload="metadata"
                        autoPlay // Consider adding autoPlay for videos that must start immediately (often required with 'muted')
                    />
                </div>
            </div>

            <div className="bg-gray-950 h-screen w-full flex flex-col justify-center items-center">
                <h1 className="flex justify-center m-4 text-lg text-neutral-200">WHAT WE DO</h1>
                <hr className="h-[1px] w-11/12 bg-gray-200 m-16 opacity-20"></hr>
                <h2 className="flex w-5/6 text-center text-5xl font-light mb-20 text-neutral-200">The Shift is a creative collective based in Tokyo. We provide new perspectives and solutions.</h2>
                <a href="/about_us" className="text-lg text-gray-800 font-light justify-center h-40 w-40 rounded-full bg-zinc-100 underline hover:no-underline flex justify-center items-center">ABOUT US</a>
            </div>

            <div className="bg-zinc-100 h-[275vh] flex flex-col justify-start items-center">
                <h1 className="w-60 mt-16 text-black text-bold text-xl text-center text-neutral-900">FEATURED PROJECT AND RESEARCH</h1>
                <a href="/projects" className="mt-60 mb-12 text-gray-500 underline hover:no-underline">VIEW ALL PROJECT</a>
                <hr className="h-[2px] w-11/12 bg-neutral-900 mt-12"></hr>
                <PortfolioList />
            </div>

            <div className="bg-neutral-900 flex flex-col items-center">
                <h1 className="font-medium text-xl text-neutral-200 mt-16 mb-60 w-44 text-center">OUR TERRITORY AND FIELDS</h1>
                <a href="/about_us" className="underline hover:no-underline text-neutral-200 text-lg">ABOUT US</a>
                <hr className="h-[1px] w-11/12 bg-neutral-500 my-20 opacity-20"></hr>
                <InfiniteMarquee bannerString={topString} direction="left" />
                <InfiniteMarquee bannerString={bottomString} direction="right" />
                <div className="h-80 w-11/12 border-b-[1px] border-neutral-700 border-opacity-20"></div>

            </div>

            {/* The nav bar should end here */}
            <div className="bg-neutral-900 h-[100vh] w-full grid grid-rows-7 items-center">
                <div className="row-span-2 flex justify-between mx-20 items-center h-full">
                    <button className="text-center text-neutral-200 h-7 w-14 rounded-full border-neutral-200 border-[1px]">JA</button>
                    <p className="w-48 text-center">BASED IN TOKYO WORKING WORLDWIDE</p>
                    <div className="flex items-center" onClick={() => {
                        window.scrollTo({
                            top: 0, behavior: 'smooth'
                        });
                    }}>
                        <span className="text-xl font-light">
                            BACK TO TOP
                        </span>
                        <button className="rounded-full text-neutral-500 bg-zinc-100 h-20 w-20 ml-4 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                {/* The SVG path will use the default text color of the button (which should be dark 
                if the button BG is light) */}
                                <path fill="currentColor" d="M11 20V7.825l-5.6 5.6L4 12l8-8l8 8l-1.4 1.425l-5.6-5.6V20z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="row-span-4 justify-center text-9xl text-neutral-200 flex text-center h-full w-full items-center relative">
                    <div className="absolute top-0 left-0 right-0 h-[1px] flex justify-center">
                        <hr className="w-11/12 bg-neutral-500 opacity-20 h-full" />
                    </div>

                    <span className="flex space-x-10 mx-20">
                        <span>GET</span>
                        <span className="font-[Cormorant_Upright] text-[144px]">IN</span>
                        <span>TOUCH</span>
                    </span>

                    <div className="absolute bottom-0 left-0 right-0 h-[1px] flex justify-center">
                        <hr className="w-11/12 bg-neutral-500 opacity-20 h-full" />
                    </div>
                </div>
                <div className="h-full flex justify-between mx-20 items-center">
                    <p>@2021</p>
                    <a href="www.instagram.com" className="underline hover:no-underline">INSTAGRAM</a>
                    <button className="text-center text-neutral-200 h-7 w-28 rounded-full border-neutral-200 border-[1px]">DARK MODE</button>
                </div>
            </div>
        </div>

    );
}

function getCurrentDeviceTime() {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hourCycle: 'h23',
    });

    return formatter.format(now);
}

function DeviceClock() {
    // NOTE: we set it to "" first since when Next.js builds the HTML on the server, it calls getCurrentdeviceTmie() once and retnders the inital time (e.g., 11:00:54). This time embedded in the HTML sent to the browser.
    // When the browser receives the HTML and React attempts to "hydrate" (attach event listeners and state) to the DOM, it runs the DeviceClock component again; since 1s has passed, React compares the 2 texts and throws the hydration mismatch error when they don't match.

    const [currentTime, setCurrentTime] = useState("");
    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(getCurrentDeviceTime());
        }, 1000);
        return () => {
            clearInterval(timerId);
        }
    }, []);

    return (
        <p className="font-light text-gray-600">东京 {currentTime}</p>
    );
}

type ImageDetails = {
    url: string;
    alt: string;
}

type ImageRevealProps = {
    hoveredImage: ImageDetails | null;
    isVisible: boolean;
}

const ImageRevealArea: React.FC<ImageRevealProps> = ({ hoveredImage, isVisible }) => {
    const imageContainerRef = useRef<HTMLDivElement>(null);

    const incomingImageLayerRef = useRef<HTMLDivElement>(null); // Ref for the sliding layer

    // 💡 Layer 1: The image currently displayed as the 'base'
    const [currentImage, setCurrentImage] = useState<ImageDetails | null>(hoveredImage);
    // 💡 Layer 2: The image that is actively sliding up to cover the base
    const [incomingImage, setIncomingImage] = useState<ImageDetails | null>(null);






    const imageRef = useRef<HTMLImageElement>(null);
    const [displayedImageUrl, setDisplayedImageUrl] = useState(hoveredImage?.url || null);
    const imageTimeline = useRef<gsap.core.Timeline | null>(null);

    // 1. Mouse Tracking Logic (remains the same)
    useGSAP(() => {
        const container = imageContainerRef.current;
        if (!container) return;

        gsap.set(container, { scale: 0.8, autoAlpha: 0 });

        const HALF_SIZE = 150;
        const handleMouseMove = (e: MouseEvent) => {
            gsap.to(container, {
                x: e.clientX - HALF_SIZE,
                y: e.clientY - HALF_SIZE,
                duration: 0.8,
                ease: 'power3.out',
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, {});

    // 2. Image Visibility (Fade In/Out of the square container)
    useEffect(() => {
        const container = imageContainerRef.current;
        if (!container) return;

        if (isVisible) {
            gsap.to(container, {
                scale: 1,
                autoAlpha: 1,
                duration: 0.4,
                ease: 'power2.out',
            });
        } else {
            gsap.to(container, {
                scale: 0.8,
                autoAlpha: 0,
                duration: 0.4,
                ease: 'power2.in',
            })
        }
    }, [isVisible]);


    // 3. 💡 NEW: Bottom-Up Image Transition Logic
    useEffect(() => {
        if (!hoveredImage) {
            // If no image is hovered, ensure incoming image is cleared and timeline killed
            if (imageTimeline.current) {
                imageTimeline.current.kill();
                imageTimeline.current = null;
            }
            setIncomingImage(null);
            return;
        }

        // If the hovered image is already the current base image, no transition needed
        if (currentImage?.url === hoveredImage.url) {
            // Ensure incoming is also null or matches current if it's the same image
            setIncomingImage(null);
            return;
        }

        const incomingLayer = incomingImageLayerRef.current;
        if (!incomingLayer) return;

        // 1. Set the new image data for the incoming (sliding) layer
        // This causes React to render the new image into Layer 2, off-screen.
        setIncomingImage(hoveredImage);

        // Kill any existing timeline to prevent conflicts
        if (imageTimeline.current) {
            imageTimeline.current.kill();
        }

        // Create a new timeline for the animation
        imageTimeline.current = gsap.timeline({ paused: true });

        imageTimeline.current
            // 2. Set the incoming layer to start from the bottom (off-screen)
            .set(incomingLayer, { y: '100%', autoAlpha: 1 }) // autoAlpha ensures it's visible during animation
            // 3. Animate the incoming layer up to cover the current image
            .to(incomingLayer, {
                y: '0%',
                duration: 0.5,
                ease: 'power2.out',
                onComplete: () => {
                    // 4. ON COMPLETE: Update the base image (Layer 1) to the new image
                    setCurrentImage(hoveredImage);
                    // 5. Reset the incoming layer (Layer 2) for the next transition
                    gsap.set(incomingLayer, { y: '100%', autoAlpha: 0 }); // Hide it off-screen
                    setIncomingImage(null); // Clear the data from Layer 2
                }
            });

        imageTimeline.current.play();

    }, [hoveredImage, currentImage]); // Depend on hoveredImage and currentImage for state changes

    return (
        <div
            ref={imageContainerRef}
            className="fixed top-0 left-0 z-50 pointer-events-none transform-gpu"
        >
            <div className="w-[300px] h-[300px] rounded-lg shadow-2xl overflow-hidden relative">

                {/* 💡 LAYER 1: The Stationary (Current/Old) Image */}
                {/* This image is always visible and provides the background during transition */}
                {currentImage && (
                    <img
                        src={currentImage.url}
                        alt={currentImage.alt}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                )}

                {/* 💡 LAYER 2: The Sliding (Incoming/New) Image */}
                {/* This div contains the new image and slides up to cover Layer 1 */}
                {/* It starts invisible and off-screen, then animates in. */}
                {/* Use a div with a ref for GSAP, and render the image inside */}
                <div
                    ref={incomingImageLayerRef}
                    className="absolute inset-0 w-full h-full transform-gpu" // Added transform-gpu for performance
                    style={{ y: '100%', opacity: 0 }} // Initial state: off-screen and invisible
                >
                    {incomingImage && (
                        <img
                            src={incomingImage.url}
                            alt={incomingImage.alt}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

type ListItemProps = {
    num: string;
    title: string;
    height: string;
    width: string;
    hrBottom: number;
    image: ImageDetails;
};

const listItems: ListItemProps[] = [
    { num: '01', title: 'FOCUS ON STRETCH PLEATS', height: 'h-72', width: 'w-5/12', hrBottom: 0, image: { url: '/portfolio_images/focus on stretch pleats.webp', alt: 'Stretch Pleats' } },
    { num: '02', title: 'LEVEL OF DISTANCE', height: 'h-72', width: 'w-3/8', hrBottom: 0, image: { url: '/portfolio_images/level of distance.webp', alt: 'Level of Distance' } },
    { num: '03', title: 'IPSA AQUA PLAY ART', height: 'h-72', width: 'w-1/3', hrBottom: 0, image: { url: '/portfolio_images/ipsa aqua play art.webp', alt: 'Ipsa Aqua Play Art' } },
    { num: '04', title: 'ATELIER WEN', height: 'h-72', width: 'w-1/2', hrBottom: 0, image: { url: '/portfolio_images/atelier wen.webp', alt: 'Atelier Wen' } },
    { num: '05', title: '3D:MIX', height: 'h-72', width: 'w-1/2', hrBottom: 0, image: { url: '/portfolio_images/3d mix.webp', alt: '3D: Mix' } }
];

type MouseHandlers = {
    onMouseEnter: (image: ImageDetails) => void;
}

const ListItem: React.FC<ListItemProps & MouseHandlers> = ({
    num, title, height, width, hrBottom, image, onMouseEnter
}) => {
    // 1. Ref for the entire li element (used for useGSAP scope)
    const listItemRef = useRef<HTMLLIElement>(null);

    // 2. Refs for the elements to be animated
    const numRef = useRef<HTMLSpanElement>(null);
    const titleRef = useRef<HTMLParagraphElement>(null);

    // 3. Ref to store the GSAP timeline instance
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    // Use useGSAP to create and manage the animation timeline
    useGSAP(() => {
        // Create the timeline, paused by default
        const tl = gsap.timeline({
            paused: true,
            defaults: { duration: 0.6, ease: 'power2.inOut' },
        });

        // Animate both the number span and the title paragraph to the right
        // We use the refs directly for clean targeting
        tl.to(numRef.current, { x: -160 }, 0)
            .to(titleRef.current, { x: -160 }, 0);

        // Store the timeline instance for later play/reverse control
        tlRef.current = tl;

    }, { scope: listItemRef, dependencies: [] }); // Empty dependencies ensures it runs only once

    // Handler to play the animation forward on mouse enter/focus
    const handleItemMouseEnter = () => {
        tlRef.current?.play();
        onMouseEnter(image); // 🎯 Pass the image data to the parent
    };


    // Handler to reverse the animation on mouse leave/blur
    const handleItemMouseLeave = () => {
        tlRef.current?.reverse();
    };


    return (
        <li
            ref={listItemRef} // Attach the scope ref here
            tabIndex={0}
            className={`${height} w-full flex relative mt-20 cursor-pointer`}
            onMouseEnter={handleItemMouseEnter}
            onMouseLeave={handleItemMouseLeave}
            onFocus={handleItemMouseEnter} // Handle keyboard focus
            onBlur={handleItemMouseLeave}
        >
            {/* We add this div so onMouseEnter gets the full height so it doesn't disappear halfway/early */}
            <div className="flex items-start h-full w-full pointer-events-none">
                <span
                    ref={numRef}
                    className="text-neutral-500 text-sm ml-64 mr-10 relative inline-block transform-gpu"
                >
                    ( {num} )
                </span>

                <p
                    ref={titleRef}
                    className={`text-8xl text-left text-neutral-900 ${width} relative inline-block transform-gpu font-[Cormorant_Upright]`}
                >
                    {title}
                </p>
            </div>

            {/* The HR separator */}
            <hr className={`h-[2px] w-11/12 bg-neutral-500 opacity-20 absolute bottom-${hrBottom} left-1/2 -translate-x-1/2`}></hr>
        </li>
    );
};

// NOTE: Box around cursor: overflow-hidden
const PortfolioList = () => {
    const [currentImage, setCurrentImage] = useState<ImageDetails | null>(null);
    const [isImageVisible, setIsImageVisible] = useState(false);
    // 💡 Add a Ref to hold the timeout ID for the mouseLeave event

    const handleMouseEnter = (image: ImageDetails) => {
        // Immediate entry logic:
        setCurrentImage(image);
        setIsImageVisible(true);
    };

    // 💡 This function now needs to be called when the GSAP animation finishes reversing.
    const handleMouseLeave = () => {
        setIsImageVisible(false);
    };

    return (
        <div className="min-h-screen w-full bg-zinc-100 text-neutral-900 font-inter" onMouseLeave={handleMouseLeave}>
            <ImageRevealArea
                hoveredImage={currentImage}
                isVisible={isImageVisible}
            />
            <div className="w-full">
                <ol className="items-start w-full">
                    {listItems.map((item, index) => (
                        <ListItem
                            key={index}
                            num={item.num}
                            title={item.title}
                            height={item.height}
                            width={item.width}
                            hrBottom={item.hrBottom}
                            image={item.image} // Pass image data
                            onMouseEnter={handleMouseEnter} // Pass handlers down
                        />
                    ))}
                </ol>
            </div>
        </div>
    );
};

const topString = "SHIFT    PRODUCE    DIRECTION    DESIGN    TECHNOLOGY    CONSULTING    BRANDING    STRATEGY    SHIFT    PRODUCE    DIRECTION    DESIGN    TECHNOLOGY    CONSULTING    BRANDING    STRATEGY    ";
const bottomString = "FASHION    ENTERTAINMENT    PRODUCT    EVENT    SPORTS    LIVING SPACE    EDUCATION    FOOD    MUSIC    FASHION    ENTERTAINMENT    PRODUCT    EVENT    SPORTS    LIVING SPACE    EDUCATION    FOOD    MUSIC    ";

type InfiniteMarqueeProps = {
    bannerString: string;
    direction: "left" | "right"; // 1 = to the right
}

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({ bannerString, direction }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const text = textRef.current;
        if (!text) return;
        const singleBannerWidth = text.scrollWidth / 2;
        const targetX = direction === 'left' ? -singleBannerWidth : singleBannerWidth;
        let fromX: number;
        let toX: number;

        if (direction === "left") {
            fromX = 0;
            toX = -singleBannerWidth;
        } else {
            fromX = -singleBannerWidth;
            toX = 0;
        }

        gsap.fromTo(text, { x: fromX },
            {
                x: toX,
                duration: 150,
                ease: 'none',
                repeat: -1,
                overwrite: 'auto'
            }
        );

    }, { scope: containerRef, dependencies: [direction] });

    return (
        <div
            ref={containerRef}
            className="w-full overflow-hidden whitespace-nowrap bg-neutral-900 text-white -my-2"
        >
            {/* The inline-block is crucial for the scrollWidth calculation to work */}
            <div ref={textRef} className="inline-block text-9xl font-thin tracking-wide whitespace-pre font-[Cormorant_Upright]">
                {bannerString}
                {bannerString}
            </div>
        </div>
    );
}
