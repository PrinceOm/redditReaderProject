var config = {
   entry: './src/app.js',

   output: {
      path:'./src/',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 8080,
      contentBase: "./src",
      hot: true

   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
