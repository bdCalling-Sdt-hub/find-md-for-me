/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [ 
            {
                protocol: 'http',
                hostname: "192.168.10.201"
              },
         ]}
};

module.exports = nextConfig;
