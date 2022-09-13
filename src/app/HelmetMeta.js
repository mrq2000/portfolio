import React from "react";
import Helmet from "react-helmet";
import Resume from "../settings/resume.json";

export const HelmetMeta = () => {
    return (
        <Helmet>
            <title>{Resume.basics.name} | Fullstack developer</title>
            <meta name="author" content={Resume.basics.name} />
        </Helmet>
    );
};
