export const TS = (color = "grey") => [
    "%c" + new Date().toISOString().replace(/T/, " ").replace(/\..+/, ""),
    "color: " + color + ";",
];
