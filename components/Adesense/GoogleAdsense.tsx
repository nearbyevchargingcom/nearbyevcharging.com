import Script from "next/script";

type Props = {

};

const GoogleAdsense: React.FC<Props> = () => {
    if (process.env.NODE_ENV !== "production") {
        return null;
    }
    return (
        <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8650913276154386"
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    );
};

export default GoogleAdsense;