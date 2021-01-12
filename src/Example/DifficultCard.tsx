import { Rect, Text, Circle, Image, Group } from 'g6-react-node';
import React from 'react';

const OneMan: React.FC<{ marginTop: number }> = ({ marginTop }) => {
  return (
    <Rect style={{ marginTop: marginTop }}>
      <Text
        style={{
          fontWeight: 500,
          marginLeft: 120,
          fill: '#004ef5',
          next: 'inline',
        }}
      >
        名字（花名）
      </Text>
      <Text style={{ marginLeft: 140, fill: '#aaa' }}>PN 职位-细分</Text>
      <Text
        style={{
          fontSize: 12,
          textAlign: 'center',
          fill: '#333',
          marginLeft: 200,
          marginTop: 12,
        }}
      >
        某某某某事业部
      </Text>
      <Text
        style={{
          fontSize: 12,
          textAlign: 'center',
          fill: '#333',
          marginLeft: 200,
          marginTop: 24,
        }}
      >
        D人数 20/团队 223
      </Text>
      <Rect
        style={{
          width: 40,
          height: 20,
          fill: '#bbb',
          radius: [9],
          marginLeft: 120,
          marginTop: 32,
          next: 'inline',
        }}
      >
        <Text style={{ fill: '#fff', marginLeft: 124 }}>标签A</Text>
      </Rect>
      <Rect
        style={{
          width: 40,
          height: 20,
          fill: '#bbb',
          radius: [9],
          marginLeft: 128,
          marginTop: 32,
          next: 'inline',
        }}
      >
        <Text style={{ fill: '#fff', marginLeft: 132 }}>标签A</Text>
      </Rect>
      <Rect
        style={{
          width: 40,
          height: 20,
          fill: '#bbb',
          radius: [9],
          marginLeft: 136,
          marginTop: 32,
        }}
      >
        <Text style={{ fill: '#fff', marginLeft: 140 }}>标签A</Text>
      </Rect>
    </Rect>
  );
};

const DifficultCard = () => {
  return (
    <Rect
      style={{
        width: 400,
        height: 600,
        fill: '#fff',
        stroke: '#ddd',
        shadowColor: '#ccc',
        shadowBlur: 8,
        radius: [8],
      }}
    >
      <Group>
        <Rect
          style={{
            width: 40,
            height: 20,
            fill: '#cf6e41',
            radius: [8, 0, 8, 0],
            next: 'inline',
          }}
        >
          <Text style={{ fill: '#fff', marginLeft: 8 }}>风险</Text>
        </Rect>
        <Circle
          style={{
            r: 36,
            fill: '#fff',
            marginLeft: 48,
            shadowColor: '#ccc',
            shadowBlur: 14,
            next: 'inline',
          }}
        >
          <Rect
            style={{
              width: 80,
              height: 20,
              fill: '#ed6e48',
              radius: [4],
              marginTop: -66,
              marginLeft: 10,
            }}
          >
            <Text style={{ fill: '#fff', marginLeft: 20 }}>子战役主将</Text>
          </Rect>
          <Image
            style={{
              img:
                'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
              width: 48,
              height: 48,
              marginLeft: 25,
              marginTop: -46,
            }}
          />
        </Circle>
        <Circle
          style={{
            r: 36,
            fill: '#fff',
            marginLeft: 82,
            shadowColor: '#ccc',
            shadowBlur: 14,
            next: 'inline',
          }}
        >
          <Rect
            style={{
              width: 70,
              height: 20,
              fill: '#ed6e48',
              radius: [4],
              marginTop: -74,
              marginLeft: 51,
            }}
          >
            <Text style={{ fill: '#fff', marginLeft: 62 }}>核心战匠</Text>
          </Rect>
          <Rect
            style={{
              width: 40,
              height: 16,
              fill: '#aaa',
              radius: [4],
              marginTop: -116,
              marginLeft: 66,
            }}
          >
            <Text style={{ fill: '#fff', marginLeft: 68 }}>Acting</Text>
          </Rect>
          <Image
            style={{
              img:
                'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
              width: 48,
              height: 48,
              marginLeft: 60,
              marginTop: -60,
            }}
          />
        </Circle>
        <Circle
          style={{
            r: 36,
            fill: '#fff',
            marginLeft: 108,
            shadowColor: '#ccc',
            shadowBlur: 14,
            next: 'inline',
          }}
        >
          <Rect
            style={{
              width: 40,
              height: 20,
              fill: '#aaa',
              radius: [4],
              marginTop: -66,
              marginLeft: 88,
            }}
          >
            <Text style={{ fill: '#fff', marginLeft: 96 }}>成员</Text>
          </Rect>
          <Image
            style={{
              img:
                'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
              width: 48,
              height: 48,
              marginLeft: 84,
              marginTop: -46,
            }}
          />
        </Circle>
        <Rect
          style={{
            fill: '#004ef5',
            width: 24,
            height: 24,
            radius: [8],
            marginLeft: 130,
            marginTop: -12,
          }}
        ></Rect>
      </Group>
      <Group>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            textAlign: 'center',
            marginLeft: 200,
            marginTop: -12,
          }}
        >
          阿里大脑
        </Text>
        <Text
          style={{
            fontSize: 12,
            textAlign: 'center',
            fill: '#aaa',
            marginLeft: 200,
          }}
        >
          计划人数 1000/实际人数 1000/兼职人数 800
        </Text>
        <Text
          style={{
            fontSize: 12,
            textAlign: 'center',
            fill: '#aaa',
            marginLeft: 200,
            marginTop: 12,
          }}
        >
          阿里大脑是驱动组织治理数字化转型的智能中枢。
        </Text>
        <Text
          style={{
            fontSize: 12,
            textAlign: 'center',
            fill: '#aaa',
            marginLeft: 200,
            marginTop: 12,
          }}
        >
          围绕集团“人、财、物、事”提供全链路数字化解决方案。
        </Text>
      </Group>
      <OneMan marginTop={-70} />
      <OneMan marginTop={-200} />
    </Rect>
  );
};

export default DifficultCard;
