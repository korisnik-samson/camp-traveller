import React from 'react';
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Camp from "@/components/Camp";
import Guide from "@/components/Guide";
import GetApp from "@/components/GetApp";

export default function Home(): React.JSX.Element {
    return (
        <React.Fragment>
            <Hero />
            <Camp />
            <Guide />
            <Features />
            <GetApp />
        </React.Fragment>
    )
}
