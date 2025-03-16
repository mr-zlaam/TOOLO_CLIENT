"use client";
import Link from "next/link";
import { useMountAnimation } from "@/hooks/useMountAnimation";
import { scrollToElement } from "@/lib/utils";
import { APP_NAME, HERO_CTA_PRIMARY, HERO_CTA_SECONDARY, HERO_SUBTITLE, HERO_TITLE } from "@/contants/variables.constant";

export const Hero = () => {
  const titleAnimation = useMountAnimation({ delay: 100 });
  const subtitleAnimation = useMountAnimation({ delay: 300 });
  const ctaAnimation = useMountAnimation({ delay: 500 });
  const imageAnimation = useMountAnimation({ delay: 300, duration: 800 });

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="flex flex-col w-full lg:w-1/2 space-y-8">
            <div style={titleAnimation.animationStyles}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="text-blue-600">{APP_NAME}:</span> {HERO_TITLE}
              </h1>
            </div>

            <div style={subtitleAnimation.animationStyles}>
              <p className="text-lg text-gray-600 md:text-xl">{HERO_SUBTITLE}</p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4"
              style={ctaAnimation.animationStyles}>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                {HERO_CTA_PRIMARY}
              </Link>
              <button
                onClick={() => scrollToElement("tools-showcase")}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-600 bg-white rounded-md border border-blue-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                {HERO_CTA_SECONDARY}
              </button>
            </div>

            <div
              className="pt-4 flex items-center"
              style={subtitleAnimation.animationStyles}>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                    <span className="text-xs font-medium text-gray-600">{String.fromCharCode(64 + i)}</span>
                  </div>
                ))}
              </div>
              <div className="ml-3 text-sm text-gray-500">
                Join <span className="font-medium text-gray-900">5,000+</span> users already using our tools
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className="w-full lg:w-1/2"
            style={imageAnimation.animationStyles}>
            <div className="relative h-72 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-blue-100 bg-opacity-50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 opacity-10"></div>
              </div>

              {/* Hero image fallback */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-6 w-full max-w-md">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-white rounded-lg shadow-lg p-4 aspect-square flex flex-col items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-blue-100 mb-3 flex items-center justify-center">
                        <div className="w-6 h-6 bg-blue-500 rounded-md"></div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
