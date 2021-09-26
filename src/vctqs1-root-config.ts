import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
    name: "@vctqs1/react-navbar",
    app: () => System.import("@vctqs1/react-navbar"),
    activeWhen: ["/"],
});
registerApplication({
    name: "@vctqs1/react-home",
    app: () => System.import("@vctqs1/react-home"),
    activeWhen: ["/"],
});

start({
    urlRerouteOnly: true,
});
