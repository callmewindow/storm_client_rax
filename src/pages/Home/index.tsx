import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import ScrollView from 'rax-scrollview';

import styles from './index.module.css';
import Logo from '../../components/Logo';
import List from '../../components/List';

export default function Home() {
  return (
    <View className={styles.homeContainer}>
      <Logo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" />
      <Text className={styles.homeTitle}>Welcome to Your Rax App</Text>
      <Text className={styles.homeInfo}>More information about Rax</Text>
      <Text className={styles.homeInfo}>Visit https://rax.js.org</Text>
      <View className={styles.welcomeInfo}>
        {/* 滚动视图默认不具备高度属性 */}
        <Text>我的第一个跨端Web项目</Text>
        {/* 默认单位是rpx */}
        <Text style={{ marginBottom: 20 }}>如下是一个待办事项清单</Text>
        <List />
      </View>
    </View>
  );
}
