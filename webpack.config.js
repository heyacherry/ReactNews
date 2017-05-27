var path = require('path');


module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js'
    },
    module: {
    loaders: [
      { test: /\.js?$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/,
        query:{
            presets:['react','es2015'],
            plugins:['react-html-attrs']
        //{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        }
      },
      { test: /\.css$/, 
        loader: 'style-loader!css-loader' // Run both loaders
      }   
    ]
      
  }
};