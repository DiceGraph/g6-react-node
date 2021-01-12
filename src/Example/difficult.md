# 复杂卡片案例

```jsx
import React from 'react';
import G6 from '@antv/g6';
import { createNodeFromReact } from 'g6-react-node';
import { G6MiniDemo } from '../ReactNode/demo';
import Card from './DifficultCard';

G6.registerNode('test', createNodeFromReact(Card));

export default () => <G6MiniDemo nodeType="test" count={1} height={800} />;
```
