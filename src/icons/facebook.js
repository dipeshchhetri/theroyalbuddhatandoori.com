import React from "react"
import PropTypes from "prop-types"

import Icon from './icon';

const Facebook = ({ children }) => (
  <Icon icon={(
    <img alt="Facebook" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAACYklEQVQ4jb2TP2hTURTGv3vzqhRDaYutbWyNtYipxU0FFxcj6ipdHERwLNKhYKXg8JaiFJx0ENShgouICI4ODlEc6p8KUsQqQoiNTW3SkNqY93K/49C+5OUlsQjimQ68j9875/7uBf5xqT9+tUUP7Vs7aAz3lAEoY5JfUh3zsBX/Cjj8MN/JUmiC5AUR6SEFpEBEQEraUGa0WNPJ0fbclsChB4XjIB6R0rUJ8MP8fUaIkfRYd6IpcBP2jJRtW8C83qFhfHk8kqgDbqypPzaarHO7wuUjrTjcY2FbCHjyqYSplwUvkyk7biw/Gc0BgOUB6YSukGy45s0TYRyLtFQ2iYS1L8NuhPQEgMnqhLboAwOFbw0EoKtVYfZ8BwDgztw67r5fR6FEZNYMROhll/LF/ghsRQ0AsejP4UYwUrB7R/WY738o4muuHISBlF1hnRwCAA0A1KavmQDLp63oeBDWZxX7K2doCJFA4OTeFtw73VZzpV5f7AIA3Jot4Orz1ZofG0KqUoxJiaAmIE3fArCQdevEiTKpGinR3myKlF4vEG4Bom0hHNpp4UZ8Y9Jzj38gvWbwecXFatH4NuKiYw/2AUr0BlDRUGb8K+d/EXPfHSxk3cpk88su3i6WAjABoGYAJRUpAKDFmiYlEzxsiFSAlAbiIEsO9HSF4zXJ0facECMi4vguLegDBsUJpCSuGoE9sFoHBID0WHeChnFSMv6rUQEGJhNXxctTgy/8jBogACyPRxJlx40ZynWIpP1ATwCAay5CsSCsarlZ2aLPxrJHz+y3TgEat1+tPH1zKfrOE/Bf6jfqoGfDhy3C+QAAAABJRU5ErkJggg=="/>
  )} style={{
    color: '#3b5998'
  }}>{children}</Icon>
);

Facebook.propTypes = {
  children: PropTypes.string,
};

Facebook.defaultProps = {
  children: ''
};

export default Facebook;