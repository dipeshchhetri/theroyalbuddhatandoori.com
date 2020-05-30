import React from 'react';
import PropTypes from 'prop-types';

import Icon from './icon';

const Tripadvisor = ({ children }) => (
  <Icon icon={(
    <img alt="Tripadvisor" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAADfElEQVQ4je2UTWxTBQDH/+9z3XttX/tKW9ey0XVfDJwCWSIsrmZFEkZijRchJCzEuJGgJgtqwuIF48EYdiAGDnIyRknGgQ11UyEzggZxTEwkhdV+rNnsB9t8o++9ruv79KwX9Ky/6z/53X5/4D8H8ZidBxAB4AawAWAZgPRvhX5BEN52cI4+WHYHYDsI2LZlgbQBm6aZxVqtlqvX65/VarUrAOy/CAVBeJ+iKNE0TYKk6YCu1w8ILsHqDNbkNxMO8elW2uFxklhXLaQKpv7OpY1HJdnp0TSNMgxTphlqplqt5kiQXsuyTJokye5oW/TFcrkMnuPBOXmYugHJJrlPfmakC9tXHADgaiRw8btGdYMQxfBWF8XxPFRV8aiyfJShGPi2+LC0vPQpQVHUIX/AP928bRteOnwEfbEYSsUivp+dxdyPt8BSdmXqjVX36Md29f6qyO8fHCSGhkfAMAw0TcP01CS+ufo5spk0VEU9QvTs2XWRJqjh0bExTF2+jEwqBcMwEAqHMTQygvNnzyLgqq8X1izn1mgbM/za6zg/Po7i8jI4pxP7+vtxeGgIp06cgK5p98gGpuGFnt278bBcRj6bxcD+ARw8eACmaWJyYgLPxuN4sCi7dcNkBhMJfHTuHDRNw97nB9Db14fZr7/Cw1IJT4RCsGFHyaqiePrjcaSSSTSFQhBX5rB37QqaIxHIlQpaIhFsbm5SBEHAt8UPSZKwvWcnbot/IKOtINDUhOszM/B4PAAAkmEZvVwsor2rC8VCAVrzM/jV3Q9FluEWBOQyGRi6Adu2cfPbWfiDQeQzOTwpufBUuAOqrED0+VCpPALDsmWSopm716a/RCweR9eOHZj64hqu3riH/GIOR48fRyqZhKPRAUVR8MudO3jl5ElUJAkPbszh+sQkOJ7DYCKBpXweuqbPETzPB6Pt7QuCIHhePnYMu3p7kUmn0d7ZiQvj45j/6bbBcxylKIrtdrkhiCI5evo0CoUCLNPEvlgMH5w5g1QyqS9msy0EAPA8H+zo7prUNut7WLaBFbxeQlpbBc0wKsfxr6YXFk6ZpqkKXu9Nt8s1RjN0Q6ApBJZlsFIqQ1Vkk2bY9+7Oz7/79/T4cDg8IPi8z+n1+v10Kn0JQN3pdHarqroOoCwIQltLa+uHXKNjJwiCNkzrd0VV3/otmfzhMb/wP/+QPwFPw3Wiu+KXgQAAAABJRU5ErkJggg=="/>
    )} style={{
      color: '#3b9874'
    }}>{children}</Icon>
);

Tripadvisor.propTypes = {
  children: PropTypes.string,
};

Tripadvisor.defaultProps = {
  children: '',
};

export default Tripadvisor;