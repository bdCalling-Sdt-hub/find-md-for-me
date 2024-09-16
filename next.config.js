/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [ 
            {
                protocol: 'https',
                hostname: "159.65.14.5"
              },
         ]}
};

module.exports = nextConfig;
