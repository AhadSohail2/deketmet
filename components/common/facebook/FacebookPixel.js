// components/FacebookPixel.js
import React from "react";

const FacebookPixel = () => {
    React.useEffect(() => {
        import("react-facebook-pixel")
            .then((x) => x.default)
            .then((ReactPixel) => {
                ReactPixel.init(process.env.NEXT_PUBLIC_FACEBOOK);
                ReactPixel.pageView();

                Router.events.on("routeChangeComplete", () => {
                    ReactPixel.pageView();
                });
            });
    });


    return null;
};

export default FacebookPixel;
