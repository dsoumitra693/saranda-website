import { cn } from "../../utils";
import Image from "next/image";
import { Button } from "./button";

interface CardProps {
    title: string;
    subtitle?: string;
    image?: string;
    category?: string;
    date?: string;
    buttonText?: string;
    className?: string;
    onClick?: () => void;
}

export default function Card({
    title,
    subtitle,
    image,
    category,
    date,
    buttonText,
    className,
    onClick
}: CardProps) {
    return (
        <div 
            className={cn(
                "w-96 h-[28rem] rounded-2xl p-6 flex flex-col overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] bg-secondary-forest text-white shadow-lg",
                className
            )} 
            onClick={onClick}
        >
            {/* Image Section */}
            {image && (
                <div className="w-full h-48 bg-black flex items-center justify-center p-8">
                    <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={150}
                        className="object-contain max-w-full max-h-full"
                    />
                </div>
            )}
            
            {/* Content Section */}
            <div className="flex-1 flex flex-col justify-between mt-3">
                <div>
                    {/* Category */}
                    <div className="text-primary-lime text-sm font-semibold tracking-wider mb-2 uppercase">
                        {category}
                    </div>
                   
                    {/* Title */}
                    <h2 className="text-white text-lg font-bold leading-tight">
                        {title}
                    </h2>
                    
                    {/* Subtitle */}
                    {subtitle && (
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            {subtitle}
                        </p>
                    )}
                </div>
                
                {/* Bottom Section with Button and Date */}
                <div className="flex items-center justify-between">
                    <Button variant="secondary" size="sm" className="border border-secondary-cream/15 bg-secondary-cream/10 hover:bg-secondary-cream/30 hover:border-secondary-cream uppercase">
                        {buttonText}
                    </Button>
                    <span className="text-gray-400 text-sm">
                        {date}
                    </span>
                </div>
            </div>
        </div>
    );
}
