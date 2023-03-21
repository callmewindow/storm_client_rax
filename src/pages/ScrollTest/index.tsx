import { createElement, Component, render, createRef, useState } from 'rax';

// import DriverUniversal from 'driver-universal';
import View from 'rax-view';
import Text from 'rax-text';
import ScrollView, { ScrollViewRefObject } from 'rax-scrollview';


const styles = {
  root: {
    width: '750rpx',
    paddingTop: '20rpx',
  },
  sticky: {
    position: 'sticky',
    width: '750',
    backgroundColor: '#cccccc',
  },
  container: {
    padding: '20rpx',
    borderStyle: 'solid',
    borderColor: '#dddddd',
    borderWidth: '1rpx',
    marginLeft: '20rpx',
    marginRight: '20rpx',
    marginBottom: '10rpx',
  },
  button: {
    margin: '7rpx',
    padding: '5rpx',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: '3rpx',
  },
  box: {
    width: '64rpx',
    height: '64rpx',
  },
  eventLogBox: {
    padding: '10rpx',
    margin: '10rpx',
    height: '80rpx',
    borderWidth: '1rpx',
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
};


function Thumb() {
  return (
    <View style={styles.button}>
      <View style={styles.box} />
    </View>
  );
}

const THUMBS = new Array(20).fill(1);
const createThumbRow = (val, index) => <Thumb key={index} />;


const horizontalScrollView = createRef<ScrollViewRefObject>();
let thisScrollView: ScrollViewRefObject;

export default function ScrollTest() {
  const [state, setState] = useState({
    horizontalScrollViewEventLog: false,
    scrollViewEventLog: false,
  });

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <ScrollView
          ref={horizontalScrollView}
          style={{
            height: '100rpx',
          }}
          horizontal
          onEndReached={() =>
            setState({ horizontalScrollViewEventLog: true, scrollViewEventLog: state.scrollViewEventLog })
          }
        >
          {THUMBS.map(createThumbRow)}
        </ScrollView>

        <View
          style={styles.button}
          onClick={() => {
            if (horizontalScrollView.current) { horizontalScrollView.current.scrollTo({ x: 0 }); }
          }}
        >
          <Text>Scroll to start</Text>
        </View>

        <View style={styles.eventLogBox}>
          <Text>
            {state.horizontalScrollViewEventLog ? 'onEndReached' : ''}
          </Text>
        </View>
      </View>

      <View style={{ ...styles.container, height: '500rpx' }}>
        <ScrollView
          ref={(scrollView: ScrollViewRefObject) => {
            thisScrollView = scrollView;
          }}
          onEndReached={() => setState({
            scrollViewEventLog: true,
            horizontalScrollViewEventLog: state.horizontalScrollViewEventLog,
          })}
        >
          <View>
            <View style={styles.sticky}>
              <Text>Cannot sticky</Text>
            </View>
          </View>

          <View style={styles.sticky}>
            <Text>Sticky view must in ScrollView root</Text>
          </View>

          {THUMBS.map(createThumbRow)}
        </ScrollView>

        <View
          style={styles.button}
          onClick={() => {
            thisScrollView.scrollTo({ y: 0 });
          }}
        >
          <Text>Scroll to top</Text>
        </View>

        <View style={styles.eventLogBox}>
          <Text>{state.scrollViewEventLog ? 'onEndReached' : ''}</Text>
        </View>
      </View>
    </View>
  );
}
