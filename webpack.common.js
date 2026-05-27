import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/core/index.js",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|wav|mp3)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][hash][ext]",
        },
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
    ],
  },

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
