import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config.babel';
const HTTP_PORT = 3000;

const app = express();

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  stats: { colors: true },
}));
app.use(express.static('dist'));

app.listen(HTTP_PORT, () => {
   console.log(`listening on ${HTTP_PORT}`); // eslint-disable-line
});
