"use client";

import { cn } from "../../utils";
import Image from "next/image";

interface ServiceCardProps {
    title: string;
    subtitle?: string;
    iconPath: string; 
    variant?: "lime" | "dark" | "light" | "gradient";
    className?: string;
    onClick?: () => void;
}

export const ServiceCard = ({
    title,
    subtitle,
    iconPath,
    variant = "lime",
    className,
    onClick
}: ServiceCardProps) => {
    const baseStyles = "relative overflow-hidden rounded-3xl p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-[37.5rem] flex justify-between items-center border border-[#191A23] shadow-[0_5px_0_0_#191A23]";

    const variants = {
        "lime": "bg-primary-lime text-primary-dark",
        "dark": "bg-[#191A23] text-primary-light-lime",
        "light": "bg-background-primary text-text-primary border-2 border-border-light",
        "gradient": "bg-gradient-to-br from-primary-lime to-secondary-sage text-primary-dark"
    };

    const titleStyles = {
        "lime": "bg-white text-primary-dark",
        "dark": "bg-white text-primary-dark",
        "light": "bg-primary-lime text-primary-dark",
        "gradient": "bg-white text-primary-dark"
    };

    const buttonStyles = {
        "lime": "bg-primary-dark text-primary-light-lime hover:bg-primary-deep",
        "dark": "bg-primary-lime text-primary-dark hover:bg-primary-light-lime",
        "light": "bg-primary-dark text-primary-light-lime hover:bg-primary-deep",
        "gradient": "bg-primary-dark text-primary-light-lime hover:bg-primary-deep"
    };

    const iconStyles = {
        "lime": "bg-primary-lime text-primary-dark",
        "dark": "bg-primary-lime text-primary-dark",
        "light": "bg-primary-lime text-primary-dark",
        "gradient": "bg-primary-lime text-primary-dark"
    };

    return (
        <div
            className={cn(baseStyles, variants[variant], className)}
            onClick={onClick}
        >
            {/* Left Content Section */}
            <div className="flex flex-col gap-4">
                {/* Title Section */}
                <div className="flex flex-col">
                    <div className={cn(
                        "px-4 py-2 rounded-lg font-bold text-lg inline-block w-fit",
                        titleStyles[variant]
                    )}>
                        {title}
                    </div>
                    {subtitle && (
                        <div className={cn(
                            "px-4 py-2 rounded-lg font-bold text-lg inline-block w-fit",
                            titleStyles[variant]
                        )}>
                            {subtitle}
                        </div>
                    )}
                </div>

                {/* Learn More Button */}
                <div className="mt-2">
                    <button className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-200 font-medium",
                        buttonStyles[variant]
                    )}>
                        <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center",
                            iconStyles[variant]
                        )}>
                            <ArrowIcon />
                        </div>
                        <span>Learn more</span>
                    </button>
                </div>
            </div>

            {/* Right Icon Section */}
            <div className="flex items-center justify-center">
                <div className="w-32 h-32 flex items-center justify-center opacity-90">
                    <Image
                        src={iconPath}
                        alt={`${title} icon`}
                        width={128}
                        height={128}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

// Arrow Icon Component
const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="stroke-current">
        <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
);
