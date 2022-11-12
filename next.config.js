


/** @type {import('next').NextConfig} */
const fs = require('fs')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, 
  env: {
    jquery: fs.readFileSync('public/assets/js/plugins/jquery-3.4.1.min.js').toString(),
    popper: fs.readFileSync('public/assets/js/plugins/popper.min.js').toString(),
    bootstrap: fs.readFileSync('public/assets/js/plugins/bootstrap.min.js').toString(),
    imagesLoaded: fs.readFileSync('public/assets/js/plugins/imagesloaded.min.js').toString(),
    magnific: fs.readFileSync('public/assets/js/plugins/jquery.magnific-popup.min.js').toString(),
    countdown: fs.readFileSync('public/assets/js/plugins/jquery.countdown.min.js').toString(),
    waypoints: fs.readFileSync('public/assets/js/plugins/jquery.waypoints.min.js').toString(),
    counterup: fs.readFileSync('public/assets/js/plugins/jquery.counterup.min.js').toString(),
    jqueryZoom: fs.readFileSync('public/assets/js/plugins/jquery.zoom.min.js').toString(),
    jqueryInview: fs.readFileSync('public/assets/js/plugins/jquery.inview.min.js').toString(),
    jqueryEvent: fs.readFileSync('public/assets/js/plugins/jquery.event.move.js').toString(),
    wow: fs.readFileSync('public/assets/js/plugins/wow.min.js').toString(),
    isotope: fs.readFileSync('public/assets/js/plugins/isotope.pkgd.min.js').toString(),
    slick: fs.readFileSync('public/assets/js/plugins/slick.min.js').toString(),
    rangeSlider: fs.readFileSync('public/assets/js/plugins/ion.rangeSlider.min.js').toString(),
    audioCustome: fs.readFileSync('public/assets/js/plugins/audio_custome.js').toString(),
    main: fs.readFileSync('public/assets/js/main.js').toString(),
    host: "23.94.191.226",
    user: "adesoyeo_wordalive",
    password: "e?VD^D.y+iE$$pd)&u",
    database: "adesoyeo_wordalive"
  },
  images: {
    domains: [process.env.WORD_ALIVE_URL_PROD, '127.0.0.1', 'localhost', 'ipfs.io'],
  },
};
module.exports = nextConfig;


