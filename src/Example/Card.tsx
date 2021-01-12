import { Rect, Text, Circle, Image, Group } from 'g6-react-node';
import React from 'react';

const Card = () => {
  return (
    <Rect
      style={{
        width: 400,
        height: 'auto',
        fill: '#fff',
        stroke: '#ddd',
        shadowColor: '#eee',
        shadowBlur: 8,
        radius: [8],
        justifyContent: 'center',
        padding: [18, 0],
      }}
    >
      <Text
        style={{
          fill: '#000',
          margin: [0, 24],
          fontSize: 16,
          fontWeight: 'bold',
        }}
      >
        这是一个卡片
      </Text>
      <Text style={{ fill: '#ccc', fontSize: 12, margin: [12, 24] }}>
        我是一段特别特别特别特别特别特别特别长的描述
      </Text>
    </Rect>
  );
};

export default Card;
