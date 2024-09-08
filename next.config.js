/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [ 
            {
                protocol: 'http',
                hostname: "159.65.14.5"
              },
         ]}
};

module.exports = nextConfig;
