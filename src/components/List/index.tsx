import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import TextInput from 'rax-textinput';

import ListItem from '../ListItem';
import './index.css';
import ScrollView from 'rax-scrollview';

const List = () => {
  // 声明列表内元素结构
  interface LItem {
    id: number;
    content: string;
    done: boolean;
  }
  // 初始化 itemId 每次添加新列表项就 +1
  const [itemId, setItemId] = useState(0);
  // 初始化列表
  const [list, setList] = useState<LItem[]>([]);
  // 初始化 TextInput 内容
  const [inputValue, setInputValue] = useState('');

  // 输入框输入事件
  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  // 添加按钮点击事件
  const handleAddButtonClick = () => {
    // 构造列表项数据结构
    const item = {
      id: itemId,
      content: inputValue,
      done: false,
    };
    // immutable 思想 生成新的引用
    const newList = [...list, item];
    setList(newList);
    // 清空输入框
    setInputValue('');
    // itemId ++
    setItemId(itemId + 1);
  };

  // 列表项点击事件
  const handleItemClick = (id: number) => {
    // 遍历列表 当事件未完成时标记为已完成 当事件已完成时删除
    const newList = list.filter((item) => {
      if (item.id === id) {
        if (item.done) {
          return false;
        } else {
          item.done = true;
        }
      }
      return true;
    });
    setList(newList);
  };

  return (
    <View className="list">
      <View className="list-input-wrapper">
        <TextInput
          className="list-input"
          value={inputValue}
          onInput={handleUserInput}
        />
        <View className="list-add-button" onClick={handleAddButtonClick}>
          <Text>添加</Text>
        </View>
      </View>
      <View className="list-content">
        <ScrollView>
          <View className="list-item-wrapper">
            {list.map((item) => (
              <ListItem
                key={item.id}
                id={item.id}
                content={item.content}
                done={item.done}
                onClick={handleItemClick}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default List;
