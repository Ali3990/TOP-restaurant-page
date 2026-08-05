import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url); // recreate __filename (not available in ES modules)
const __dirname = path.dirname(__filename);        // recreate __dirname from it

export default {
  mode: 'development',       // skips minification, keeps builds fast/readable for local work
  entry: './src/index.js',   // starting file webpack follows imports from, to build the bundle

  output: {
    filename: 'main.[contenthash].js',   // [contenthash] busts the browser cache when content changes
    path: path.resolve(__dirname, 'dist'), // output dir must be an absolute path
    clean: true,                          // wipe dist before each build so old bundles don't pile up
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: './src/template.html', // generates dist/index.html, auto-injecting <script> for the bundle above
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // css-loader resolves @import/url(), style-loader injects <style> tag (right-to-left order)
      },
      {
        test: /\.html$/i,
        use: ["html-loader"], // lets you import .html files as strings/modules
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource", // emits imported images as separate files, import resolves to their URL
      },
    ]
  },

  devServer: {
    static: './dist', // static assets served alongside the in-memory bundle
    hot: true,         // Hot Module Replacement — updates modules in-browser on save, no full reload
  },
};
