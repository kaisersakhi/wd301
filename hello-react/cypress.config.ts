import { defineConfig } from "cypress";
import cypressJsonResults from "cypress-json-results";

export default defineConfig({
    component: {
        setupNodeEvents(on, config) {
            cypressJsonResults({
                on,
                filename: "results.json",
            });
        },
        devServer: {
            framework: "react",
            bundler: "vite",
        },
    },
});
